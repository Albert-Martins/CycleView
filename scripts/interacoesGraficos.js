
    
    function expandir(div,Canvagrafico,grafico, botao) {
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

    var graficos = [meuGrafico, meuGrafico2] 
    var switchElement = document.getElementById("toggleSwitch");

   
    switchElement.addEventListener('change', function() {
      
      // azul, amarelo, rosa, verde, cinza
      c1 = ['#0018D1','#FFBA00','#E866DC','#17963D','#66717A'];
      //azul, verde, amarelo, vermelho, rosa
      c2 = ['#1E31DB','#2BDC7B','#DBCC24','#DB3213','#CD0EDB'];
      
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
