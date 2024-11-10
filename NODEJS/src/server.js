import express from 'express';
import bodyParser from 'body-parser';
import viewEngine from './config/viewEngine';
import initWebRoutes from './routes/web';
import dotenv from 'dotenv';
import connectDB from './config/connectDB';

dotenv.config();
let app = express();

//config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);

connectDB();

let port = process.env.PORT || 6969;
// port === undefined => port = 6969

app.listen(port, () => {
  console.log(`Backend is running on the port: localhost:${port}`);
});
