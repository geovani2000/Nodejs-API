import express from 'express';
import zapateraRuta from './routes/zapateria.routes.js'
import indexRuta from './routes/index.routes.js'
import { PORT} from './config.js';


const app = express();
app.use(express.json())


app.use(indexRuta)
app.use('/api',zapateraRuta)
app.listen(PORT);

console.log("listo nuestro servidor",PORT);
