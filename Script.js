
 
  document.getElementById('getPeople').addEventListener
  ('click',getPeople);
  document.getElementById('getFilms').addEventListener
  ('click',getFilms);
  document.getElementById('getShips').addEventListener
  ('click',getShips);
  document.getElementById('getVehicles').addEventListener
  ('click',getVehicles);
  document.getElementById('getSpecies').addEventListener
  ('click',getSpecies);
  document.getElementById('getPlanets').addEventListener
  ('click',getPlanets);
  
   //-- people function-->
 function getPeople(){
      fetch( 'people.json')
      .then((res) => res.json())
      .then((data)=> {
          let output= '<h1 class="display-5 mb-4">Characters in Star Wars </h1>' 
          data.forEach(function(pe){
              output+= 
              ` <ul class="list-group mb-1">
                  <li href="#" class="list-group-item list-group-item-action "><h5> Character Name :${pe.name}</h5></li>
                  <li href="#" class="list-group-item list-group-item-action ">Height: ${pe.height}</li>
                  <li href="#" class="list-group-item list-group-item-action ">Mass: ${pe.mass}</li>
                  <li href="#" class="list-group-item list-group-item-action ">Birth Year: ${pe.birth_year}</li>
                  <li href="#" class="list-group-item list-group-item-action ">Eye: ${pe.eye_color}</li>
                  <li href="#" class="list-group-item list-group-item-action ">Skin : ${pe.skin_colors}</li>
                  <li href="#" class="list-group-item list-group-item-action " >Hair ${pe.hair_colors}</li>
                  <li href="#" class="list-group-item list-group-item-action ">Homeworld: ${pe.homeworld}</li>
                  <li href="#" class="list-group-item list-group-item-action ">Gender: ${pe.gender}</li>
                  <li href="#" class="list-group-item list-group-item-action ">Edited date: ${pe.edited}</li>
                 <li href="#" class="list-group-item list-group-item-action ">Created date: ${pe.created}</li>
                  
                  
                  
                  

           </ul>
                  `;
              });
          document.getElementById('output').innerHTML=output;
      })
  }
