const sqlite3 = require("sqlite3"); //driver do banco de dados
const sqlite = require("sqlite"); //responsavel pela conexao
const path = require("path"); //biblioteca do node que resolve os enderecos de acordo com o ambiente

async function sqliteConnection() {
  //abre a conexao com o sqlite
  const database = await sqlite.open({
    filename: path.resolve(__dirname, "..", "database.db"),
    driver: sqlite3.Database
  });

  return database;
};

module.exports = sqliteConnection;