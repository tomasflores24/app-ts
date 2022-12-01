import express from 'express'

const router = express.Router();

router.get('/', (_req, res) => {
    console.log("/countries, estoyn en el brach pract-contro....");
    return res.json({msg:'Route Create gg COuntries'});
})

export default router;