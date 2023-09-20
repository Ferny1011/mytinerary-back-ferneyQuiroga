import express from 'express';
import userController from '../controllers/user.controller.js';
import { validator } from '../middlewares/validator.js';
import { createUserSchema } from '../schema/user.schema.js';


const router = express.Router();

router.post('/', validator(createUserSchema), userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);


export default router;