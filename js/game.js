let canvas;
let world;

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas);


    console.log('My Character is ', world.character);
    console.log('My Enemies are ', world.enemies);





    function fullscreen() {
        let fullscreen = document.getElementById('fullscreen');
        if (!document.fullscreenElement) {
            enterFullscreen(fullscreen);
        } else {
            exitFullscreen();
        }
    }

    function enterFullscreen(element) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.msRequestFullscreen) {      // for IE11 (remove June 15, 2022)
            element.msRequestFullscreen();
        } else if (element.webkitRequestFullscreen) {  // iOS Safari
            element.webkitRequestFullscreen();
        }
    }

    function exitFullscreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    }
}
