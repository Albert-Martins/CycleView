function expandir(elem){
  chartID = elem.getAttribute('chart');
  
  console.log(chartID);

  chartBox = document.querySelector(`#${chartID}`);
  canvas = document.querySelector(`#${chartID} canvas#${chartID}`);
  console.log(canvas.id);

  if(getCSSAttribute(chartBox,'position') == 'relative'){
    
    chartBox.style.position = 'absolute';
    chartBox.style.backgroundColor = 'white';
    chartBox.style.top = 0;
    chartBox.style.top = 0;
    chartBox.style.zIndex = '3';

    chartBox.style.width = '100%';
    chartBox.style.height = '100%';

    elem.innerHTML = '<i class="fa-solid fa-compress"></i>';

    console.log (getCSSAttribute(chartBox,'position'));

  }else{
    chartBox.style.position = 'relative';
    chartBox.style.backgroundColor = 'white';
    chartBox.style.margin = '0px';
    chartBox.style.top = 0;
    chartBox.style.zIndex = '1';

    chartBox.style.width = '1fr';
    chartBox.style.height = '45.5vh';

    elem.innerHTML = '<i class="fa-solid fa-expand"></i>';

  }
}
  


    /*function expandir(div,Canvagrafico,grafico, botao) {
        document.getElementById(div).style.display = 'block';
        document.getElementById(botao).style.display = 'block';

        var ctxFullscreen = document.getElementById(Canvagrafico).getContext('2d');
        new Chart(ctxFullscreen, {
            type: grafico.config.type,
            data: grafico.config.data,
            options: {
                responsive: true,
                maintainAspectRatio: false // Remove restrições de tamanho
            }
        });

        //document.querySelector('.expandirFullscreen').style.display = 'block';
    }

    */

    function fecharFullscreen(div,botao) {
        document.getElementById(div).style.display = 'none';
        document.getElementById(botao).style.display = 'none';
    }
    function corAleatoria() {
        // Gera um valor hexadecimal aleatório entre 0 e FFFFFF (cor RGB)
        var cor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        return cor;
      }

    function trocaCor(grafico, c1){
        
        //console.log(grafico.canvas);
    
        for ( i = 0; i < grafico.data.datasets.length; i++) {  
        grafico.config.data.datasets[i].backgroundColor = c1[i];
        grafico.config.data.datasets[i].borderColor = c1[i];
        grafico.update();}
    
    }

    var graficos = [char1, char2] 
    var switchElement = document.getElementById("padrao");

   
    switchElement.addEventListener('change', function() {
      
      // azul, verde, amarelo, cinza, rosa, vermelho
      c1 = ['#002AB7','#2B8C67','#EDC51F','#DCDEF3','#D436D9', '#9A1801'];
      //azul, verde, amarelo, vermelho, rosa, laranja
      c2 = ['#1E31DB','#2BDC7B','#DBCC24','#DB3213','#CD0EDB', '#DB6500'];
      
      
      if (this.checked) {
        //console.log('O switch está ligado');
        //console.log(graficos.length);
        graficos.forEach(element => {
            //console.log(element.canvas);
            trocaCor(element,c1);
        })
      } else {
        //console.log('O switch está desligado');
        graficos.forEach(element => {
          //console.log(element.canvas);
          trocaCor(element,c2);
      }) 
      }

    });
