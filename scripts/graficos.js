//provisorio enquanto a burrice n passa
var c10 = '#1f8d9F'   
//var graficos = [meuGrafico, meuGrafico2] 

var ctx = document.getElementById('meuGrafico').getContext('2d');
var meuGrafico = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '01', 
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                c10,
            ],
            borderColor: c10
        },
        {
            label: '02', 
            data: [12,12,12,12,12,12],
            backgroundColor: [
                'red',
                
            ],
            borderColor: 'red'
        },
        {
            label: '03', 
            data: [12,34,14,8,15,7],
            backgroundColor: [
                'blue',
                
            ],
            borderColor: 'blue'
        },
        {
            label: '04', 
            data: [2,6,5,14,7,12],
            backgroundColor: [
                'pink',
                
            ],
            borderColor: 'pink'
        },
        {
            label: '05', 
            data: [9,11,21,6,9,24],
            backgroundColor: [
                'red',
                
            ],
            borderColor: 'red'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true // Mantém a proporção do gráfico
    }
});

var ctx = document.getElementById('meuGrafico2').getContext('2d');
var meuGrafico2 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Example Dataset',
            data: [2, 8, 19, 5, 20, 27],
            backgroundColor: [
                'blue'
                
            ]
        },
        {
            label: 'Example Dataset',
            data: [20, 20, 20, 20, 20, 20],
            backgroundColor: [
                'green',
                
            ]
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true // Mantém a proporção do gráfico
    }
});
