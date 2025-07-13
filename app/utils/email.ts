import emailjs from 'emailjs-com';

export const sendEmail = (name: string, message: string, email: string) => {
  return emailjs.send(
    'service_md01tbo',
    'template_z6ox5q6', 
    {
      from_name: name,
      message: message,
      reply_to: email,
    },
    'MAFIV1R3l5KQ43ZlE'
  );
};
