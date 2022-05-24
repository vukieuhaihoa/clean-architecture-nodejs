import { ValidationError } from 'joi';

import userSchemaForAdd from './add-user-schema';
import userSchemaForUpdate from './patch-user-schema';

type Action = 'add' | 'patch';

const userValidator = (payload: any, action: Action) => {
  const schema = action === 'add' ? userSchemaForAdd : userSchemaForUpdate;
  const { error } = schema.validate(payload, {
    abortEarly: false,
  });

  if (error) {
    if (error instanceof ValidationError) {
      const message = error.details.map(el => el.context?.label).join('\n');
      return {
        error: message,
      };
    }
    return {
      error,
    };
  }

  return true;
};

const validator = {
  userValidatorForAdd: (payload: any) => userValidator(payload, 'add'),
  userValidatorForUpdate: (payload: any) => userValidator(payload, 'patch'),
};

export { validator };

export default validator;
