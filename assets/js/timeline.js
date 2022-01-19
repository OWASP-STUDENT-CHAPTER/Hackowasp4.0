const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'white';
ctx.globalAlpha = 0.5;



var canv = document.getElementById("canvas");
var context = canv.getContext("2d");
context.beginPath();
        context.lineWidth = 1;
        context.moveTo(105, 100);
        context.lineTo(1300, 100);
        context.globalAlpha=1.0;
        context.strokeStyle = "black";
        context.stroke();
        context.lineWidth = 1;
        context.moveTo(105, 180);
        context.lineTo(1300, 180);
        context.globalAlpha=1.0;
        context.strokeStyle = "black";
        context.stroke();
        context.moveTo(105, 260);
        context.lineTo(1300, 260);
        context.globalAlpha=1.0;
        context.strokeStyle = "black";
        context.stroke();
        context.moveTo(105, 340);
        context.lineTo(1300, 340);
        context.globalAlpha=1.0;
        context.strokeStyle = "black";
        context.stroke();
        context.moveTo(105, 420);
        context.lineTo(1300, 420);
        context.globalAlpha=1.0;
        context.strokeStyle = "black";
        context.stroke();
        context.moveTo(105, 500);
        context.lineTo(1300, 500);
        context.globalAlpha=1.0;
        context.strokeStyle = "black";
        context.stroke();
        context.moveTo(105, 580);
        context.lineTo(1300, 580);
        context.globalAlpha=1.0;
        context.strokeStyle = "black";
        context.stroke();
        context.moveTo(105, 660);
        context.lineTo(1300, 660);
        context.globalAlpha=1.0;
        context.strokeStyle = "black";
        context.stroke();
        context.moveTo(105, 740);
        context.lineTo(1300, 740);
        context.globalAlpha=1.0;
        context.strokeStyle = "black";
        context.stroke();
        context.moveTo(105, 820);
        context.lineTo(1300, 820);
        context.globalAlpha=1.0;
        context.strokeStyle = "black";
        context.stroke();
        context.moveTo(105, 900);
        context.lineTo(1300, 900);
        context.globalAlpha=1.0;
        context.strokeStyle = "black";
        context.stroke();
        //vertical lines
        context.moveTo(504, 0);
        context.lineTo(504, 900);
        context.globalAlpha=1.0;
        context.strokeStyle = "black";
        context.stroke();
        context.moveTo(903, 0);
        context.lineTo(903, 900);
        context.globalAlpha=1.0;
        context.strokeStyle = "black";
        context.stroke();
      //days names
        ctx.fillStyle= "black";
        ctx.font = "bold 35pt Tahoma";
        
        ctx.fillText("Tuesday",200,50);
        ctx.fillStyle= "black";
        ctx.font = " bold 35pt Tahoma";
        
        ctx.fillText("Wednesday",570,50);
        ctx.fillStyle= "black";
        ctx.font = "bold 35pt Tahoma";
        
        ctx.fillText("Thursday",1000,50);
//timings
        ctx.fillStyle= "black";
        ctx.font = "15pt Tahoma";
        ctx.fillText("12am",50,105); 
        ctx.fillStyle= "black";
        ctx.font = "15pt Tahoma";
        ctx.fillText(" 2am",50,185);
        ctx.fillStyle= "black";
        ctx.font = "15pt Tahoma";
        ctx.fillText(" 4am",50,265);
        ctx.fillStyle= "black";
        ctx.font = "15pt Tahoma";
        ctx.fillText(" 6am",50,345);
        ctx.fillStyle= "black";
        ctx.font = "15pt Tahoma";
        ctx.fillText(" 8am",50,425);
        ctx.fillStyle= "black";
        ctx.font = "15pt Tahoma";
        ctx.fillText("10am",50,505);
        ctx.fillStyle= "black";
        ctx.font = "15pt Tahoma";
        ctx.fillText("12pm",50,585);
        ctx.fillStyle= "black";
        ctx.font = "15pt Tahoma";
        ctx.fillText(" 2pm",50,665);
        ctx.fillStyle= "black";
        ctx.font = "15pt Tahoma";
        ctx.fillText(" 4pm",50,745);
        ctx.fillStyle= "black";
        ctx.font = "15pt Tahoma";
        ctx.fillText(" 6pm",50,825);

