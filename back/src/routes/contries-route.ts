import express from 'express'
// import {getCountries} from '../controllers/contries-controllers'
import axios from 'axios';

const router = express.Router();

// router.get('/', getCountries)
router.get('/', async(_req, res) => {
    const countries = await axios('https://restcountries.com/v3/all');   
    return res.json({data:countries.data})
})

export default router;
