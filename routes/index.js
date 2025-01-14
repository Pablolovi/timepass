const express = require('express');
const router = express.Router();

// Ruta principal
router.get('/', (req, res) => {
  const mensaje = req.query.mensaje || ''; // Obtener mensaje de error si existe
  const horaActual = req.horaTotal || 'Hora no disponible';

  // Enviar respuesta con hora actual y mensaje (si existe)
  res.send(`
    <h1>¡Bienvenido! La hora actual es: ${horaActual}</h1>
    <p>${mensaje}</p>
    <a href="/endroute"><button>Ir a Endroute</button></a>
  `);
});

module.exports = router;