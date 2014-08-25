   //For all the bullets on the screen, add event listners one by one
   //Change image of dot to the circle enclosing it once user reaches to that point and mouse up event is fired
   //This is id of individual pointranging from 0-9. Starting from top left corner ending on right bottom corner
  addEventListenerToallDivElements();

  function changeImage(id, xcoordinate, ycoordinate) {
      //Is mousebutton down and the point is touched by the user?
      if (mouseupindicator == 0) {
          if (password.indexOf(id) == -1) {
              //Each dot has unique id and change its background image based on the point to which mouse pointer is touched
              //d1.jpg Regular Image
              //d2.jpg Dot image with enclosing circle
              document.getElementById(id).style.backgroundImage = selectedBulletImageURL;
              //Add corresponding id to the password array which will eventually be stored for particular user
              password.push(id);
              //Draw the line between previous and current point touched
              drawLine(xcoordinate, ycoordinate, prevX, prevY);
              //Update coordinates
              prevX = xcoordinate;
              prevY = ycoordinate;
          }
      }
  }

  function drawLowSloppedPositiveLine(xCoordinatePassed, yCoordinatePassed, prevXPassed, prevYPassed) {

      //This is short graohics of how the line actually looks when appears on the screen
      /*
                      . |
               .        |
                        |
      .                 |
      -------------------

      */
      drawGeneralLowSloppedLine(prevYPassed, yCoordinatePassed, prevXPassed, 'lowSlopePositive');
  }

  function drawLowSloppedNegativeLine(xCoordinatePassed, yCoordinatePassed, prevXPassed, prevYPassed) {
      /*

      |.
      |
      |        .
      |                 .
      -------------------

      */
      drawGeneralLowSloppedLine(prevYPassed, yCoordinatePassed, prevXPassed, 'lowSlopeNegative');
  }

  function drawGeneralLowSloppedLine(previousYPassed, yCoordinatePassed, previousXPassed, newElementClassName) {
      var iDiv = document.createElement('div');
      iDiv.className = newElementClassName;
      iDiv.style.left = 163;
      document.getElementById('mainElement').appendChild(iDiv);
      var divTopValueOneForLowSloppedLines = -13 + 110 * ((previousXPassed - 1) >= 0 ? (previousXPassed - 1) : previousXPassed);
      var divTopValueTwoForLowSloppedLines = -13 + 110 * ((previousXPassed) >= 0 ? (previousXPassed) : 0);

      if (previousYPassed < yCoordinatePassed) {
          iDiv.style.top = (newElementClassName === 'lowSlopePositive') ? divTopValueOneForLowSloppedLines : divTopValueTwoForLowSloppedLines;
      } else {
          iDiv.style.top = (newElementClassName === 'lowSlopeNegative') ? divTopValueOneForLowSloppedLines : divTopValueTwoForLowSloppedLines;
      }
  }

  function drawHighSloppedNegativeLine(xCoordinatePassed, yCoordinatePassed, prevXPassed, prevYPassed) {

      /*
       |.
       |
       |
       |    .
       |
       |       .
       ---------
        
        */
      drawGeneralHighSloppedLine(prevXPassed, xCoordinatePassed, prevYPassed, 'highSlopeNegative');
  }

  function drawHighSloppedPositiveLine(xCoordinatePassed, yCoordinatePassed, prevXPassed, prevYPassed) {
      /*
               .|
                |
                |
          .     |
                |
                |
      .         |
      -----------
      */
      drawGeneralHighSloppedLine(prevXPassed, xCoordinatePassed, prevYPassed, 'highSlopePositive');
  }

  function drawGeneralHighSloppedLine(previousXPassed, xCoordinatePassed, previousYPassed, newElementClassName) {
      var iDiv = document.createElement('div');
      iDiv.className = newElementClassName;
      iDiv.style.top = 43;
      document.getElementById('mainElement').appendChild(iDiv);
      var divTopValueOneForHighSloppedLines = 109 + 110 * ((previousYPassed - 1) >= 0 ? (previousYPassed - 1) : previousYPassed);
      var divTopValueTwoForHighSloppedLines = 109 + 110 * ((previousYPassed) >= 0 ? (previousYPassed) : 0);
      if (previousXPassed > xCoordinatePassed) {
          iDiv.style.left = (newElementClassName == 'highSlopePositive') ? divTopValueTwoForHighSloppedLines : divTopValueOneForHighSloppedLines;
      } else {
          iDiv.style.left = (newElementClassName == 'highSlopeNegative') ? divTopValueTwoForHighSloppedLines : divTopValueOneForHighSloppedLines;
      }
  }

  function drawVerticalLine(xcoordinatetodraw, ycoordinatetodraw, prevXPassedtodraw, prevYPassedtodraw) {
      drawGeneralStraightLine(prevXPassedtodraw, xcoordinatetodraw, prevYPassedtodraw, 'vertical');
  }

  function drawHorizontalLine(xcoordinatetodraw, ycoordinatetodraw, prevXPassedtodraw, prevYPassedtodraw) {
      drawGeneralStraightLine(prevYPassedtodraw, ycoordinatetodraw, prevXPassedtodraw, 'horizontal');
  }

  function drawGeneralStraightLine(prevXYPassedtodraw, xycoordinatetodraw, lastSpecificParameter, newElementClassName) {
      var iDiv = document.createElement('div');
      iDiv.className = newElementClassName;
      document.getElementById('mainElement').appendChild(iDiv);
      var isVerticalLine = (newElementClassName === 'vertical') ? 1 : 0;

      var topStyle = 'top';
      var leftStyle = 'left';
      var heightStyle = 'height';
      var widthStyle = 'width';

      if (prevXYPassedtodraw < xycoordinatetodraw) {
          if (isVerticalLine) {
              iDiv.style[topStyle] = 54 + isVerticalLine + 110 * prevXYPassedtodraw;
          } else {
              iDiv.style[leftStyle] = 54 + isVerticalLine + 110 * prevXYPassedtodraw;
          }
      } else {
          if (Math.abs(prevXYPassedtodraw - xycoordinatetodraw) > 1) {
              if (isVerticalLine) {
                  iDiv.style[topStyle] = 54 + isVerticalLine + 110 * (prevXYPassedtodraw - 2);
              } else {
                  iDiv.style[leftStyle] = 54 + isVerticalLine + 110 * (prevXYPassedtodraw - 2);
              }
          } else {
              if (isVerticalLine) {
                  iDiv.style[topStyle] = 54 + isVerticalLine + 110 * (prevXYPassedtodraw - 1);
              } else {
                  iDiv.style[leftStyle] = 54 + isVerticalLine + 110 * (prevXYPassedtodraw - 1);
              }
          }
      }
      if (Math.abs(prevXYPassedtodraw - xycoordinatetodraw) > 1) {
          if (isVerticalLine) {
              iDiv.style[heightStyle] += (Math.abs(prevXYPassedtodraw - xycoordinatetodraw)) * 110;
          } else {
              iDiv.style[widthStyle] += (Math.abs(prevXYPassedtodraw - xycoordinatetodraw)) * 110;
          }
      }
      if (isVerticalLine) {
          iDiv.style[leftStyle] = 55 + 110 * lastSpecificParameter;
      } else {
          iDiv.style[topStyle] = 55 + 110 * lastSpecificParameter;
      }
  }

  function drawPositiveDiagonalLine(xcoordinatetodraw, ycoordinatetodraw, prevXPassedtodraw, prevYPassedtodraw) {

      /*

     /
    /
   /
  /
 /
/
  */
      createGeneralDiagonalLine(xcoordinatetodraw, ycoordinatetodraw, prevXPassedtodraw, prevYPassedtodraw, 'positiveDiagonal');
  }

  function drawNegativeDiagonalLine(xcoordinatetodraw, ycoordinatetodraw, prevXPassedtodraw, prevYPassedtodraw) {
      /*
        \
         \
          \
           \
            \
             \
              \
      */
      createGeneralDiagonalLine(xcoordinatetodraw, ycoordinatetodraw, prevXPassedtodraw, prevYPassedtodraw, 'negativeDiagonal');
  }

  function createGeneralDiagonalLine(xcoordinatetodraw, ycoordinatetodraw, prevXPassedtodraw, prevYPassedtodraw, newElementClassName) {
      var isPositiveDiagonalLine = (newElementClassName === 'positiveDiagonal');
      var iDiv = document.createElement('div');
      iDiv.className = newElementClassName;
      if (ycoordinatetodraw > prevYPassedtodraw) {
          iDiv.style.left = 110 + (prevYPassedtodraw) * 110;
          iDiv.style.top = 32 + ((isPositiveDiagonalLine) ? (prevXPassedtodraw - 1) : (prevXPassedtodraw)) * 110;
      } else {
          iDiv.style.left = 110 + (prevYPassedtodraw - 1) * 110;
          iDiv.style.top = 32 + (isPositiveDiagonalLine ? (prevXPassedtodraw) : (prevXPassedtodraw - 1)) * 110;
      }
      if (Math.abs(prevXPassedtodraw - xcoordinatetodraw) > 1) {
          iDiv.style.height = 156 * (Math.abs(prevXPassedtodraw - xcoordinatetodraw));
          iDiv.style.top = 10;
          iDiv.style.left = 165;
      }
      document.getElementById('mainElement').appendChild(iDiv);
  }

   //This is generalized draw line function - based on the previous and current coordinates, we will
   //Call appropriate function to actually draw line on the screen

  function drawLine(xCoordinatePassed, yCoordinatePassed, prevXPassed, prevYPassed) {

      var cells = document.getElementById("mainElement").getElementsByTagName("div");

      //Definitely Horizontal line as x coordinate difference is zero

      if ((prevXPassed - xCoordinatePassed) == horizontalVerticalLinesDifferenceParameter) {

          drawHorizontalLine(xCoordinatePassed, yCoordinatePassed, prevXPassed, prevYPassed);

      }
      //Definitely Vertical line as y coordinate difference is zero
      else if ((prevYPassed - yCoordinatePassed) == horizontalVerticalLinesDifferenceParameter) {

          drawVerticalLine(xCoordinatePassed, yCoordinatePassed, prevXPassed, prevYPassed);

      } else if (((prevYPassed - yCoordinatePassed) / (prevXPassed - xCoordinatePassed)) == -lowSloppedLinesDifferenceParameter) {

          drawLowSloppedPositiveLine(xCoordinatePassed, yCoordinatePassed, prevXPassed, prevYPassed);

      } else if (((prevYPassed - yCoordinatePassed) / (prevXPassed - xCoordinatePassed)) == lowSloppedLinesDifferenceParameter) {

          drawLowSloppedNegativeLine(xCoordinatePassed, yCoordinatePassed, prevXPassed, prevYPassed);

      } else if (((prevYPassed - yCoordinatePassed) / (prevXPassed - xCoordinatePassed)) == highSloppedLinesDifferenceParameter) {

          drawHighSloppedNegativeLine(xCoordinatePassed, yCoordinatePassed, prevXPassed, prevYPassed);

      } else if (((prevYPassed - yCoordinatePassed) / (prevXPassed - xCoordinatePassed)) == -highSloppedLinesDifferenceParameter) {

          drawHighSloppedPositiveLine(xCoordinatePassed, yCoordinatePassed, prevXPassed, prevYPassed);

      }
      //We have to draw a diagonal line now
      else {

          var angle = convertAngleFromRadiansToDegrees(Math.atan2((prevYPassed - yCoordinatePassed), (prevXPassed - xCoordinatePassed)));
          if (angle == -diagonalLineSmallerAngle || angle == diagonalLineBiggerAngle) {
              //We have positive diagonal line
              drawPositiveDiagonalLine(xCoordinatePassed, yCoordinatePassed, prevXPassed, prevYPassed);
          } else if (angle == -diagonalLineBiggerAngle || angle == diagonalLineSmallerAngle) {
              //We have negative diagonal line
              drawNegativeDiagonalLine(xCoordinatePassed, yCoordinatePassed, prevXPassed, prevYPassed);
          }

      }
  }

   //Convenient function to convert angles from machine readable to human readable format
  function convertAngleFromRadiansToDegrees(angleInRadians) {
      return Math.round(angleInRadians * (180 / Math.PI));
  }