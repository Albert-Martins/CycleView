const db = require('../../Dados/database.js');

const sql = 'SELECT distance_history, pedal, creator FROM pedaladas WHERE cd_ciclista = ?';
const algumValor = 2;

db.all(sql, [algumValor], (err, row) => {
  if (err) {
    throw err;
  }

  // row contém a linha de resultado da consulta
  console.log(row);
});