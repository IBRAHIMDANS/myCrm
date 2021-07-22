import { registerAs } from '@nestjs/config';

export default registerAs('auth', () => ({
  secret: process.env.JWT_SECRET_KEY,
  expiresIn: process.env.JWT_EXPIRATION_TIME,
  hydraClientId: process.env.HYDRA_CLIENT_ID,
  hydraSecret: process.env.HYDRA_SECRET,
  hydraAdminUrl: process.env.HYDRA_ADMIN_URL,
}));
