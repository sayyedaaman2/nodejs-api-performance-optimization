import {Router} from 'express';
import * as SlowAPIController from '../controller/slowapi.controller.js'
import * as FastAPIController from '../controller/fastapi.controller.js'
const router = Router();

router.get("/slow-api", SlowAPIController.getUserwithProduct)

router.get("/fast-api", FastAPIController.getUserwithProduct)
export default router;