//Function to add event listeners to all elements on screen - Previously done is HTML elements but improvised by adding it in separate JS file
function addEventListenerToallDivElements() {

    for (var divIdentifier = 0; divIdentifier < numberOfBulletPoints; divIdentifier++) {

        (function() {

            var tempDivIdentifier = divIdentifier;

            var firstFunctionArgument = Math.floor(tempDivIdentifier / 3);
            var secondFunctionArgument = tempDivIdentifier % 3;

            document.getElementById(tempDivIdentifier).addEventListener("mousedown", function() {
                changeImageMouseDown(tempDivIdentifier, firstFunctionArgument, secondFunctionArgument)
            }, false);

            document.getElementById(tempDivIdentifier).addEventListener("mouseover", function() {
                changeImage(tempDivIdentifier, firstFunctionArgument, secondFunctionArgument)
            }, false);

        })();

    }

    document.getElementById('mouseUpElement').addEventListener('mouseup', function() {
        mouseup()
    }, false);

    document.getElementById('mainElement').addEventListener('mouseup', function() {
        mouseup()
    }, false);

    document.getElementById('mainElement').addEventListener('mousedown', function() {
        mousedown()
    }, false);

    document.getElementById('mainElement').addEventListener('dblclick', function() {
        resetAllButtons()
    }, false);

}