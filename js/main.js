let resultados=[];      //funcion para busqueda


//funcion fetch
fetch('https://ghibliapi.herokuapp.com/films')
  .then((response)=>response.json())
  .then((data)=>{
    resultados = data;
    dibujar(resultados);
  })


    //const para buscador(input)
  const buscar = (evt) =>{
    let nombre = evt.currentTarget.value;

      //funcion para busqueda por nombre de pelicula
    let filtrados = resultados.filter(function(resultado){
        return resultado.title.toLowerCase().includes(nombre.toLowerCase());      //busca en la api el nombre de la pelicula y si coincide con el input lo muestra
    });

    dibujar(filtrados);         //aparece el titulo de la pelicula y la imagen

  }


  //const Dibujar
  const dibujar= (peliculas) => {
    let div =document.createElement("div");
    div.classList.add("column", "is-3");
    document.querySelector("#movies").innerHTML="";     //hace que el div este vacio para meter los datos de la api

    peliculas.forEach((pelicula) => {
      //Cada pelicula
      let div =document.createElement("div");     //elemento div, donde se crearan las cards
      div.classList.add("column", "is-3");        //column, columna dentro del div para las cards; 
                                                  //is-3 espacio para cada card (en total 12, divididas en 4 columnas)
      
      //Aqui esta la card de cada pelicula y toma los datos especificados de la api
      div.innerHTML +=`<div class="card">
                      <div class="card-image">
                        <figure class="image is-4by5">
                          <img src="${pelicula.image}" alt="Placeholder image"/>
                        </figure>
                      </div>
                          <div class="card-content">
                              <p class="title is-4">${pelicula.title}</p>
                              
                              <h5 class="subtitle is-6">${pelicula.release_date}</h5>
                          </div>
                      </div>`

       //en este div apareceran los resultados de las cards y los datos de la api
       document.querySelector("#movies").append(div);

    });

    


  }


  document.querySelector("#busqueda").addEventListener("keyup",buscar);