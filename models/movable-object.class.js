class MovableObject extends DrawableObject {
    speedX = 0.15;
    speedY = 0;
    acceleration = 2.5;
    gravity = true;
    gravityStarted = false;

    otherDirection = false;

    energy = 100;
    lastHit = 0;
    coins = 0;
    bottles = 0;
    standardSpeedX;;

    constructor(imgPath) {
        super();
        this.img = new Image(imgPath);
    }

    applyGravity(intervalTime) {
        if (!this.gravity) return;
        if (this.isAboveGround() || this.speedY > 0) {
            this.y -= this.speedY * intervalTime * 0.01;
            this.speedY -= this.acceleration * intervalTime * 0.01;
        }
    }

    update(intervalTime) {
        this.applyGravity(intervalTime);
        this.x += this.speedX * intervalTime * 0.05;
    }

    isAboveGround() {
        return this.y < this.groundZero - this.height;
    }


    jump() {
        this.speedY = 30;
    }

    throw(x, y) {
        this.x = x;
        this.y = y;
        this.speedY = 10;
        this.applyGravity(100);
        this.x += 10;
    }

    collecting(itemCollected) {
        if (!itemCollected) return;
        const ctor = itemCollected.constructor ? itemCollected.constructor.name : null;
        if (ctor === 'Coin') {
            this.coins++;
        } else if (ctor === 'Bottle') {
            this.bottles += 10;
        }
    }

    countingThrownObject() {
        this.bottles--;
        if (this.bottles < 0) {
            this.bottles = 0;
        }
    }


    hit() {
        if (this.character.isColliding(enemy) && !this.character.isHurt()) {
            this.character.hit();
        }
    }

    isHurt() {
        let timePassed = Date.now() - this.lastHit;
        return timePassed < 1000;
    }

    isDead() {
        return this.energy == 0;
    }

    isLongIdle(idleTime) {
        let idleTimePassed = Date.now() - idleTime;
        return idleTimePassed > 2000;
    }

    isColliding(movableObject) {
        return this.x + this.width > movableObject.x &&
            this.y + this.height > movableObject.y &&
            this.x < movableObject.x + movableObject.width &&
            this.y < movableObject.y + movableObject.height;
    }

    isFallingOnEnemy(movableObject) {
        return this.speedY < 0 && (this.y + this.height <= movableObject.y + movableObject.height / 2);

    }

    isEndboss() {
        return this instanceof Endboss;
    }

}
