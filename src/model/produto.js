import bancoDados from "../config/database.js";

class Produto {
  constructor() {
    this.model = bancoDados.db.define("produtos", {
      id: {
        type: bancoDados.db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        type: bancoDados.db.Sequelize.STRING,
      },
      disponivel: {
        type: bancoDados.db.Sequelize.BOOLEAN,
      },
      quantide: {
        type: bancoDados.db.Sequelize.INTEGER,
      }
    }); //o banco
  }
}

export default new Produto().model