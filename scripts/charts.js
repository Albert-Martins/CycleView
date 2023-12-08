var c10 = '#1f8d9F';

chart1Ctx = document.querySelector('canvas#chart1').getContext('2d');

chart1 = new Chart(chart1Ctx, {
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