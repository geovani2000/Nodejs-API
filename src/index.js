import express from 'express';
import zapateraRuta from './routes/zapateria.routes.js'
import indexRuta from './routes/index.routes.js'

const app = express();
app.use(express.json())

app.use(indexRuta)
app.use('/api',zapateraRuta)
app.listen(3000);

console.log("listo nuestro servidor");
