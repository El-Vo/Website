// Globale Variablen festlegen
var c = document.getElementById("atom");
c.addEventListener("mousedown", beschleunigeElectron, false);
var ctx = c.getContext("2d");
var centerX = c.width * 0.5;
var centerY = c.height * 0.5;
var atomRadius = c.width * 0.025;
var atomBorderColor = "#EA526F";
var atomFillColor = "#EA526F";
var ellipseColor = "#bbcde5";
var electronColor = "#EA526F";

var ellipseWidth = c.width * 0.18;
var ellipseHeight = c.height * 0.46;

var electronRadius = atomRadius * 0.5;

var counter = 0;
var countDown = false;
var circleX = centerX;
var circleY = centerY;
var beschlfaktor = 1;

function drawAtom() {
    ctx.beginPath();
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.closePath();

    //Zeichnen von vier Ellipsen um den Kern herum
    for (let ellipseRot = 0; ellipseRot < 1; ellipseRot = ellipseRot + 0.25) {

        ctx.beginPath();
        ctx.ellipse(centerX, centerX, ellipseHeight, ellipseWidth, ellipseRot * Math.PI, 0, 2 * Math.PI);
        ctx.lineWidth = atomRadius / 12;
        ctx.strokeStyle = ellipseColor;
        ctx.stroke();

        if (ellipseRot == 0.0) {
            circleX = (centerX + ellipseHeight * 2.5) + (Math.cos((counter + 1.7) * beschlfaktor * 0.6) - 2.5) * ellipseHeight;
            circleY = (centerY + ellipseWidth * 2.5) + (Math.sin((counter + 1.7) * beschlfaktor * 0.6) - 2.5) * ellipseWidth;
        } else if (ellipseRot == 0.5) {
            circleX = (centerX + ellipseWidth * 2.5) + (Math.sin((counter + 0.5) * beschlfaktor * 1.1) - 2.5) * ellipseWidth;
            circleY = (centerY + ellipseHeight * 2.5) + (Math.cos((counter + 0.5) * beschlfaktor * 1.1) - 2.5) * ellipseHeight;
        } else if (ellipseRot == 0.25) {
            circleX = (centerX + c.width * 0.87) + ((Math.sin((counter + 3.1) * beschlfaktor) - 2.5) * ellipseWidth) * (0) + ((Math.cos((counter + 3.1) * beschlfaktor) - 2.5) * ellipseHeight) * (0.75);
            circleY = (centerY + c.width * 1.25) + ((Math.cos((counter + 3.1) * beschlfaktor) - 2.5) * ellipseHeight) * (0.55) + ((Math.sin((counter + 3.1) * beschlfaktor) - 2.5) * ellipseWidth) * (1.35);
        } else {
            circleX = (centerX + c.width * 0.865) - ((Math.sin(counter * beschlfaktor) - 2.5) * ellipseWidth) * (0) + ((Math.cos(counter * beschlfaktor) - 2.5) * ellipseHeight) * (0.75);
            circleY = (centerY - c.width * 0.02) - ((Math.cos(counter * beschlfaktor) - 2.5) * ellipseHeight) * (0.55) + ((Math.sin(counter * beschlfaktor) - 2.5) * ellipseWidth) * (1.35);
        }

        electronX = centerX;
        electronY = centerY + ellipseWidth;
        ctx.beginPath();
        ctx.arc(circleX, circleY, electronRadius, 0, 2 * Math.PI);
        ctx.fillStyle = electronColor;
        ctx.fill();
        ctx.lineWidth = electronRadius / 10;
        ctx.strokeStyle = electronColor;
        electron = ctx.stroke();
        
        //Zeichnen des Kerns
        ctx.beginPath();
        ctx.arc(centerX, centerY, atomRadius, 0, 2 * Math.PI);
        ctx.fillStyle = atomFillColor;
        ctx.fill();
        ctx.lineWidth = atomRadius / 10;
        ctx.strokeStyle = atomBorderColor;
        ctx.stroke();
    }

    counter = counter + 0.05;
}

function beschleunigeElectron() {
    beschlfaktor = Math.random() * 3;
}
setInterval(drawAtom, 45);