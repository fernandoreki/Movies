import { Request, Response } from "express";
import config from "../config/config";
import Movie from "../interfaces/movie";
import mongoose from "mongoose";
import movie from "../interfaces/movie";

const getAll = (req: Request, res: Response) => {
    //TODO search in DB for all movies
    movie.find().then((movie) => {
        return res.send(movie);
    }).catch(err => {
        return res.status(400).send("Movie does not exist");
    });
};

const get = (req: Request, res: Response) => {
    const id = req.params.id;
    //TODO search in DB for all movies
    return res.status(200).json( {
        data: {}
    });
};

const create = async (req: Request, res: Response) => {
    const {title, year} = req.body;
    //TODO storage movie into db
    if (title === '' || year === '' || !title || !year) {
        res.status(400).json({
            message: 'Title or year cannot be empty'
        });
        return;
    }

    const movie = new Movie({
        _id: new mongoose.Types.ObjectId(),
        title,
        year
    })

    const result =  await movie.save();

    return res.status(200).json({
        message: 'Register Sucess',
        data: {
            title,
            year,
            id: result.id
        }
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