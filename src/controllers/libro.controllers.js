const Libro = require('../models/libro.model')
const libroControllers = {}

const getAllLibros = async (req, res) => {
    try {
        const libros = await Libro.find()
        res.json(libros)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
libroControllers.getAllLibros = getAllLibros

const addLibro = async (req, res) => {
    const { titulo, autor, fecha_publicacion, ventas } = req.body
    if(!titulo || !autor || !fecha_publicacion){
        return res.status(400).json({ message: 'Los campos titulo, autor, fecha publicación son obligatorios.' })
    }
    try {
        const libro = new Libro({
            titulo,
            autor,
            fecha_publicacion,
            ventas
        })
        const nuevoLibro = await libro.save()
        res.status(201).json(nuevoLibro)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
libroControllers.addLibro = addLibro

module.exports = libroControllers
