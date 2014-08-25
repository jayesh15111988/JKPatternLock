 function changeImageMouseDown(id, xcoordinate, ycoordinate) {
     if (mouseupindicator == 0 || mouseupindicator == -1) {
         document.getElementById(id).style.backgroundImage = selectedBulletImageURL;
         prevX = xcoordinate;
         prevY = ycoordinate;
         password.push(id);
     }
 }

 function mouseup() {
         mouseupindicator = 1;
         if (password.length > 1 && usernameField.value.length > 0) {
             sendRequest(password.join(""));
         } else {

             if (didDrawAtLeastOneLineCanvas) {
                 document.getElementById("instructionDivElement").innerHTML = passwordStoreError;
                 didDrawAtLeastOneLineCanvas = false;
             }

         }
         for (var i = 0; i < 3; i++) {
             resetAllButtons();
         }
         var loopcontroller;
         password.length = 0;
         usernameField.value = "";
         mouseupindicator = -1;
         elementsDeleted = 0;
     }
     //Each time user pressed mouse button, we know he's going to draw some line

 function mousedown() {
     didDrawAtLeastOneLineCanvas = true;
     mouseupindicator = 0;
 }