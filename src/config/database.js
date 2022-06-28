require('dotenv').config({  
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
})

module.exports = {
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  dialect: process.env.DB_DIALECT,
  storage: './__tests__/database.sqlite',
  logging: false, //DESABILITA ALGUNS LOGS AO RODAR MIGRATIONS
  define: {
    timestamps: true,
    underscored: true, // FORÇA O SEUQLIZE A CRIAR AS TABELAS NO BANCO EM ___
    underscoredAll: true, // FORÇA O SEQUELIZE A CRIAR OS CAMPOS DA TABELA EM ___
  },
}