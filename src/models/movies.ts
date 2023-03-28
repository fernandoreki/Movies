import { Document } from "mongoose";

export interface Movie extends Document {
    title: string;
    year: string;
}