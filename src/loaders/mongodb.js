const mongoose = require('mongoose');

async function startDB(){
    await mongoose.connect('mongodb+srv://admin:cubomagico@cluster0.olhcifm.mongodb.net/test');
}

module.exports = startDB;