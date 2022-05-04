let cfg = "./config-37.json";

function ShowCer(src, txt) {
    $('.perfundo__image').css("background-image", "url(" + src + ")");
    $('.perfundo__caption').text(txt);
}

function load() {

    $.ajaxSettings.async = false;
    $.getJSON(cfg, function (result) {
        $('body').css("background-image", "url(" + result.wallpaper + ")");
        $('#contentToWrite').append(result.content);

        let sound = $('#soundname').find('a');
        sound.attr('href', result.bgmurl);
        sound.append(result.bgm);

        $.each(result.pics, function (i, item) {
            let desc = result.idol + (i + 1).toString();

            let li = $('<li></li>');
            let a = $('<a></a>');
            a.attr('class', 'perfundo__link');
            a.attr('href', '#perfundo-single2');
            a.append(`<img src="${item}">`);
            a.click(function (e) { ShowCer(item, desc); });

            li.append(a);
            li.append(`<p class="date">${desc}</p>`);

            $('#myRoundabout').prepend(li);

        });

        $('#music').attr('src', result.bgmsrc);
    });
}

function playPause() {
    let player = document.getElementById('music');
    let play_btn = $('#music_btn');

    if (player.paused) {
        player.play();
        play_btn.css("background", "url(./img/on.png) no-repeat");
    }
    else {
        player.pause();
        play_btn.css("background", "url(./img/mute.png) no-repeat");
    }
}

function move() {
    // Get the moved DIV object
    let obj = document.getElementById("container");
    // Set the style positioning property to drag the div out of the current document flow.
    // In this way, he belongs to the entire active form. Can be stacked.
    obj.style.position = "absolute";
    obj.style.opacity = 0;
    // Animation counter.
    let num = 0;
    let period = 105;
    // Get the mobile div, the X coordinate of the entire active area
    let right = 0;
    // Get the mobile div, the Y coordinate of the entire active area
    let top = 140;
    // Move a DIV with a timer
    let timer = setInterval(function () { // moving function
        if (num == period) { // Move 105 times
            clearInterval(timer);
        }
        // Set by the left style property. unit is required
        obj.style.right = right + "px";
        // Set by the top style attribute, it must be with units
        obj.style.top = top - num * 2 + "px";
        // Increment the counter by one
        obj.style.opacity = num * 1.0 / period;
        obj.style.visibility = "visible";
        num++;
    }, 20); // 190
}

function thenceThen() {

    $.getJSON(cfg, function (result) {
        let followDate = new Date(result.date);
        let totalSecs = (new Date() - followDate) / 1000;
        let days = Math.floor(totalSecs / 3600 / 24);
        let hours = Math.floor((totalSecs - days * 24 * 3600) / 3600);
        let mins = Math.floor((totalSecs - days * 24 * 3600 - hours * 3600) / 60);
        let secs = Math.floor((totalSecs - days * 24 * 3600 - hours * 3600 - mins * 60));
        document.getElementById("thenceThen").innerText = "成为" + result.idol + "粉丝已有：\n" +
            days + "天" + hours + "小时" + mins + "分钟" + secs + "秒";
    });
}

$(function () {
    load();

    writeContent(true);
    setTimeout(move, 15000);

    $('#myRoundabout').roundabout({
        shape: 'figure8',
        minOpacity: 1
    });

    self.setInterval("thenceThen()", 500);
});