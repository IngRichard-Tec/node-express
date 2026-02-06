const express = require('express');
const session = require('express-session'); //1. IMportar las librerias
const { logRequest } = require('./middleware');
                                       
const app = express();
const port = 3000;

const rutaAuth = require('./auth');
const rutaUsuarios = require('./pages/usuarios');

// 2. Para poder leer JSON en el body de los POST
app.use(express.json());
app.use(session({
    secret: 'contraseña',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false } // false para HTTP (localhost), true para HTTPS
}));

app.use(logRequest);

app.use('/usuarios', rutaUsuarios);
app.use('/auth', rutaAuth);

app.get('/', (req, res) => {
    res.send('Página principal de mi ejercicio de EXPRESS');
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el http://localhost:${port}`);
});