import Joi from 'joi';

import { EMAIL_NEED, FIRST_NAME_NEED, LAST_NAME_NEED } from '../const';

const userSchema = Joi.object({
  firstName: Joi.string().required().label(FIRST_NAME_NEED),
  lastName: Joi.string().required().label(LAST_NAME_NEED),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required()
    .label(EMAIL_NEED),
});

export default userSchema;
