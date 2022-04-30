function move() {
    // Get the moved DIV object
    var obj = document.getElementById("container");
    // Set the style positioning property to drag the div out of the current document flow.
    // In this way, he belongs to the entire active form. Can be stacked.
    obj.style.position = "absolute";
    obj.style.opacity = 0;
    // Animation counter.
    var num = 0;
    // Get the mobile div, the X coordinate of the entire active area
    var right = 60;
    // Get the mobile div, the Y coordinate of the entire active area
    var top = 140;
    // Move a DIV with a timer
    var timer = setInterval(function () { // moving function
        if (num == 105) { // Move 105 times
            clearInterval(timer);
        }
        // Set by the left style property. unit is required
        obj.style.right = right + "px";
        // Set by the top style attribute, it must be with units
        obj.style.top = top - num * 2 + "px";
        // Increment the counter by one
        obj.style.opacity = num / 105.0;
        obj.style.visibility = "visible";
        num++;
    }, 190);
}

function thenceThen() {

    $.getJSON("./config.json", function (result) {
        var followDate = new Date(result.date);
        var totalSecs = (new Date() - followDate) / 1000;
        var days = Math.floor(totalSecs / 3600 / 24);
        var hours = Math.floor((totalSecs - days * 24 * 3600) / 3600);
        var mins = Math.floor((totalSecs - days * 24 * 3600 - hours * 3600) / 60);
        var secs = Math.floor((totalSecs - days * 24 * 3600 - hours * 3600 - mins * 60));
        document.getElementById("thenceThen").innerText = "成为" + result.idol + "粉丝已有：\n" +
            days + "天" + hours + "小时" + mins + "分钟" + secs + "秒";
    });
}

window.onload = function () {
    writeContent(true);
    setTimeout(move, 15000);

    $('#myRoundabout').roundabout({
        shape: 'figure8',
        minOpacity: 1
    });
    
    self.setInterval("thenceThen()", 500);
}