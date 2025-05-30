import * as dotenv from 'dotenv';
import {
  APIRequestContext,
  Page,
  PlaywrightWorkerArgs,
  WorkerFixture,
  request,
  test as base
}
  from '@playwright/test';

dotenv.config();

export const O3_URL = `${process.env.TEST_ENVIRONMENT}` == 'qa' ? `${process.env.O3_URL_QA}` : `${process.env.O3_URL_DEV}`;
export const KEYCLOAK_URL = `${process.env.TEST_ENVIRONMENT}` == 'qa' ? `${process.env.KEYCLOAK_URL_QA}` : `${process.env.KEYCLOAK_URL_DEV}`;
