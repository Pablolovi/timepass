const hora = 18;

module.exports = (req, res, next) => {

    if (req.horaActual < hora || req.horaActual >= 24) {
        const mensaje = `Aún no es la hora, espera hasta las ${hora}:00`
        return res.redirect('/?mensaje=' + encodeURIComponent(mensaje));
    }
    next();
};