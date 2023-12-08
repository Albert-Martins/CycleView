async function prepareItems(){
    
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

    sql = `select cd_ciclista, pedal, distance, locality from pedaladas where ${sqlWhereText}`;
    

    try{
        data = await new Promise((resolve, reject) => { 
        loadQuery(sql, (error, results) => {
            if (error) {
                reject(error);
            } else {
                
                resolve(results);

            }
          });
        });

    } catch (error){
        console.error('Erro:',error);
    }

    returnedData = data;
    console.log(returnedData);
}

