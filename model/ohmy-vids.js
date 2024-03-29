const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tgSchema = new Schema({
    uniqueId: {
        type: String
    },
    fileId: {
        type: String
    },
    fileType: {
        type: String,
    },
    caption: {
        type: String
    },
    caption_entities: {
        type: Array
    },
    nano: {
        type: String,
    },
    msgId: {
        type: Number
    }

}, { timestamps: true })

const ohDb = mongoose.connection.useDb('ohmyNew')
const tgModel = ohDb.model('tgDb', tgSchema)
module.exports = tgModel