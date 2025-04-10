import createError from "http-errors";
import { Request, Response } from "express";

export const badRequest = (err : any, res : Response ) => {
    const error = createError.BadRequest(err);
    return res.status(error.status).json({
        err : 1,
        mes: error.message
    })
}

export const internalServerError = (res : Response) => {
    const error = createError.InternalServerError();
    return res.status(error.status).json({
        err: -1,
        mes: error.message
    })
}

export const notFound = (req : Request, res : Response) => {
    const error = createError.NotFound('This route is not defined');
    return res.status(error.status).json({
        err: 1,
        mes: error.message
    })
}