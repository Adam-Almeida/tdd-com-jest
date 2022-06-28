module.exports = {
  host: '127.0.0.1',
  username: 'postgres',
  password: 'postgrespw',
  database: 'nodeauth',
  port: 49153,
  dialect: 'postgres',
  logging: false, //DESABILITA ALGUNS LOGS AO RODAR MIGRATIONS
  define: {
    timestamps: true,
    underscored: true, // FORÇA O SEUQLIZE A CRIAR AS TABELAS NO BANCO EM ___
    underscoredAll: true, // FORÇA O SEQUELIZE A CRIAR OS CAMPOS DA TABELA EM ___
  },
}