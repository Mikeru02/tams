import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import 'dotenv/config.js';

// TODO: Import version routes here!
import v1 from './routes/v1/index.js';

const app = express();
const port = process.env.API_PORT || 4000;

app.use(morgan("combined"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// TODO: Register version routes here!
app.use("/v1", cors(), v1);

app.listen(port, () => {
    console.log(`[RUNNING] Api is up and running at port ${port}`);
});

