import { registerAs } from '@nestjs/config';

export default registerAs('mail', () => ({
  senderName: `${process.env.SENDER_NAME}`,
  senderEmail: `${process.env.SENDER_EMAIL}`,
  username: `${process.env.EMAIL_USERNAME}`,
  password: `${process.env.EMAIL_PASSWORD}`,
  host: `${process.env.EMAIL_HOST}`,
  port: process.env.EMAIL_PORT,
  secure: process.env.EMAIL_SECURE,
}));
