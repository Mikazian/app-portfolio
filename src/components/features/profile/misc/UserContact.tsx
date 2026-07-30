import emailjs from '@emailjs/browser';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useContact } from '../../../../contexts/ContactContext';
import { aboutSections } from '../../navigation/about-sections';
import Button from '../../../common/Button';
import Card from '../../../common/Card';
import TextAreaField from '../../../common/TextAreaField';
import TextField from '../../../common/TextField';
import SectionLayout from '../../../layout/SectionLayout';
import { contactSchema, type ContactForm } from '../../../../validator/contact.schema';

const UserContact = () => {
  const [isSending, setIsSending] = useState(false);
  const { triggerContactAlert } = useContact();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
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
      triggerContactAlert('success', 'Message envoyé avec succès');
    } catch {
      triggerContactAlert('error', "Erreur lors de l'envoi du message");
    } finally {
      setIsSending(false);
    }
  };

  const section = aboutSections.find((s) => s.id === 'contact')!;

  return (
    <SectionLayout id={section.id} title={section.label}>
      <Card>
        <form className="flex flex-col gap-8" onSubmit={handleSubmit(onSubmit)} noValidate>
          <TextField
            label="Nom"
            placeholder="Votre nom"
            error={errors.name?.message}
            {...register('name')}
          />

          <TextField
            label="Email"
            type="email"
            placeholder="votre@email.com"
            error={errors.email?.message}
            {...register('email')}
          />

          <TextAreaField
            label="Message"
            placeholder="Votre message..."
            error={errors.message?.message}
            {...register('message')}
          />

          <div className="mt-4 w-full">
            <Button type="submit" disabled={isSending} additionalClass="h-12 w-full">
              {isSending ? 'Envoi...' : 'Envoyer'}
            </Button>
          </div>
        </form>
      </Card>
    </SectionLayout>
  );
};

export default UserContact;
