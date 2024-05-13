
import { EmailTemplate } from '@/components/email/Email-Template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);

  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: ['hoangvuvan677@gmail.com', email],
      subject: 'Hello world',
      react: EmailTemplate({ subject: subject, message: message}),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
