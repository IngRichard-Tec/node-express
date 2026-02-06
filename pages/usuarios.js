const express = require('express');
const router = express.Router(); // Crear el objeto router.

//NEW: 
const { validateUserId, isAuthenticated } = require('../middleware');

// Ruta para la página principal de usuarios: /usuarios
router.get('/', isAuthenticated, (req, res) => {
    // res.send('Bienvenido a la página de Usuarios');

    res.status(200).json({
        total: 2,
        usuarios: [
            {id: 'user01', nombre: 'Ricardo Arturo'},
            {id: 'uswr02', nombre: 'Beatriz Aurora'}
        ]
    });
});

// //Ruta dínamica para un usuario especifico: /usuarios/:id
// router.get('/:id', validateUserId, (req, res) => {
//     // res.send(`Detalles del usuario con ID: ${req.params.id} `);

//     res.status(200).json({
//         mensaje: 'Detalle del usuario encontrado',
//         id: req.params.id
//     });
// });

//NUEVO
router.post('/nuevo', (req, res) => {
    res.status(201).json({
        mensaje: 'Usuario creado con éxito',
        timestamp: new Date()
    });
});

module.exports = router;