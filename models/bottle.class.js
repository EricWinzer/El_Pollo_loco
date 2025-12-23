class Bottle extends DrawableObject {

    height = 80;
    width = 80;

    rotation = 0;
    rotating = false;

    images = [
        '../assets/img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        '../assets/img/6_salsa_bottle/2_salsa_bottle_on_ground.png'
    ];

    constructor(x = 0, bottleDirection = 1) {
        super();
        this.loadImage(this.images[bottleDirection]);
        this.loadImages(this.images);
        this.x = x;
        this.y = this.groundZero - this.height;
    }

    collect() {
        if (this.collected) return;
        this.collected = true;
        // start rising + rotating animation (smooth)
        this.rotating = true;
        let animId = setInterval(() => {
            this.y -= 6;
            this.rotation += 0.4;
        }, 1000 / 60);
        this.intervalIDs.push(animId);

        // stop internal intervals after a short time to avoid leaked timers
        setTimeout(() => {
            this.intervalIDs.forEach(id => clearInterval(id));
            this.intervalIDs = [];
            this.rotating = false;
        }, 800);
    }

    drawMovableObject(ctx) {
        if (this.rotating) {
            ctx.save();
            const cx = this.x + this.width / 2;
            const cy = this.y + this.height / 2;
            ctx.translate(cx, cy);
            ctx.rotate(this.rotation);
            ctx.drawImage(this.img, -this.width / 2, -this.height / 2, this.width, this.height);
            ctx.restore();
        } else {
            super.drawMovableObject(ctx);
        }
    }



}
