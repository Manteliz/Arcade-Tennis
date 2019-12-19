var canvas = document.getElementById("gameCanvas");
    var canvasContext;
    var ballSize = 10;
    var ballX = 400;
    var ballY = 300;
    var ballSpeedX = 5;
    var ballSpeedY = 5;
    const PADDLE_HEIGHT = canvas.height/6;
    var paddle1Y = (canvas.height-PADDLE_HEIGHT)/2;
    var paddle2Y = (canvas.height-PADDLE_HEIGHT)/2;


    window.onload = function(){
        //using Canvas API for drawing graphics
        canvasContext = canvas.getContext('2d');
        var framesPerSecond = 60;
        setInterval(function(){
            drawEverything();
            moveEverything();
        }, 1000/framesPerSecond);

        canvas.addEventListener('mousemove', function(evt){
            var mousePos = calculateMousePos(evt);
            paddle1Y = mousePos.y;

        });

    }

    function calculateMousePos(evt){
        //element.getBoundingClientRect().left and element.getBoundingClientRect().top returns the left and top distance from the viewport edge to the HTML element      
        var rect = canvas.getBoundingClientRect();
        var root = document.documentElement;
        var mouseX = evt.clientX - rect.left - root.scrollLeft;
        var mouseY = evt.clientY - rect.top - root.scrollTop;
        return {
            x: mouseX,
            y: mouseY
        };
        
    }

    function drawEverything(){
        //next line makes the black canvas
        colorRect('black', 0, 0, canvas.width, canvas.height );
        //next line draws the left paddle
        colorRect('white', 10, paddle1Y-PADDLE_HEIGHT/2, 10, PADDLE_HEIGHT );
        //next line draws the right paddle
        colorRect('white', 780, paddle2Y, 10, PADDLE_HEIGHT );
        //next line draws a ball
        colorCircle(ballX, ballY, ballSize, 'white');
        //next line draws initials
        drawInitials();
        //next line draws the net
        drawNet('white');
    }

    function moveEverything(){
        //handling the bounce from the left and right
        if((ballX+ballSize) >= canvas.width-20){
            ballSpeedX = - ballSpeedX;
        }
        if((ballX-ballSize) <= 20){
            ballSpeedX = - ballSpeedX;
        }
        ballX = ballX + ballSpeedX;
        //handling the bounces from the top and bottom
        if((ballY+ballSize) >= canvas.height){
            ballSpeedY = - ballSpeedY;
        }
        if((ballY-ballSize) <= 0){
            ballSpeedY = - ballSpeedY;
        }
        ballY = ballY + ballSpeedY;
    }

    function drawNet(color){
        canvasContext.beginPath();
        canvasContext.strokeStyle = color;
        canvasContext.lineWidth = 2;
        canvasContext.moveTo(400, 20);
        canvasContext.lineTo(400, 40);
        canvasContext.stroke();
        canvasContext.moveTo(400, 60);
        canvasContext.lineTo(400, 80);
        canvasContext.stroke();
        canvasContext.moveTo(400, 100);
        canvasContext.lineTo(400, 120);
        canvasContext.stroke();
        canvasContext.moveTo(400, 140);
        canvasContext.lineTo(400, 160);
        canvasContext.stroke();
        canvasContext.moveTo(400, 180);
        canvasContext.lineTo(400, 200);
        canvasContext.stroke();
        canvasContext.moveTo(400, 220);
        canvasContext.lineTo(400, 240);
        canvasContext.stroke();
        canvasContext.moveTo(400, 260);
        canvasContext.lineTo(400, 280);
        canvasContext.stroke();
        canvasContext.moveTo(400, 300);
        canvasContext.lineTo(400, 320);
        canvasContext.stroke();
        canvasContext.moveTo(400, 340);
        canvasContext.lineTo(400, 360);
        canvasContext.stroke();
        canvasContext.moveTo(400, 380);
        canvasContext.lineTo(400, 400);
        canvasContext.stroke();
        canvasContext.moveTo(400, 420);
        canvasContext.lineTo(400, 440);
        canvasContext.stroke();
        canvasContext.moveTo(400, 460);
        canvasContext.lineTo(400, 480);
        canvasContext.stroke();
        canvasContext.moveTo(400, 500);
        canvasContext.lineTo(400, 520);
        canvasContext.stroke();
        canvasContext.moveTo(400, 540);
        canvasContext.lineTo(400, 560);
        canvasContext.stroke();
        canvasContext.moveTo(400, 580);
        canvasContext.lineTo(400, 600);
        canvasContext.stroke();
    }

    function colorCircle(centerX, centerY, radius, drawColor) {
        canvasContext.fillStyle = drawColor;
        canvasContext.beginPath();
        canvasContext.arc(centerX, centerY, radius, 0, Math.PI*2,true);
        canvasContext.fill();
}

    function drawInitials(){
        //drawing M letter for Mantas :)
        canvasContext.lineWidth = 2;
        canvasContext.beginPath();
        canvasContext.strokeStyle = 'blue';
        canvasContext.moveTo(20, 20);
        canvasContext.lineTo(20, 100);
        canvasContext.stroke();
        canvasContext.beginPath();
        canvasContext.moveTo(20, 20);
        canvasContext.lineTo(50, 70);
        canvasContext.stroke();
        canvasContext.beginPath();
        canvasContext.moveTo(50, 70);
        canvasContext.lineTo(80, 20);
        canvasContext.stroke();
        canvasContext.beginPath();
        canvasContext.moveTo(80, 20);
        canvasContext.lineTo(80, 100);
        canvasContext.stroke();

        //drawing V for Vaistaras :)
        canvasContext.strokeStyle = 'green';
        canvasContext.beginPath();
        canvasContext.moveTo(100, 20);
        canvasContext.lineTo(120, 100);
        canvasContext.stroke();
        canvasContext.beginPath();
        canvasContext.moveTo(120, 100);
        canvasContext.lineTo(140, 20);
        canvasContext.stroke();

    }

    function colorRect(color, X, Y, width, height){
        canvasContext.fillStyle = color;
        canvasContext.fillRect(X, Y, width, height);
    }