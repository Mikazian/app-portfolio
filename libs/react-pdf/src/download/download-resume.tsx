import { pdf } from '@react-pdf/renderer';
import { GlobalWorkerOptions, getDocument } from 'pdfjs-dist';
import { ResumeFileType, ResumeMode } from '@app-portfolio/enums';
import workerUrl from 'pdfjs-dist/build/pdf.worker.min.mjs?url';
import ResumeDocument from '../components/ResumeDocument';
import { resumeColors } from '../styles';

GlobalWorkerOptions.workerSrc = workerUrl;

const IMAGE_SCALE = 2;

type DownloadResumeParams = {
  fileType: ResumeFileType;
  mode: ResumeMode;
};

const getResumeFileName = (fileType: ResumeFileType, mode: ResumeMode): string => {
  const base = mode === ResumeMode.PRINT ? 'cv-mike-xiong-impression' : 'cv-mike-xiong';
  return `${base}.${fileType}`;
};

const triggerDownload = (blob: Blob, fileName: string): void => {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
};

const PREVIEW_SCALE = 1;

/**
 * Rend la première page d'un blob PDF dans un canvas (pdfjs).
 * @param {Blob} pdfBlob - Blob PDF
 * @param {number} scale - Échelle de rendu (72 dpi par défaut)
 * @returns {Promise<HTMLCanvasElement>}
 */
const renderPdfFirstPage = async (pdfBlob: Blob, scale: number): Promise<HTMLCanvasElement> => {
  const task = getDocument({ data: await pdfBlob.arrayBuffer() });
  const doc = await task.promise;
  const page = await doc.getPage(1);
  const viewport = page.getViewport({ scale });

  const canvas = document.createElement('canvas');
  canvas.width = viewport.width;
  canvas.height = viewport.height;

  const canvasContext = canvas.getContext('2d');
  if (!canvasContext) {
    throw new Error('Impossible de créer le contexte canvas.');
  }

  await page.render({
    canvasContext,
    canvas,
    viewport,
    background: resumeColors.background,
  }).promise;

  return canvas;
};

const renderPdfToImage = async (pdfBlob: Blob, mimeType: string): Promise<Blob> => {
  const canvas = await renderPdfFirstPage(pdfBlob, IMAGE_SCALE);

  const imageBlob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, mimeType));
  if (!imageBlob) {
    throw new Error('Conversion du CV en image échouée.');
  }
  return imageBlob;
};

/**
 * Génère un aperçu du CV (première page rendue en image) sous forme de data URL.
 * @param {ResumeMode} mode - Préréglage du CV
 * @returns {Promise<string>} - Data URL PNG de l'aperçu
 */
export const renderResumePreview = async (mode: ResumeMode): Promise<string> => {
  const pdfBlob = await pdf(<ResumeDocument mode={mode} />).toBlob();
  const canvas = await renderPdfFirstPage(pdfBlob, PREVIEW_SCALE);
  return canvas.toDataURL('image/png');
};

export const downloadResume = async ({ fileType, mode }: DownloadResumeParams): Promise<void> => {
  const pdfBlob = await pdf(<ResumeDocument mode={mode} />).toBlob();

  if (fileType === ResumeFileType.PDF) {
    triggerDownload(pdfBlob, getResumeFileName(fileType, mode));
    return;
  }

  const mimeType = fileType === ResumeFileType.PNG ? 'image/png' : 'image/jpeg';
  const imageBlob = await renderPdfToImage(pdfBlob, mimeType);

  triggerDownload(imageBlob, getResumeFileName(fileType, mode));
};
