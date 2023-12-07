const fs = require('fs');
const path = require('path');

const db = require('../../Dados/database.js');

const sql = 'select cd_ciclista, pedal, distance, locality from pedaladas';

db.all(sql, (err, row) => {
  if (err) {
    throw err;
  }

    let texto;

    pedaladas = row.sort((a, b) => {
    if (a.cd_ciclista !== b.cd_ciclista) {
        return a.cd_ciclista - b.cd_ciclista;
    }
    return a.pedal - b.pedal;
    });

    console.log(pedaladas);

    
    for(i = 1; i <= pedaladas.length; i++){
    
      if(pedaladas[i]){

        texto  += 
        `<div class="filter-item">
            <input type="checkbox" id="ciclista${pedaladas[i].cd_ciclista}pedal${pedaladas[i].pedal}" value="${pedaladas[i].pedal}" ciclista="${pedaladas[i].cd_ciclista}" pedalada="${pedaladas[i].pedal}">
            <label for="ciclista${pedaladas[i].cd_ciclista}pedal${pedaladas[i].pedal}" disabled >Pedalada ${pedaladas[i].pedal.toString().padStart(2,'0')}</label>
            <i class="pedal-attribute">Distância: ${pedaladas[i].distance} Km</i>
            <i class="pedal-attribute">Local: ${pedaladas[i].locality}</i>
        </div>`;
      }
    }

    fs.writeFile('pedaladas.txt', texto, 'utf8', (err) => {
        if (err) {
          console.error('Erro ao escrever no arquivo:', err);
        } else {
          console.log('Texto gravado no arquivo com sucesso.');
        }
    });

    console.log(texto);
});