class Character extends MovableObject {

    x = 180;
    y = 220;

    world;
    standardSpeedX = 10;
    idleTime = 0;
    lastThrowTime = 0;
    animationTimer = 0;

    imagesIdle = [
        '../assets/img/2_character_pepe/1_idle/idle/I-1.png',
        '../assets/img/2_character_pepe/1_idle/idle/I-2.png',
        '../assets/img/2_character_pepe/1_idle/idle/I-3.png',
        '../assets/img/2_character_pepe/1_idle/idle/I-4.png',
        '../assets/img/2_character_pepe/1_idle/idle/I-5.png',
        '../assets/img/2_character_pepe/1_idle/idle/I-6.png',
        '../assets/img/2_character_pepe/1_idle/idle/I-7.png',
        '../assets/img/2_character_pepe/1_idle/idle/I-8.png',
        '../assets/img/2_character_pepe/1_idle/idle/I-9.png',
        '../assets/img/2_character_pepe/1_idle/idle/I-10.png'
    ];

    imagesLongIdle = [
        '../assets/img/2_character_pepe/1_idle/long_idle/I-11.png',
        '../assets/img/2_character_pepe/1_idle/long_idle/I-12.png',
        '../assets/img/2_character_pepe/1_idle/long_idle/I-13.png',
        '../assets/img/2_character_pepe/1_idle/long_idle/I-14.png',
        '../assets/img/2_character_pepe/1_idle/long_idle/I-15.png',
        '../assets/img/2_character_pepe/1_idle/long_idle/I-16.png',
        '../assets/img/2_character_pepe/1_idle/long_idle/I-17.png',
        '../assets/img/2_character_pepe/1_idle/long_idle/I-18.png',
        '../assets/img/2_character_pepe/1_idle/long_idle/I-19.png',
        '../assets/img/2_character_pepe/1_idle/long_idle/I-20.png'
    ];

    imagesWalking = [
        '../assets/img/2_character_pepe/2_walk/W-21.png',
        '../assets/img/2_character_pepe/2_walk/W-22.png',
        '../assets/img/2_character_pepe/2_walk/W-23.png',
        '../assets/img/2_character_pepe/2_walk/W-24.png',
        '../assets/img/2_character_pepe/2_walk/W-25.png',
        '../assets/img/2_character_pepe/2_walk/W-26.png'
    ];

    imagesJumping = [
        '../assets/img/2_character_pepe/3_jump/J-31.png',
        '../assets/img/2_character_pepe/3_jump/J-32.png',
        '../assets/img/2_character_pepe/3_jump/J-33.png',
        '../assets/img/2_character_pepe/3_jump/J-34.png',
        '../assets/img/2_character_pepe/3_jump/J-35.png',
        '../assets/img/2_character_pepe/3_jump/J-36.png',
        '../assets/img/2_character_pepe/3_jump/J-37.png',
        '../assets/img/2_character_pepe/3_jump/J-38.png',
        '../assets/img/2_character_pepe/3_jump/J-39.png'
    ];

    imagesHurt = [
        '../assets/img/2_character_pepe/4_hurt/H-41.png',
        '../assets/img/2_character_pepe/4_hurt/H-42.png',
        '../assets/img/2_character_pepe/4_hurt/H-43.png'
    ];

    imagesDead = [
        '../assets/img/2_character_pepe/5_dead/D-51.png',
        '../assets/img/2_character_pepe/5_dead/D-52.png',
        '../assets/img/2_character_pepe/5_dead/D-53.png',
        '../assets/img/2_character_pepe/5_dead/D-54.png',
        '../assets/img/2_character_pepe/5_dead/D-55.png',
        '../assets/img/2_character_pepe/5_dead/D-56.png',
        '../assets/img/2_character_pepe/5_dead/D-57.png'
    ];

    constructor() {
        super();
        this.energy = 100;
        this.speedX = 0;
        this.speedY = 0;
        this.idleTime = Date.now();
        this.loadImage(this.imagesIdle[0]);
        this.loadImages(this.imagesIdle);
        this.loadImages(this.imagesLongIdle);
        this.loadImages(this.imagesWalking);
        this.loadImages(this.imagesJumping);
        this.loadImages(this.imagesHurt);
        this.loadImages(this.imagesDead);
    }


    update(intervalTime) {
        this.handleMovement();
        super.update?.(intervalTime);
        this.animate(intervalTime);
    }

    handleMovement() {
        if (!this.world?.keyboard) return;
        this.speedX = 0;

        // Bewegung nur bei Tastendruck
        if (this.world.keyboard.right && this.x + this.width < this.world.level.level_end_x) {
            this.speedX = this.standardSpeedX;
            this.speedX = 0;
            this.otherDirection = false;
        } else if (this.world.keyboard.left && this.x > 0) {
            this.speedX = -this.standardSpeedX;
            this.speedX = 0;
            this.otherDirection = true;
        }

        if (this.world.keyboard.space && !this.isAboveGround()) {
            this.jump();
        }

        // Throw-Action
        if (this.world.keyboard.throw && this.bottles > 0 && Date.now() - this.lastThrowTime > 500) {
            this.lastThrowTime = Date.now();
            this.bottles--;
            this.world.statusbarBottle?.setPercentage(this.bottles);

            let bottle = new ThrowableObject();
            bottle.world = this.world;
            let startX = this.otherDirection ? this.x - 20 : this.x + 50;
            let startY = this.y + 50;
            bottle.throw(startX, startY);
            this.world.flyingSalsaBottle.push(bottle);
        }

        // Kamera
        this.world.camera_x = -this.x + 100;

        // Idle-Timer zurücksetzen
        if (this.world.keyboard.right || this.world.keyboard.left || this.world.keyboard.space || this.world.keyboard.throw || this.isAboveGround()) {
            this.idleTime = Date.now();
        }
    }

    animate(intervalTime) {
        this.animationTimer += intervalTime;
        if (this.animationTimer < 120) return;

        if (this.isDead()) this.playAnimation(this.imagesDead);
        else if (this.isHurt()) this.playAnimation(this.imagesHurt);
        else if (this.isAboveGround()) this.playAnimation(this.imagesJumping);
        else if (this.speedX !== 0) this.playAnimation(this.imagesWalking);
        else if (this.isLongIdle(this.idleTime)) this.playAnimation(this.imagesLongIdle);
        else this.playAnimation(this.imagesIdle);

        this.animationTimer = 0;
    }

    hit() {
        const now = Date.now();
        // nur 1 Treffer pro Sekunde
        if (now - this.lastHit > 500) {
            this.energy = Math.max(0, this.energy - 5);
            this.lastHit = now;
        }
    }
}
