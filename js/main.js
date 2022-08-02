//funcion fetch
fetch('https://ghibliapi.herokuapp.com/films')
  .then((response)=>response.json())
  .then((data)=>{
    dibujar(data);
  })


  //const Dibujar
  const dibujar= (peliculas) => {
    let div =document.createElement("div");
    div.classList.add("column", "is-3");
    document.querySelector("#movies").innerHTML="";

    peliculas.forEach((pelicula) => {
      //Cada pelicula
      let div =document.createElement("div");
      div.classList.add("column", "is-3");

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

       document.querySelector("#movies").append(div);

    });

    


  }