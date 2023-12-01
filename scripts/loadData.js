let db;

/*
function loadQuery(selectQuery) {
  return new Promise((resolve, reject) => {
    initSqlJs({ locateFile: (file) => 'https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/' + file }).then((SQL) => {
      // Carregue o arquivo do banco de dados
      const xhr = new XMLHttpRequest();
      xhr.open('GET', 'cycleview.db', true);
      xhr.responseType = 'arraybuffer';

      xhr.onload = function (e) {
        // Converta o arraybuffer para um Uint8Array
        const uInt8Array = new Uint8Array(this.response);

        // Abra o banco de dados
        const db = new SQL.Database(uInt8Array);

        try {
          // Execute a consulta
          const results = db.exec(selectQuery);
          
          // Resolva a Promise com os resultados da consulta
          resolve(results);
        } catch (error) {
          // Rejeite a Promise se houver um erro
          reject(error);
        }
      };

      // Manipule possíveis erros na requisição
      xhr.onerror = function (error) {
        reject(error);
      };

      xhr.send();
    }).catch(reject);
  });
}*/

function loadQuery(selectQuery, callback) {
    initSqlJs({ locateFile: (file) => 'https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/' + file }).then((SQL) => {
      // Carregue o arquivo do banco de dados
      const xhr = new XMLHttpRequest();
      xhr.open('GET', 'cycleview.db', true);
      xhr.responseType = 'arraybuffer';
  
      xhr.onload = function (e) {
        // Converta o arraybuffer para um Uint8Array
        const uInt8Array = new Uint8Array(this.response);
  
        // Abra o banco de dados
        const db = new SQL.Database(uInt8Array);
  
        try {
          // Execute a consulta
          const results = db.exec(selectQuery);
  
          // Chame o callback com os resultados da consulta
          callback(null, results);
        } catch (error) {
          // Chame o callback com o erro, se houver
          callback(error);
        }
      };
  
      // Manipule possíveis erros na requisição
      xhr.onerror = function (error) {
        // Chame o callback com o erro da requisição
        callback(error);
      };
  
      xhr.send();
    }).catch((error) => {
      // Chame o callback com o erro do initSqlJs
      callback(error);
    });
  }
