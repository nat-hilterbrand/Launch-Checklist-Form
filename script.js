window.addEventListener("load", function(){
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
   response.json().then(function(json){
      let missionTarget = document.getElementById("missionTarget");
      missionTarget.innerHTML = `
      <h2>Mission Destination</h2>
      <ol>
         <li>Name: ${json[0].name}</li>
         <li>Diameter: ${json[0].diameter}</li>
         <li>Star: ${json[0].star}</li>
         <li>Distance from Earth: ${json[0].distance}</li>
         <li>Number of Moons: ${json[0].moons}</li>
      </ol>
      <img src="${json[0].image}"></img>
      `;
   });
   });



   let form = document.querySelector("form");
   form.addEventListener("submit", function (){
      event.preventDefault();
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");

      let faultyItems = document.getElementById("faultyItems");
      let fuelStatus = document.getElementById("fuelStatus");
      let launchStatus = document.getElementById("launchStatus");
      let cargoStatus = document.getElementById("cargoStatus");
      let launchStatusCheck = document.getElementById("launchStatusCheck");

      if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert("All fields are required!");
         event.preventDefault();
      }//all fields required check close
      else if (isNaN(pilotNameInput.value) === false){
         alert("Enter valid pilots name.");
      }
       else if (isNaN(copilotNameInput.value) === false){
         alert("Enter valid copilots name.");
      }
       else if (isNaN(fuelLevelInput.value)){
         alert("Enter a valid fuel input.");
      }
      else if (isNaN(cargoMassInput.value)){
         alert("Enter a valid cargo input.");
      }
      else {
      // template literals for pilotStatus and copilotStatus
      pilotStatus.innerHTML = `${pilotNameInput.value} Ready`;
      copilotStatus.innerHTML = `${copilotNameInput.value} Ready`;
      };

      if(fuelLevelInput.value <= 10000){
         faultyItems.style.visibility = "visible";
         fuelStatus.innerHTML = "Not enough fuel for the journey.";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";
      };
      if(cargoMassInput.value > 10000){
         faultyItems.style.visibility = "visible";
         cargoStatus.innerHTML = "Too much mass for take off.";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";
      } else {
         launchStatus.innerHTML = "Shuttle is ready for launch";
         launchStatus.style.color = "green";
         faultyItems.style.visibility = "visible";
      };
   });//submit event close
   event.preventDefault();

}); //window load  event close


