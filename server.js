import "./config/env.js";
import express from 'express';

import {connectDB} from './lib/database.js'
import redis from './lib/redis.js'
import serverConfig from './config/server.config.js'
import {corsSetup} from './middleware/corsMiddleware.js'
import { globalErrorHandler } from './middleware/errorHandler.js'
import { logger } from './middleware/loggerMiddleware.js';
import { appLogger } from './util/logger.js';
import rootRoutes from './route/index.js'
import seed from './script/seed.js'
import { limiter } from "./middleware/rateLimitMiddleware.js";
async function serverStart() {
    try {
        
        await connectDB();
        // Initial data
        // seed();
        // express instance
        const app = express();

        // middleware
        app.use(corsSetup());
        // rate-limit
        app.use(limiter) 
        // logger
        app.use(logger)
        //
        //json body
        app.use(express.json());

        // urlencoded 
        app.use(express.urlencoded({ extended: true }));

        // routes
        app.get("/ping", (req, res, next) => {
            res.status(200).send({
                success: true,
                message: "PONG"
            })
        })
        
        app.use(rootRoutes);
        // global error handler
        app.use(globalErrorHandler)



        app.listen(serverConfig.PORT, () => {
            appLogger.info(`Server is running on port ${serverConfig.PORT}`);


        });
    } catch (error) {
        throw new Error(`Error while starting the server : ${error}`);
    }
}

serverStart();