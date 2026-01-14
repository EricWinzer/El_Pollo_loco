class Chicken extends MovableObject {

    y = 370;
    height = 60;
    width = 80;
    standardSpeedX = 1;
    energy = 5;
    state = 'alive';
    animationTimer = 0;
    tickerTimer = 200;

    imagesWalking = [
        '../assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        '../assets/img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        '../assets/img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];

    imagesDead = [
        '../assets/img/3_enemies_chicken/chicken_normal/2_dead/dead.png'
    ];

    constructor(startX, spreading) {
        super();
        this.loadImage(this.imagesWalking[0]);
        this.loadImages(this.imagesWalking);
        this.loadImages(this.imagesDead);

        this.x = startX * Math.random() + spreading;
        this.speedX = this.speedX + Math.random() * 0.25;
    }

    update(intervalTime) {
        if (this.state === 'dead') {
            return;
        }

        this.updateWalking(intervalTime);
        super.update(intervalTime);
    }


    updateWalking(intervalTime) {
        this.speedX = -this.standardSpeedX;
        this.animationTimer += intervalTime;

        if (this.animationTimer > this.tickerTimer) {
            this.playAnimation(this.imagesWalking);
            this.animationTimer = 0;
        }

        if (this.isDead() && this.state !== 'dead') {
            this.playAnimation(this.imagesDead);
            this.state = 'dead';
        }
    }

    hit() {
        if (this.state === 'dead') return;

        this.energy -= 5;

        if (this.energy <= 0) {
            this.state = 'dead';
            this.speedX = 0;
            this.currentImage = 0;
            this.loadImage(this.imagesDead[0]);
        }
    }


    updateDead(intervalTime) {
        this.playAnimation(this.imagesDead);
    }

}
