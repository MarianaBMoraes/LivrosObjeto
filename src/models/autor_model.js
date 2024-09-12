const db = require("../config/db.js");
const Schema = db.Schema;

const ClienteSchema = new Schema({
  name: { type: String, required: true },
  cep: { type: Object, required: true, minLength: 8, maxLength: 8 },
  email: {
    type: String, // O campo "email" deve ser do tipo String
    validate: {
      validator: function (v) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
      },
    },

    required: true,
  },
});
console.log("Conectado");
const Cliente = db.model("Cliente", ClienteSchema);

module.exports = Cliente;
