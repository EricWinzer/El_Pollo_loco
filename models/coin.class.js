class Coin extends DrawableObject {

    height = 80;
    width = 80;

    collected = false;
    intervalIDs = [];

    images = [
        '../assets/img/8_coin/coin_1.png',
        '../assets/img/8_coin/coin_2.png'
    ];

    constructor(x = 0, y = 0) {
        super();
        this.x = x;
        this.y = y;
        this.loadImage(this.images[0]);
        this.loadImages(this.images);
        this.animateCoins();
    }

    animateCoins() {
        // Keep reference to interval so it can be cleared later
        let id = setInterval(() => {
            this.playAnimation(this.images);
        }, 200);
        this.intervalIDs.push(id);
    }

    collect() {
        if (this.collected) return;
        this.collected = true;
        // start rising animation (smooth)
        let riseId = setInterval(() => {
            this.y -= 6;
        }, 1000 / 60);
        this.intervalIDs.push(riseId);

        // stop internal intervals after a short time to avoid leaked timers
        setTimeout(() => {
            this.intervalIDs.forEach(id => clearInterval(id));
            this.intervalIDs = [];
        }, 800);
    }






}
