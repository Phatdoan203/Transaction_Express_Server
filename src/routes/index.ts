import express from "express";
import {transactionRoute} from "./transaction.route";


const router = express.Router();

export const indexRoute =  (app : express.Application) => {
    transactionRoute(app);
    return app.use("/", router);
}