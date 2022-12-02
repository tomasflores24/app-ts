import axios from "axios";
import { Request, Response} from 'express'

export const getCountries = async(_req:Request, res:Response) => {
    const countries = await axios('https://restcountries.com/v3/all');
    return res.json({ msj: 'gggg', data: countries.data });
}