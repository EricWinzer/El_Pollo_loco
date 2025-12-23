class Keyboard {
    left = false; // key "a" or "arrowkey left"
    right = false; // key "d" or "arrowkey right"
    up = false; // key "w" or "arrowkey up"
    down = false;
    space = false;
    throw = false; // Key "s"

    constructor() {
        window.addEventListener('keydown', (e) => this.keyDownHandler(e));
        window.addEventListener('keyup', (e) => this.keyUpHandler(e));
    }

    keyDownHandler(e) {
        console.log('Tastatur ', e.keyCode)
        switch (e.keyCode) {
            case 37:
            case 65: this.left = true; break;
            case 38:
            case 87: this.up = true; break;
            case 39:
            case 68: this.right = true; break;
            case 40: this.down = true; break;
            case 32: this.space = true; break;
            case 83: this.throw = true; break;
        }
    }

    keyUpHandler(e) {
        switch (e.keyCode) {
            case 37:
            case 65: this.left = false; break;
            case 38:
            case 87: this.up = false; break;
            case 39:
            case 68: this.right = false; break;
            case 40: this.down = false; break;
            case 32: this.space = false; break;
            case 83: this.throw = false; break;
        }
    }
}
