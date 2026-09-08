import emailjs from '@emailjs/browser';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useContact } from '../../../../contexts/ContactContext';
import { useLanguage } from '../../../../contexts';
import { aboutSections, getSectionLabel } from '../../navigation/about-sections';
import Button from '../../../common/Button';
import Card from '../../../common/Card';
import TextAreaField from '../../../common/TextAreaField';
import TextField from '../../../common/TextField';
import SectionLayout from '../../../layout/SectionLayout';
import { createContactSchema, type ContactForm } from '@app-portfolio/validator';

const UserContact = () => {
  const [isSending, setIsSending] = useState(false);
  const { triggerContactAlert } = useContact();
  const { locale, translate } = useLanguage();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(createContactSchema(locale)),
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSending(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      reset();
      triggerContactAlert('success', translate('contact.success'));
    } catch {
      triggerContactAlert('error', translate('contact.error'));
    } finally {
      setIsSending(false);
    }
  };

  const section = aboutSections.find((s) => s.id === 'contact')!;

  return (
    <SectionLayout id={section.id} title={getSectionLabel(section, locale)}>
      <Card>
        <form className="flex flex-col gap-8" onSubmit={handleSubmit(onSubmit)} noValidate>
          <TextField
            label={translate('contact.name')}
            placeholder={translate('contact.namePlaceholder')}
            error={errors.name?.message}
            {...register('name')}
          />

          <TextField
            label={translate('contact.email')}
            type="email"
            placeholder={translate('contact.emailPlaceholder')}
            error={errors.email?.message}
            {...register('email')}
          />

          <TextAreaField
            label={translate('contact.message')}
            placeholder={translate('contact.messagePlaceholder')}
            error={errors.message?.message}
            {...register('message')}
          />

          <div className="mt-4 w-full">
            <Button type="submit" disabled={isSending} additionalClass="h-12 w-full">
              {isSending ? translate('contact.sending') : translate('contact.submit')}
            </Button>
          </div>
        </form>
      </Card>
    </SectionLayout>
  );
};

export default UserContact;
