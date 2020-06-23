import Joi, { Schema } from '@hapi/joi';

declare module 'egg' {
  export interface Application {
    validator: Joi.Root;
  }

  export interface Context {
    validate: (schema: Schema, data?: any) => any;
  }
}
