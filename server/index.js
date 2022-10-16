import express from 'express'
import cors from 'cors'
import Connection from './database/db.js';
import route from './routes/route.js';

const PORT=process.env.PORT || 8000;


const app=express();
app.use(cors());
app.use(express.json())


app.use('/',route)
Connection()

app.listen(PORT,()=>{
    console.log('Server is running on port '+ PORT);
})