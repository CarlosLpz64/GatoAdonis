import { Schema, model } from "@ioc:Mongoose";

export default model('Partida', new Schema(
    {
        host: String,
        guest: String,
        gatito: Array,
        ganador: String,
        estado: String,
        turno: String
    }
))