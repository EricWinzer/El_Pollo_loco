class Endboss extends MovableObject {

    height = 300;
    width = 200;
    /*
        y = canvas.height - this.height - 35;
     */
    standardSpeedX = 0.6;
    energy = 100;

    state = 'idle'; // idle | alerted | attacking | hurt | dead
    animationTimer = 0;

    activated = false;
    activationDistance = 400; // Abstand vom Level-Ende


    imagesWalking = [
        '../assets/img/4_enemie_boss_chicken/1_walk/G1.png',
        '../assets/img/4_enemie_boss_chicken/1_walk/G2.png',
        '../assets/img/4_enemie_boss_chicken/1_walk/G3.png',
        '../assets/img/4_enemie_boss_chicken/1_walk/G4.png'
    ];

    imagesAlerted = [
        '../assets/img/4_enemie_boss_chicken/2_alert/G5.png',
        '../assets/img/4_enemie_boss_chicken/2_alert/G6.png',
        '../assets/img/4_enemie_boss_chicken/2_alert/G7.png',
        '../assets/img/4_enemie_boss_chicken/2_alert/G8.png',
        '../assets/img/4_enemie_boss_chicken/2_alert/G9.png',
        '../assets/img/4_enemie_boss_chicken/2_alert/G10.png',
        '../assets/img/4_enemie_boss_chicken/2_alert/G11.png',
        '../assets/img/4_enemie_boss_chicken/2_alert/G12.png'
    ];

    imagesAttacking = [
        '../assets/img/4_enemie_boss_chicken/3_attack/G13.png',
        '../assets/img/4_enemie_boss_chicken/3_attack/G14.png',
        '../assets/img/4_enemie_boss_chicken/3_attack/G15.png',
        '../assets/img/4_enemie_boss_chicken/3_attack/G16.png',
        '../assets/img/4_enemie_boss_chicken/3_attack/G17.png',
        '../assets/img/4_enemie_boss_chicken/3_attack/G18.png',
        '../assets/img/4_enemie_boss_chicken/3_attack/G19.png',
        '../assets/img/4_enemie_boss_chicken/3_attack/G20.png'
    ];

    imagesHurt = [
        '../assets/img/4_enemie_boss_chicken/4_hurt/G21.png',
        '../assets/img/4_enemie_boss_chicken/4_hurt/G22.png',
        '../assets/img/4_enemie_boss_chicken/4_hurt/G23.png'
    ];

    imagesDead = [
        '../assets/img/4_enemie_boss_chicken/5_dead/G24.png',
        '../assets/img/4_enemie_boss_chicken/5_dead/G25.png',
        '../assets/img/4_enemie_boss_chicken/5_dead/G26.png'
    ];

    constructor() {
        super();

        this.loadImage(this.imagesAlerted[0]);
        this.loadImages(this.imagesAlerted);
        this.loadImages(this.imagesAttacking);
        this.loadImages(this.imagesHurt);
        this.loadImages(this.imagesDead);
        this.loadImages(this.imagesWalking);
    }

    initEndboss() {
        this.x = this.world.level.level_end_x - this.width;
        this.y = this.world.character.groundZero - this.height;

        this.state = 'idle';
        this.activated = false;
        this.speedX = 0;
    }


    update(deltaTime) {
        if (!this.activated) return;

        if (this.state === 'dead') {
            this.updateDead(deltaTime);
            return;
        }

        this.handleState(deltaTime);
        super.update(deltaTime);
    }


    handleState(deltaTime) {
        switch (this.state) {
            case 'idle':
                this.animate(this.imagesWalking, deltaTime, 250);
                break;

            case 'alerted':
                this.animate(this.imagesAlerted, deltaTime, 180);
                this.moveTowardsCharacter();
                break;

            case 'attacking':
                this.animate(this.imagesAttacking, deltaTime, 120);
                break;

            case 'hurt':
                this.animate(this.imagesHurt, deltaTime, 150);
                break;
        }
    }

    animate(images, deltaTime, speed) {
        this.animationTimer += deltaTime;
        if (this.animationTimer > speed) {
            this.playAnimation(images);
            this.animationTimer = 0;
        }
    }

    moveTowardsCharacter() {
        if (!this.world?.character) return;

        if (this.world.character.x < this.x) {
            this.speedX = -this.standardSpeedX;
        } else {
            this.speedX = this.standardSpeedX;
        }
    }

    hit() {
        if (this.state === 'dead') return;

        this.energy -= 10;

        if (this.energy <= 0) {
            this.die();
        } else {
            this.state = 'hurt';
            this.animationTimer = 0;
        }
    }

    die() {
        this.state = 'dead';
        this.speedX = 0;
        this.speedY = 0;
        this.currentImage = 0;
        this.loadImage(this.imagesDead[0]);
    }

    updateDead(deltaTime) {
        this.animate(this.imagesDead, deltaTime, 200);
    }


}
