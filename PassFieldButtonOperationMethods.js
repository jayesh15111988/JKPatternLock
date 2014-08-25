//Once user ups the mouse button,remove all available lines from the canvas
function resetAllButtons() {
    didDrawAtLeastOneLineCanvas = false;
    var cells = document.getElementById("mainElement").getElementsByTagName("div");
    var len = cells.length;
    //xxx
    for (var i = 0; i < len; i++) {
        (function(j) {
            if (cells[j] !== undefined) {
                var cellClassName = cells[j].className.toLowerCase();
                if (cellClassName === "vertical" || cellClassName === "horizontal" || cellClassName === "positivediagonal" || cellClassName === "negativediagonal" || cellClassName === "lowslopepositive" || cellClassName === "lowslopenegative" || cellClassName === "highslopenegative" || cellClassName === "highslopepositive") {
                    cells[j].parentNode.removeChild(cells[j]);
                }
            }
        })(i);
    }
    //Reset all bullets
    for (var i = 8; i >= 0; i--) {
        document.getElementById(i).style.backgroundImage = normalBulletImageURL;
    }
}

//Mark all buttons with selected background images

function fillAllButtons() {
    for (var i = 8; i >= 0; i--) {
        document.getElementById(i).style.backgroundImage = selectedBulletImageURL;
    }
}