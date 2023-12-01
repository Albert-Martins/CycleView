const fs = require('fs');
const path = require('path');

const db = require('../Dados/database.js');

const sql = `
INSERT INTO pedaladas 
(
  pedal, 
  cd_ciclista, 
  distance_history, 
  elevation_google, 
  heartrate_history, 
  latitudes, 
  longitudes, 
  speed_history, 
  time_history, 
  path, 
  coordinateInicial, 
  coodinateFinal, 
  creator, 
  country, 
  locality, 
  centroid, 
  bbox, 
  datetime, 
  duration, 
  distance, 
  elevation_gps, 
  total_elevation_google, 
  elevation_bing, 
  speed_avg, 
  heartratew_avg, 
  temperature_avg, 
  trackpoints
) 
VALUES 
(
  ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?
)`;

const diretorio = './cyclevis_dataset-master/';
const dadosCiclistas = [];

// Função que conta os diretórios/ciclistas da pasta ciclevis ou qualquer outra pasta
function contarDiretorios(diretorio) {
  let contagem = 0;
  const arquivos = fs.readdirSync(diretorio);

  for (const arquivo of arquivos) {
    const caminhoArquivo = `${diretorio}/${arquivo}`;
    const stat = fs.statSync(caminhoArquivo);

    if (stat.isDirectory()) {
      contagem++;
    }
  }
  return contagem;
}

//Função que busca o arquivo json de um diretório especificado
function lerArquivoJSON(caminho) {
  try {
    const conteudo = fs.readFileSync(caminho, 'utf8');
    const objetoJSON = JSON.parse(conteudo);
    return objetoJSON;
  } catch (err) {
    console.error('Erro ao ler o arquivo JSON:', err);
    return null;
  }
}

//Função que lista em um vetor todos os arquivos em um diretório
function listaArquivosJSON(caminho) {
  try {
    const arquivos = fs.readdirSync(caminho);
    
    // Filtra apenas os arquivos com extensão .json
    const arquivosJSON = arquivos.filter(arquivo => path.extname(arquivo) === '.json');
    
    return arquivosJSON;
  } catch (err) {
    console.error('Erro ao listar arquivos JSON:', err);
    return [];
  } 
}

//quantidade de ciclistas na pasta ciclevis_dataset-master
const qtdCiclistas = contarDiretorios(diretorio);

//for para contar a quantidade de pedaladas em cada diretório de ciclista
for(i = 1; i <= qtdCiclistas; i++){

  let qtdPedaladas = contarDiretorios(`./cyclevis_dataset-master/Cyclist_${i}`);

  //array que vai conter os dados de cada pedalada
  let pedaladas = new Array(qtdPedaladas);
  
  //for para percorrer cada pedalada de cada ciclista
  for(j = 1; j <= qtdPedaladas; j++){
  
    //Lista o nome dos arquivos JSON em cada diretório ciclista/pedalada
    let listaArquivos = listaArquivosJSON(`./cyclevis_dataset-master/Cyclist_${i}/pedal${j}`);
    let dadosPedalada = {};
    
    //for que percorre a lista de arquivos json para que cada um seja lido em seguida
    for(k = 0; k < listaArquivos.length; k++){
      
      //console.log(`./cyclevis_dataset-master/Cyclist_${i}/pedal${j}/${listaArquivos[k]}`);
      
      atributo = listaArquivos[k].split('.');
      atributo = atributo[0];

      //Para todos os arquivos exceto overview, a strign é dividida em um vetor de tipo float
      if(listaArquivos[k] != "overview.json"){
      dados = lerArquivoJSON(`./cyclevis_dataset-master/Cyclist_${i}/pedal${j}/${listaArquivos[k]}`)[atributo].split('|');

      // Inicialize variáveis para acompanhar a soma e o número de valores
      let sum = 0;
      let count = 0;
      const medias = []; // Array para armazenar as médias

      // Percorra os valores
      for (let i = 0; i < dados.length; i++) {
        // Converta o valor para um número
        const number = parseFloat(dados[i]);
        
        // Verifique se o número é um valor válido
        if (!isNaN(number)) {
            // Adicione o valor à soma
            sum += number;
            count++;
        
            // Se contarmos 100 valores, calcule a média e armazene no array
            if (count === 100 || i == dados.length-1) {
            const average = sum / 100;
            medias.push(average);
        
            // Reinicie a soma e o contador
            sum = 0;
            count = 0;
            }
        }
      }

      /*
      dados.forEach((elemento, indice, array) => {
        dados[indice] = parseFloat(elemento);
      });
      */
      //O atributo é atribuido ao objeto com seu respectivo valor
      
      dadosPedalada[`${atributo}`] = medias.toString();

      }else{
        
      //Os atributos do arquivo overview serão colocados no mesmo nível dos dados do demais aquivos
      dados = lerArquivoJSON(`./cyclevis_dataset-master/Cyclist_${i}/pedal${j}/${listaArquivos[k]}`);
      dados.total_elevation_google = dados.elevation_google;
      delete dados.elevation_google;

      //Os atributos são inseridos no objeto dadosPedalada
      for (const chave in dados) {
        dadosPedalada[chave] = dados[chave];
      }

      }
    }
    pedaladas.push(dadosPedalada);
  }
  dadosCiclistas.push(pedaladas);
}

