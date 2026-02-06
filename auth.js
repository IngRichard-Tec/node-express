const express = require('express');
const router = express.Router(); // Crear el objeto router.

router.post('/login', (req, res) => {
    const { username, password } = req.body;

    //Simulación de validacion (en caso de que se maneje un BD)
    if(username === 'richard' & password === '1234') {

        //CREAR LA SESION
        req.session.user = { id: 1, name: 'Ricardo Elizalde' };
        return res.json({ mensaje: "Login existoso. Sesion iniciada" });
    }

    return res.status(401).json({ error: "Credenciales incorrectas" });
});

module.exports = router;