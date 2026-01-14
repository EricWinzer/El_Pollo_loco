class ThrowableObject extends MovableObject {
    x = 300;
    y = 200;
    width = 75;
    height = 75;
    acceleration = 1.0;
    exploded = false;
    explosionTimer = 0;


    imagesRotating = [
        '../assets/img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        '../assets/img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        '../assets/img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        '../assets/img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'
    ]

    imagesExploding = [
        '../assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        '../assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        '../assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        '../assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        '../assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        '../assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png'
    ]

    constructor() {
        super();
        this.loadImage(this.imagesRotating[0]);
        this.loadImages(this.imagesRotating);
        this.loadImages(this.imagesExploding);
    }

    update(intervalTime) {
        if (this.exploded) {
            this.animateExplosion(intervalTime);
            return;
        }

        super.update(intervalTime);

        if (this.isAboveGround()) {
            this.explode();
        }
    }

    explode() {
        this.exploded = true;
        this.speedX = 0;
        this.speedY = 0;
        this.currentImage = 0;
    }

    animateExplosion(intervalTime) {
        this.explosionTimer += intervalTime;
        if (this.explosionTimer > 80) {
            this.playAnimation(this.imagesExploding);
            this.explosionTimer = 0;
        }
    }
}
