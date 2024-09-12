const mongoose = require('mongoose');

const conn = "mongodb+srv://mariana_bmoraes:mDWPwYZKokY0Q9Lh@cluster0.kqjgr.mongodb.net/LivrosObjeto"

async function connect() {
   await mongoose.connect(conn);
}

connect()
.then(() => {
    console.log("Conectado ao MongoDB");
}).catch((err) => {
    console.log(err);
})

module.exports = mongoose

//banco sempre conecta ao modelo, sempre importa em todos os modelos