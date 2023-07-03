document.addEventListener('DOMContentLoaded', function (){

        cargarDatos();

})

function cargarDatos(){

    const archivo = 'data.json';
    fetch(archivo)
    .then( resultado => {
        return resultado.json(); // Esto no lo puedes mandar a consola directamente porque 
                           // la funcion json() también es una promise sin resolver
                           // de ahí que si pones  console.log( resultado.json()); 
                           // salga una promise <state> : pending
                           // return es importante para asegurarse que los datos se pasan al siguiente .then
    })
    .then(datos =>{
        console.log(datos);

        const item = document.querySelectorAll('.item');
        for (i = 0; i < item.length; ++i) {
            //console.log(item[i]);
            
            datos.forEach(element=>{
                //console.log(element.category);
                //console.log(item[i].children[0].children[1].attributes[0].value);
                if(element.category.toLowerCase() == item[i].children[0].children[1].attributes[0].value){
                    // La imagen
                    item[i].children[0].children[0].attributes[0].value = element.icon;
                    // El nombre
                    item[i].children[0].children[1].textContent = element.category;
                    // La puntuacion
                    item[i].children[1].firstChild.textContent = element.score + " ";
                    

                }
            })
        }
        
    })

}