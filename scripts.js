// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {

    let rocketPosX = 0;
    let rocketPosY = 0;
    let altitude = 0;

    const takeoffButton = document.getElementById("takeoff");
    const landButton = document.getElementById("landing");
    const abortButton = document.getElementById("missionAbort");

    const leftButton = document.getElementById("left");
    const rightButton = document.getElementById("right");
    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    const rocket = document.getElementById("rocket");
    
    const flightStatus = this.document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");


    takeoffButton.addEventListener("click", function() {
         let shouldTakeoff = confirm("Confirm that the shuttle is ready for takeoff.");
        
         if (shouldTakeoff) {
            flightStatus.innerHTML = "Shuttle in flight";
            shuttleBackground.style.backgroundColor = "blue";
            spaceShuttleHeight.innerHTML = 10000;
        }
    });

    landButton.addEventListener("click", function() {
        alert("The shuttle is landing. Landing gear engaged.");
       
           flightStatus.innerHTML = "The shuttle has landed";
           shuttleBackground.style.backgroundColor = "green";
           spaceShuttleHeight.innerHTML = 0;
       });

       abortButton.addEventListener("click", function() {
        let shouldAbort = confirm("Confirm that you want to abort the mission.");
       
        if (shouldAbort) {
           flightStatus.innerHTML = "Mission aborted";
           shuttleBackground.style.backgroundColor = "red";
           spaceShuttleHeight.innerHTML = 0;
       }
   });


   document.addEventListener('click', function(event) {
        console.log(event.target.id);

        if (event.target.id === 'left') {
            rocketPosX -= 10;
            rocket.style.marginLeft = rocketPosX + 'px';
        }
        if (event.target.id === 'right') {
            rocketPosX += 10;
            rocket.style.marginLeft = rocketPosX + 'px';
        }
        if (event.target.id === 'up') {
            rocketPosY += 10;
            rocket.style.marginBottom = rocketPosY + 'px';
            altitude += 10000;
            spaceShuttleHeight.innerHTML = altitude
        }
        if (event.target.id === 'down') {
            rocketPosY -= 10;
            rocket.style.marginBottom = rocketPosY + 'px';
            altitude -= 10000;
            spaceShuttleHeight.innerHTML = altitude;
        }
   });


});