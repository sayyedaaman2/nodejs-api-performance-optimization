import {Router} from 'express';
import * as UserController from '../controller/user.controller.js';
const router = Router();

router.get("/users/orders",UserController.getUserWithOrders)

export default router;