const {response} = require('express')
const usuariosGet = (req, res = response) => {
    const parametros = req.query;
    res.json({
        msg: 'get API - controlador',
        parametros
    });
}
const usuariosPut= (req, res) => {
    const id = req.params.id;
    res.json({
        msg: 'put API - controller',
        id
    })
}
const usuariosPost= (req, res) => {
    const {nombre,edad} = req.body;
    res.status(201).json({
        msg: 'post API',
        nombre,
        edad
    })
}
const usuariosDelete=(req, res) => {
    res.json({
        msg: 'delete API',
        cantidad: 100
    })
}
module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}