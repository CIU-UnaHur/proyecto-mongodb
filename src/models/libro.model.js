const mongoose = require('mongoose')

const libroSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    autor: { type: String, required: true },
    fecha_publicacion: { type: Date, required: true },
    ventas: { type: Number, default: 0 }
}, { strict: false })

module.exports = mongoose.model('Libro', libroSchema)