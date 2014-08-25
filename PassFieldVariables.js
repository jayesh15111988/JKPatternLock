//Flags and Indicators to record if mouse button is clicked / upped  whenever user has pressed the mouse button,
//We keep on creating pattern lines on the screen. and once released, we take username and pattern and store that on the server

var mouseupindicator=-1;
var didDrawAtLeastOneLineCanvas=false;

//Array to hold Password Information - Nothing but a sequence of digits
var password=[];

//Variables to hold values of (x,y) when user draggs across the screen

var prevX,prevY;

//We need to delete all the lines on the screen
var elementsDeleted=0;

//How many bullet points (Digits) we have on the screen
var numberOfBulletPoints=9;

//Normal bullet image
var normalBulletImageURL='url("d1.jpg")';

//Bullet image when user draggs over one of the bullet points
var selectedBulletImageURL='url("d2.jpg")';

//Username filed - Must be non empty for server to store password in the database
var usernameField=document.getElementById('username');
var passwordStoreError="Username and password must be non blank";

var diagonalLineBiggerAngle=135;
var diagonalLineSmallerAngle=45;

var horizontalVerticalLinesDifferenceParameter=0;
var highSloppedLinesDifferenceParameter=0.5;
var lowSloppedLinesDifferenceParameter=2;