for(ciclista = 0; ciclista < dadosCiclistas.length; ciclista++){
  for(pedalada = 0; pedalada < dadosCiclistas[ciclista].length; pedalada++){
    
    dadosCiclistas[ciclista] = dadosCiclistas[ciclista].filter(valor => valor !== null);
    
    const valores = [
      dadosCiclistas[ciclista][pedalada].pedal,
      ciclista+1, 
      dadosCiclistas[ciclista][pedalada].distance_history, 
      dadosCiclistas[ciclista][pedalada].elevation_google, 
      dadosCiclistas[ciclista][pedalada].heartrate_history, 
      dadosCiclistas[ciclista][pedalada].latitudes, 
      dadosCiclistas[ciclista][pedalada].longitudes, 
      dadosCiclistas[ciclista][pedalada].speed_history, 
      dadosCiclistas[ciclista][pedalada].time_history, 
      dadosCiclistas[ciclista][pedalada].path,
      dadosCiclistas[ciclista][pedalada].coordinateInicial,
      dadosCiclistas[ciclista][pedalada].coodinateFinal,
      dadosCiclistas[ciclista][pedalada].creator,
      dadosCiclistas[ciclista][pedalada].country,
      dadosCiclistas[ciclista][pedalada].locality,
      dadosCiclistas[ciclista][pedalada].centroid,
      dadosCiclistas[ciclista][pedalada].bbox,
      dadosCiclistas[ciclista][pedalada].datetime,
      dadosCiclistas[ciclista][pedalada].duration,
      dadosCiclistas[ciclista][pedalada].distance,
      dadosCiclistas[ciclista][pedalada].elevation_gps,
      dadosCiclistas[ciclista][pedalada].total_elevation_google,
      dadosCiclistas[ciclista][pedalada].elevation_bing,
      dadosCiclistas[ciclista][pedalada].speed_avg,
      dadosCiclistas[ciclista][pedalada].heartratew_avg,
      dadosCiclistas[ciclista][pedalada].temperature_avg,
      dadosCiclistas[ciclista][pedalada].trackpoints
    ];

    console.log(valores.length);

    db.run(sql, valores);
  }
}


const meuArrayString = JSON.stringify(dadosCiclistas);

const nomeArquivo = 'pedaladas.txt';

fs.writeFile(nomeArquivo, meuArrayString, 'utf8', (err) => {
  if (err) {
    console.error('Erro ao escrever no arquivo:', err);
  } else {
    console.log('Array gravado no arquivo com sucesso.');
  }
});

