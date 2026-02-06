const logRequest = (req, res, next) => {
    console.log(`Solicitud recibida: ${req.method} en ${req.path}`);
    next();
};

const validateUserId = (req, res, next) => {
    const { id } = req.params;
    if (id && id.length <= 2) {
        return res.status(400).json({
            error: 'Formato de ID de usuario no valido. Debe de tener más de 2 caracteres'
        });
    }
    next();
};

const isAuthenticated = (req, res, next) => {
    //Verificar si existe la propiedad 'user' en la sesion.
    if (req.session & req.session.username) {
        return next();
    }
    else
    {
        return res.status(401).json({
            error: "Acceso denegado. Favor de iniciar sesión"
        });
    }
};

module.exports = { logRequest, validateUserId, isAuthenticated };