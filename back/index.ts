import express from 'express';
// import morgan from 'morgan'

const app = express();
app.use(express.json());
// app.use(morgan('dev'));

const PORT:number = 3001;

app.get('/ping', ( _,res ) => {
    // console.log("gogogo");
    return res.send("nuevo");
})

app.listen(PORT, () => {
    console.log(`%s Listening ${PORT}`);
})
