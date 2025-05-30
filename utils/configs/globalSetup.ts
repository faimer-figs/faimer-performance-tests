import * as dotenv from 'dotenv';

dotenv.config();

export const O3_URL = `${process.env.O3_URL}`;
export const KEYCLOAK_URL = `${process.env.KEYCLOAK_URL}`;
