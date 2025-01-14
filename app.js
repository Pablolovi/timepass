const express = require('express')
const app = express();
const horaMiddleware = require('./middlewares/horaMiddleware');
const endrouteRouter = require('./routes/endroute');
const indexRouter = require('./routes/index');

app.use(horaMiddleware);

app.use('/', indexRouter);
app.use('/endroute', endrouteRouter);

app.use((req, res, next) => {
    res.status(404).send('<h1>404 Not Found</h1><p>La página que estás buscando no existe</p>')
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});