//cards
        //Tuesday Cards
        ctx.beginPath();
        roundRect(ctx, 120, 110, 365, 140, 20,true,false);
        // To change the color on the rectangle, just manipulate the context
        ctx.fillStyle = "#C3E0ED";
        ctx.fill();
        ctx.beginPath();
        roundRect(ctx, 120, 270, 365, 220, 20, true,false);
        // Manipulate it again
        ctx.fillStyle = "#F7C476";
        ctx.fill();
        ctx.beginPath();
        roundRect(ctx, 120, 590, 365, 220, 20, true,false);
        // Manipulate it again
        ctx.fillStyle = "#F8A4BE";
        ctx.fill();


        // Wednesday Cards
        ctx.beginPath();
        roundRect(ctx, 520, 110, 365,220, 20,true,false);
        // To change the color on the rectangle, just manipulate the context
        ctx.fillStyle = "#AAC1AE";
        ctx.fill();
        ctx.beginPath();
        roundRect(ctx, 520, 350, 365, 140, 20, true,false);
        // Manipulate it again
        ctx.fillStyle = "#F8A4BE";
        ctx.fill();
        ctx.beginPath();
        roundRect(ctx, 520, 510, 365, 380, 20, true,false);
        // Manipulate it again
        ctx.fillStyle = "#C3E0ED";
        ctx.fill();
     
        // Thursday Cards
        ctx.beginPath();
        roundRect(ctx, 920, 110, 365,60, 20,true,false);
        // To change the color on the rectangle, just manipulate the context
        ctx.fillStyle = "#CCBDFF";
        ctx.fill();
        ctx.beginPath();
        roundRect(ctx, 920, 270, 365, 380, 20, true,false);
        // Manipulate it again
        ctx.fillStyle = "#F7C476";
        ctx.fill();
        ctx.beginPath();
        roundRect(ctx, 920, 750, 365, 140, 20, true,false);
        // Manipulate it again
        ctx.fillStyle = "#C3E0ED";
        ctx.fill();

//Text On Cards

        ctx.fillStyle= "#62594B";
        ctx.font = "bold 11pt Tahoma";
        ctx.fillText("Webinar On Web Development",140,140);
        ctx.fillStyle= "#EC8482";
        ctx.font = "bold 11pt Tahoma";
        ctx.fillText("Time: 12:00 AM To 3:30 AM",140,170);

        ctx.fillStyle= "#62594B";
        ctx.font = "bold 11pt Tahoma";
        ctx.fillText("Gaming Night - Fortnite",140,300);
        ctx.fillStyle= "#EC8482";
        ctx.font = "bold 11pt Tahoma";
        ctx.fillText("Time: 4:00 AM To 10:00 AM",140,330);

        ctx.fillStyle= "#62594B";
        ctx.font = "bold 11pt Tahoma";
        ctx.fillText("HackO Starting Ceremony",140,620);
        ctx.fillStyle= "white";
        ctx.font = "bold 11pt Tahoma";
        ctx.fillText("Time: 12:00 PM To 6:00 PM",140,650);







function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
        if (typeof stroke === 'undefined') {
                stroke = true;
        }
        if (typeof radius === 'undefined') {
                radius = 5;
        }
        if (typeof radius === 'number') {
                radius = {tl: radius, tr: radius, br: radius, bl: radius};
        } else {
                var defaultRadius = {tl: 0, tr: 0, br: 0, bl: 0};
                for (var side in defaultRadius) {
                radius[side] = radius[side] || defaultRadius[side];
                }
        }
        ctx.beginPath();
        ctx.moveTo(x + radius.tl, y);
        ctx.lineTo(x + width - radius.tr, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
        ctx.lineTo(x + width, y + height - radius.br);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
        ctx.lineTo(x + radius.bl, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
        ctx.lineTo(x, y + radius.tl);
        ctx.quadraticCurveTo(x, y, x + radius.tl, y);
        ctx.closePath();
        if (fill) {
                ctx.fill();
        }
        if (stroke) {
                ctx.stroke();
        }
        
        }







