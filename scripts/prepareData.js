chart1Dataset = [];
chart2Dataset = [];
chart3DataSet = [];

let chart1;
let chart2;
let chart3;
let chart4;

function prepareItems(){
    
    filterItems = document.querySelectorAll("#pedal-filter .filter-item-container .filter-item input:checked");

    sqlWhereText = '';
    cyclist = [];
    pedal = [];
    cyclistMatrix = [];

    if(filterItems){
        filterItems.forEach(function(item){

            cyclist.push(item.getAttribute('ciclista'));
            pedal.push(item.getAttribute('pedalada'));

            tempText = ` (cd_ciclista = `+
            item.getAttribute('ciclista')+` and `+
            `pedal = `+item.getAttribute('pedalada')+')';

            if(item.getAttribute('pedalada') != filterItems[(filterItems.length -1)]){
                tempText += ' or'
            }

            sqlWhereText += tempText;

        });
    }

    cyclistMatrix = [cyclist, pedal];
    
    if(sqlWhereText.slice(-2) == 'or'){
        sqlWhereText = sqlWhereText.slice(0,-2); 
    }

    sql = `select cd_ciclista, ('Ciclista: '|| cd_ciclista|| ' - Pedal: '|| pedal) as pedal, distance, locality, heartrate_history, speed_history, speed_avg, 
    heartratew_avg, 
    temperature_avg from pedaladas where ${sqlWhereText}`;
    
    loadQuery(sql, (error, results) => {
            if (error) {
                console.log(error);
            } else {

                console.log(results);
                prepareLineDataChart1(results);
                prepareLineDataChart2(results);
                prepareRadarDataChart3(results);
                
            }
          });
}


function prepareLineDataChart1(data){
    
    chart1Dataset = [];
    tempMaiorDistancia = -1;

    colorPattern = document.querySelector('input[type="radio"]:checked').value;
    iconsEnabled = document.querySelector('input.slider:checked');

    for(i = 0; i < data[0].values.length; i++){

        tempObject = 
            {

                label: data[0].values[i][1], 
                data: data[0].values[i][4].split(','),
                backgroundColor: options.color[colorPattern][i],
                borderColor: options.color[colorPattern][i],
            }
        
        if(iconsEnabled){
            tempObject.pointRadius = 5;
            tempObject.borderWidth = 3;
            tempObject.pointStyle = options.icons[i];
        }
        
        chart1Dataset.push(tempObject);
    }

    console.log(tempObject);

    for(i = 0; i < data[0].values.length; i++){
        if(tempMaiorDistancia < data[0].values[i][2]){
            tempMaiorDistancia = data[0].values[i][2];
        }
    }

    labelRange = criarVetorComSaltos(0,Math.ceil(tempMaiorDistancia),5);
    
    chart1Ctx = document.querySelector('canvas#chart1').getContext('2d');
    
    if(chart1){
        chart1.data.labels = labelRange;
        chart1.data.datasets = chart1Dataset;
        chart1.update();
    }else{
        chart1 = new Chart(chart1Ctx, {
            type: 'line',
            data: {
                labels: labelRange,
                datasets: chart1Dataset
            },
            options: {
                responsive: true,
                legend: {
                    display: false,
                    labels: {
                      usePointStyle: true
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Frequência cardíaca'
                    }
                },
            }
        });
    }

}

function prepareLineDataChart2(data){
    
    chart2Dataset = [];
    tempMaiorDistancia = -1;

    colorPattern = document.querySelector('input[type="radio"]:checked').value;
    iconsEnabled = document.querySelector('input.slider:checked');

    for(i = 0; i < data[0].values.length; i++){

        tempObject = 
            {

                label: data[0].values[i][1], 
                data: data[0].values[i][5].split(','),
                backgroundColor: options.color[colorPattern][i],
                borderColor: options.color[colorPattern][i],
            }
        
        if(iconsEnabled){
            tempObject.pointRadius = 5;
            tempObject.borderWidth = 3;
            tempObject.pointStyle = options.icons[i];
        }
        
        chart2Dataset.push(tempObject);
    }

    console.log(tempObject);

    for(i = 0; i < data[0].values.length; i++){
        if(tempMaiorDistancia < data[0].values[i][2]){
            tempMaiorDistancia = data[0].values[i][2];
        }
    }

    labelRange = criarVetorComSaltos(0,Math.ceil(tempMaiorDistancia),5);
    
    chart2Ctx = document.querySelector('canvas#chart2').getContext('2d');
    
    if(chart2){
        chart2.data.labels = labelRange;
        chart2.data.datasets = chart2Dataset;
        chart2.update();
    }else{
        chart2 = new Chart(chart2Ctx, {
            type: 'line',
            data: {
                labels: labelRange,
                datasets: chart2Dataset
            },
            options: {
                responsive: true,
                legend: {
                    display: false,
                    labels: {
                      usePointStyle: true
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Velocidade'
                    }
                },
                
            }
        });
    }
}

function prepareRadarDataChart3(data){
    chart3Dataset = [];

    colorPattern = document.querySelector('input[type="radio"]:checked').value;
    iconsEnabled = document.querySelector('input.slider:checked');

    for(i = 0; i < data[0].values.length; i++){

        tempObject = 
            {

                label: data[0].values[i][1], 
                data: [data[0].values[i][6],data[0].values[i][7],data[0].values[i][8]],
                backgroundColor: options.color[colorPattern][i],
                borderColor: options.color[colorPattern][i],
            }
        
        if(iconsEnabled){
            tempObject.pointRadius = 5;
            tempObject.borderWidth = 3;
            tempObject.pointStyle = options.icons[i];
        }
        
        chart3Dataset.push(tempObject);
    }

    console.log(tempObject);
    
    chart3Ctx = document.querySelector('canvas#chart3').getContext('2d');
    
    if(chart3){
        chart3.data.labels = labelRange;
        chart3.data.datasets = chart3Dataset;
        chart3.update();
    }else{
        chart3 = new Chart(chart3Ctx, {
            type: 'radar',
            data: {
                labels: ["Velocidade (Km/h)", 
                    "Freq. Cardíaca (BPM)", 
                    "Temperatura (°C)"],
                datasets: chart3Dataset
            },
            options: {
                responsive: true,
                legend: {
                    display: false,
                    labels: {
                      usePointStyle: true
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Velocidade'
                    }
                },
                
            }
        });
    }
}




function criarVetorComSaltos(inicio, fim, salto) {
    if (salto <= 0) {
        console.error('O salto deve ser um número positivo.');
        return [];
    }

    const vetor = [];
    for (let i = inicio; i <= fim; i += salto) {
        vetor.push(i);
    }

    return vetor;
}