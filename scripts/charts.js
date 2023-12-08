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


chart2Ctx = document.querySelector('canvas#chart2').getContext('2d');

chart2 = new Chart(chart2Ctx, {
    type: 'radar',
    data: {
      labels: ['Categoria 1', 'Categoria 2', 'Categoria 3', 'Categoria 4', 'Categoria 5'],
      datasets: [{
        label: '01',
        data: [10, 20, 15, 25, 18], // Valores para cada categoria
        backgroundColor: 'rgba(54, 162, 235, 0.2)', // Cor de preenchimento
        borderColor: 'rgba(54, 162, 235, 1)', // Cor da borda
        borderWidth: 1
    },
    {
        label: '02',
        data: [8, 25, 16, 25, 2], // Valores para cada categoria
        backgroundColor: 'rgba(54, 162, 255, 0.2)', // Cor de preenchimento
        borderColor: 'rgba(54, 162, 235, 1)', // Cor da borda
        borderWidth: 1
    }
    ]
    },
    options: {
      // Opções adicionais, como título, legenda, etc.
      scale: {
        angleLines: {
          display: true
        },
        ticks: {
          beginAtZero: true
        }
      }
    }
  });