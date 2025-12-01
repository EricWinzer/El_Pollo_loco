class Keyboard {
    left = false;
    right = false;
    up = false;
    down = false;
    space = false;

    constructor() {
        window.addEventListener('keydown', (e) => this.keyDownHandler(e));
        window.addEventListener('keyup', (e) => this.keyUpHandler(e));
    }

    keyDownHandler(e) {
        switch (e.keyCode) {
            case 37: this.left = true; break;
            case 38: this.up = true; break;
            case 39: this.right = true; break;
            case 40: this.down = true; break;
            case 32: this.space = true; break;
        }
    }

    keyUpHandler(e) {
        switch (e.keyCode) {
            case 37: this.left = false; break;
            case 38: this.up = false; break;
            case 39: this.right = false; break;
            case 40: this.down = false; break;
            case 32: this.space = false; break;
        }
    }
}
