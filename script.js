window.addEventListener("load", function(){
   let form = document.querySelector("form");
   form.addEventListener("submit", function (){
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      let faultyItems = document.getElementById(faultyItems);
      let fuelStatus = document.getElementById(fuelStatus);
      let launchStatus = document.getElementById(launchStatus);
      let cargoStatus = document.getElementById(cargoStatus);
      let launchStatusCheck = document.getElementById(launchStatusCheck);

      if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert("All fields are required!");
         event.preventDefault();
      };//all fields required check close
      if (isNaN(pilotNameInput.value) === false){
         alert("Enter valid pilots name.");
      };
      if (isNaN(copilotNameInput.value) === false){
         alert("Enter valid copilots name.");
      };
      if (isNaN(fuelLevelInput.value) === true){
         alert("Enter a valid fuel input.");
      };
      if (isNaN(cargoMassInput.value) === true){
         alert("Enter a valid cargo input.");
      };
      // template literals for pilotStatus and copilotStatus
      document.getElementById(pilotStatus).innerHTML = `${pilotNameInput.value} Ready`;
      document.getElementById(copilotStatus).innerHTML = `${copilotNameInput.value} Ready`;

      if(fuelLevelInput <= 10000){
         faultyItems.style.visibility = "visible";
         fuelStatus.innerHTML = "Not enough fuel for the journey.";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatusCheck.style.color = red;
      } else if(cargoMassInput > 10000){
         faultyItems.style.visibility = "visible";
         cargoStatus.innerHTML = "Not enough fuel for the journey.";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatusCheck.style.color = red;
      } else {
         launchStatus.innerHTML = "Shuttle is ready for launch";
         launchStatusCheck.style.color = green;
      };
   });//submit event close
   event.preventDefault();
}); //window load  event close

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