//-- film function-->
  function getFilms(){
      fetch( 'Films.json')
      .then((res) => res.json())
      .then((data)=> {
          let output='<h1 class="display-5 mb-4">  Films of Star Wars</h1>';
          data.forEach(function(fi){
              output+=       ` <ul class="list-group mb-1">
                  <li href="#" class="list-group-item list-group-item-action "><h5> Film Title:${fi.title}</h5></li>
                  <li href="#" class="list-group-item list-group-item-action ">Director: ${fi.director}</li>
                  <li href="#" class="list-group-item list-group-item-action "> Producer: ${fi.producer}</li>
                  <li href="#" class="list-group-item list-group-item-action ">Created: ${fi.created}</li>
                  <li href="#" class="list-group-item list-group-item-action ">Starships: ${fi.starships}</li>
                  <li href="#" class="list-group-item list-group-item-action ">Date changed : ${fi.edited}</li>
                  <li href="#" class="list-group-item list-group-item-action ">Vehicles in film: ${fi.vehicles}</li>
                  <li href="#" class="list-group-item list-group-item-action ">Planets in film: ${fi.planets}</li>
                  <li href="#" class="list-group-item list-group-item-action ">Episode: ${fi.episod_id}</li>
                  <li href="#" class="list-group-item list-group-item-action ">Release date: ${fi.release_date}</li>
                  
                  

           </ul>
                  `;
          });
          document.getElementById('output').innerHTML=output;
      })
  }
   //-- starship function-->
  function getShips(){
      fetch( 'Ships.json')
      .then((res) => res.json())
      .then((data)=> {
          let output='<h1 class="display-5 mb-4">  Starships present in Star Wars</h1>';
          data.forEach(function(ship){
              output+= `
              <ul class="list-group mb-1">
                  <li href="#" class="list-group-item list-group-item-action "><h5> StarShip Class:${ship.starship_class}</h5></li>
                  <li href="#" class="list-group-item list-group-item-action ">Pilots: ${ship.pilots}</li>
                  <li href="#" class="list-group-item list-group-item-action ">Hyperdrive: ${ship.hyperdrive_rating}</li>
                  <li href="#" class="list-group-item list-group-item-action ">Model: ${ship.model}</li>
                  <li href="#" class="list-group-item list-group-item-action ">MGLT: ${ship.MGLT}</li>
                  <li href="#" class="list-group-item list-group-item-action ">PK : ${ship.pk}</li>
              </ul>
                  `;
          });
          document.getElementById('output').innerHTML=output;
      })
  }
   //-- Vehicle function-->
  function getVehicles(){
      fetch( 'Vehicles.json')
      .then((res) => res.json())
      .then((data)=> {
          let output='<h1 class="display-5 mb-4"> Vehicle present in Star Wars  </h1>';
          data.forEach(function(veh){
              output+= `
              <ul class="list-group mb-1" >
                  <li href="#" class="list-group-item list-group-item-action "><h5> Vehicle Model:${veh.vehicle_class}</h5></li>
                  <li href="#" class="list-group-item list-group-item-action">Vehicle Class : ${veh.model}</li>
                  <li href="#" class="list-group-item list-group-item-action">Pilot: ${veh.pilot}</li>
                  <li href="#" class="list-group-item list-group-item-action ">PK: ${veh.pk}</li>
               
              </ul>
                  `;
          });
          document.getElementById('output').innerHTML=output;
      })
  }
   //-- Species function-->
  function getSpecies(){
      fetch( 'Species.json')
      .then((res) => res.json())
      .then((data)=> {
          let output='<h1 class="display-5 mb-4"> Species peresent in Star Wars </h1>';
          data.forEach(function(spe){
              output+=  ` <ul class="list-group mb-1">
                  <li href="#" class="list-group-item list-group-item-action "><h5> Species Name :${spe.name}</h5></li>
                  <li href="#" class="list-group-item list-group-item-action ">Clasification: ${spe.clasification}</li>
                  <li href="#" class="list-group-item list-group-item-action ">Designation: ${spe.designation}</li>
                  <li href="#" class="list-group-item list-group-item-action ">Language: ${spe.language}</li>
                  <li href="#" class="list-group-item list-group-item-action ">Eye: ${spe.eye_color}</li>
                  <li href="#" class="list-group-item list-group-item-action ">Skin : ${spe.skin_colors}</li>
                  <li href="#" class="list-group-item list-group-item-action ">Hair ${spe.hair_colors}</li>
                  <li href="#" class="list-group-item list-group-item-action ">Homeworld: ${spe.homeworld}</li>
                  <li href="#" class="list-group-item list-group-item-action ">Lifespan: ${spe.average_lifespan}</li>
                  <li href="#" class="list-group-item list-group-item-action ">Average Height: ${spe.average_height}</li>
                  <li href="#" class="list-group-item list-group-item-action ">Edited date: ${spe.editied}</li>
                  <li href="#" class="list-group-item list-group-item-action ">Created date: ${spe.created}</li>
                  
                  
                  
                  

           </ul>
                  `;
          });
          document.getElementById('output').innerHTML=output;
      })
  }
   //-- planet function-->
  function getPlanets(){
      fetch( 'Planet.json')
      .then((res) => res.json())
      .then((data)=> {
          let output='<h1 class="display-5 mb-4"> Planets present in Star Wars</h1>';
          data.forEach(function(pla){
              output+= ` <ul class="list-group mb-1">
                  <li href="#" class="list-group-item list-group-item-action "><h5> Planet Name :${pla.name}</h5></li>
                  <li href="#" class="list-group-item list-group-item-action ">Population: ${pla.population}</li>
                  <li href="#" class="list-group-item list-group-item-action ">Diameter: ${pla.diameter}</li>
                  <li href="#" class="list-group-item list-group-item-action ">Rotation Period: ${pla.rotation_period}</li>
                  <li href="#" class="list-group-item list-group-item-action ">Orbital Period: ${pla.orbital_period}</li>
                  <li href="#" class="list-group-item list-group-item-action ">Gravity  : ${pla.gravity}</li>
                  <li href="#" class="list-group-item list-group-item-action ">Surface Water: ${pla.surface_water}</li>
                  <li href="#" class="list-group-item list-group-item-action ">Climate: ${pla.climate}</li>
                  <li href="#" class="list-group-item list-group-item-action ">Edited date: ${pla.editied}</li>
                  <li href="#" class="list-group-item list-group-item-action ">Created date: ${pla.created}</li>
                  
                  
                  
                  

           </ul>
                  `;
          });
          document.getElementById('output').innerHTML=output;
      })
  }
  
