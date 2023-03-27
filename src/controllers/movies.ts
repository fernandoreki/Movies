import { Request, Response } from "express";

const getAll = (req: Request, res: Response) => {
    //TODO search in DB for all movies
    return res.status(200).json( {
        data: {}
    });
};

const get = (req: Request, res: Response) => {
    const id = req.params.id;
    //TODO search in DB for all movies
    return res.status(200).json( {
        data: {}
    });
};

const create = (req: Request, res: Response) => {
    const {title, year} = req.body;
    //TODO storage movie into db
    return res.status(200).json( {
        data: {}
    });
};

const update = (req: Request, res: Response) => {
    const id = req.params.id;
    const {title, year} = req.body;
    //TODO find by id and update in db
    return res.status(200).json( {
        data: {}
    });
};

const remove = (req: Request, res: Response) => {
    const id = req.params.id;
    //TODO search by id and delete
    return res.status(200).json( {
        data: {}
    });
};

export default {getAll, get, create, update, remove};