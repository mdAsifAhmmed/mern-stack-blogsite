import  Express from "express";
import cors from "cors";
import bodyParser from "body-parser";
// components
import Connection from "./database/db.js";
import Router from "./routes/route.js";


const app = Express();

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',Router)

const PORT = 8000;

app.listen(PORT, ()=> console.log(`Server is runing Successfully on PORT ${PORT}`))



Connection();