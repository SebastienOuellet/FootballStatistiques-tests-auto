import {config as dotenvConfig} from 'dotenv';

dotenvConfig({path: '.env.local'});

export const base = {
  url: process.env.BASE_URL || ''
}
