import Joi from 'joi';

export const createUserSchema = Joi.object({
    email: Joi.string().required().email({
        minDomainSegments: 2
    }).messages({
        'string.empty': 'Email is required',
        'string.email': 'Email is invalid'
    }),
    password: Joi.string().required().min(8).max(35).alphanum().messages({
        'string.empty': 'Password is required',
        'string.min': 'Password must be at least 8 characters long',
        'string.max': 'Password must be at most 35 characters long',
        'string.alphanum': 'Password must only contain alpha-numeric characters'
        }),
    name: Joi.string().required().min(3).max(50).messages({
        'string.empty': 'Name is required',
        'string.min': 'Name must be at least 3 characters long',
        'string.max': 'Name must be at most 50 characters long'
        }),
    image: Joi.string().required().uri(),
    country: Joi.string().required()
});