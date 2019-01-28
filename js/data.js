window.onload = eventWindowLoaded;
function eventWindowLoaded() {
    Canvas();
}
function Canvas() {
    var myRate = {
        fail: 0.2,
        success: 0.8
    };
    var color = {
        topSuccess: "#009ED5",
        botSuccess: "#456AA4",
        topFail: "#FF6464",
        botFail: "#E4322B"
    };
    var font = {
        large: "20px Arial",
        normal: "14px Arial"
    };
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext("2d");
    var myPiechart = new Piechart(
        {
            ctx,
            centerX: 600,
            centerY: 1000,
            radius: 200,
            title: " BIỂU ĐỒ TỔNG QUAN KHUNG NĂNG LỰC",
            canvas: canvas,
            data: myRate,
            font: font,
            colors: color
        }
    );

    myPiechart.draw();
}