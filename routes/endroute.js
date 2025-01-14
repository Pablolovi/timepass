const express = require('express');
const router = express.Router();
const validarHora = require('../middlewares/validarHora');

// Ruta protegida
router.get('/', validarHora, (req, res) => {
  res.send(`
    <h1>Has llegado a la ruta protegida de Endroute.</h1>
    <p>¡Bienvenido! Estás en /endroute</p>
  `);
});

module.exports = router;
