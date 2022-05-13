import dotenv from 'dotenv-safe';

dotenv.config();

const config = {
  PORT: process.env.PORT || 8080,
  NODE_ENV: process.env.NODE_ENV,
  mongo: {
    PORT: 'xxxx',
  },
};

export { config };
