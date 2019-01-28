var scale = 0.3;
var slice_Height = 300; //height of slide
//position of the fail slide
var fixX = 20;
var fixY = -20;

// draw pie in 2d
function drawPieSlice(ctx,centerX, centerY, radius, startAngle, endAngle, color ){
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(centerX,centerY);
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fill();
}

function drawLine(ctx, startX, startY, endX, endY){
    ctx.beginPath();
    ctx.moveTo(startX,startY);
    ctx.lineTo(endX,endY);
    ctx.stroke();
}

var Piechart = function (options) {
    this.options = options;
    var centerX = options.centerX;
    var centerY = options.centerY;
    var radius = options.radius;
    var color = options.colors;
    var ctx = options.ctx;
    ctx.scale(1, scale);
    var myRate = options.data;
    var font = options.font;
    var title = options.title;

    this.drawChart = function(i) {
        if (i < slice_Height) {
            drawPieSlice(ctx, centerX, centerY - i,radius,0,Math.PI * 2 * myRate.success, color.botSuccess);
            drawPieSlice(ctx,centerX + fixX,centerY + fixY - i,radius,Math.PI * 2 * myRate.success,0,color.botFail);
        }
        else {
            drawPieSlice(ctx,centerX,centerY - i,radius,0,Math.PI * 2 * myRate.success, color.topSuccess);
            drawPieSlice(ctx,centerX + fixX,centerY + fixY - i,radius,Math.PI * 2 * myRate.success,0,color.topFail);
        }
    };

    //Draw title of chart
    this.drawTitle = function() {
        ctx.scale(1, 3);
        ctx.beginPath();
        ctx.font = font.large;
        ctx.fillStyle = "black";
        ctx.fillText(title, 400, 500);
        ctx.stroke();
    };

    //Draw lines chart
    this.drawLine = function() {
        //success
        drawLine(ctx, 300, 100, 400, 100);
        drawLine(ctx, 400, 100, 500, 200);
        //fail
        drawLine(ctx, 800, 100, 900, 100);
        drawLine(ctx, 800, 100, 700, 200);
    };

    //Draw text of chart
    this.drawText = function() {
        ctx.font = font.normal;
        //success
        ctx.fillText(myRate.success * 100 + "% ĐÃ ĐẠT", 300, 90);
        //fail
        ctx.fillText(myRate.fail * 100 + "% CHƯA ĐẠT", 800, 90);
    };

    //Draw pie
    this.draw = function() {
        for (i = 0; i <= slice_Height; i++) {
            this.drawChart(i);
        }
        this.drawTitle();
        this.drawLine();
        this.drawText();
    }
};

