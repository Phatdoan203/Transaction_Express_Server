import express from "express";
import * as controller from '../controller'

const router = express.Router();
export const transactionRoute = (app : express.Application) : void => {
    router.post("/add", controller.createTransactionController);
    app.use("/api/transactions", router);
}