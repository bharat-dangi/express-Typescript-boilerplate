import Joi from "joi";

const drayOSGenerateSchema = Joi.object({
  code: Joi.string().optional(),
  requestingEntityId: Joi.string().required(),
  expiration: Joi.date().required(),
  referenceNumber: Joi.string().required(),
  additionalData: Joi.object().optional(),
});
