import {Router} from 'express';
import * as SlowAPIController from '../controller/slowapi.controller.js'
const router = Router();

router.get("/slow-api", SlowAPIController.getUserwithProduct)

export default router;