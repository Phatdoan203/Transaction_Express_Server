import * as services from '../services'

import {Request, Response} from "express";
import {internalServerError} from "../middleware/handle_error";
import {producer} from "../config/kafka_config/kafka";

export const createTransactionController = async (req : Request, res : Response) : Promise<void> => {
    try {
        // console.log('Request body:', req.body); // Thêm log
        const transaction = await services.createTransactions(req.body);
        const jsonMessage = JSON.stringify(transaction);

        await producer.send({
            topic: "check_money_laudering",
            messages: [{value : jsonMessage}]
        }).catch(err => {
            console.log(err)
        })
        res.status(201).json(transaction);
        console.log(transaction);
    } catch (error : any) {
        internalServerError(res);
    }
}