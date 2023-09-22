import Joi from 'joi';

const email = Joi.string().required().email({
    minDomainSegments: 2
}).messages({
    'string.empty': 'Email is required',
    'string.email': 'Email is invalid'
})

const password = Joi.string().required().min(8).max(35).alphanum().messages({
    'string.empty': 'Password is required',
    'string.min': 'Password must be at least 8 characters long',
    'string.max': 'Password must be at most 35 characters long',
    'string.alphanum': 'Password must only contain alpha-numeric characters'
})

export const createUserSchema = Joi.object({
    email,
    password,
    name: Joi.string().required().min(3).max(50).messages({
        'string.empty': 'Name is required',
        'string.min': 'Name must be at least 3 characters long',
        'string.max': 'Name must be at most 50 characters long'
    }),
    photo: Joi.string().required().uri().messages({
        'string.empty': 'Photo is required',
        'string.uri': 'Photo must be a valid URL'
    }),
    country: Joi.string().required().messages({
        'string.empty': 'Country is required'
    })
});

export const userSignInSchema = Joi.object({
    email,
    password
});