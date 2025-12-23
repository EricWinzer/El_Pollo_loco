class MovableObject extends DrawableObject {
    speed = 0.15;
    speedY = 0;
    acceleration = 2.5;
    otherDirection = false;
    energy = 100;
    lastHit = 0;
    coins = 0;
    bottles = 0;

    constructor(imgPath) {
        super();
        this.img = new Image(imgPath);
    }

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }



    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        } else {
            return this.y < 220;
        }
    }


    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    jump() {
        this.speedY = 30;
    }

    throw(x, y) {
        this.x = x;
        this.y = y;
        this.speedY = 10;
        this.applyGravity();
        setInterval(() => {
            this.x += 10;
        }, 25);
    }

    collecting(itemCollected) {
        if (!itemCollected) return;
        const ctor = itemCollected.constructor ? itemCollected.constructor.name : null;
        if (ctor === 'Coin') {
            this.coins++;
        } else if (ctor === 'Bottle') {
            this.bottles++;
        }
    }

    throwObject() {
        this.bottles--;
        if (this.bottles < 0) {
            this.bottles = 0;
        }
    }


    hit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        }
        this.lastHit = new Date().getTime();
    }

    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit;
        return timePassed < 1000;
    }

    isDead() {
        return this.energy == 0;
    }

    isLongIdle(idleTime) {
        let idleTimePassed = new Date().getTime() - idleTime;
        return idleTimePassed > 2000;
    }

    isColliding(movableObject) {
        return this.x + this.width > movableObject.x &&
            this.y + this.height > movableObject.y &&
            this.x < movableObject.x + movableObject.width &&
            this.y < movableObject.y + movableObject.height;
    }

    setStoppableInterval(func, time) {
        let id = setInterval(func, time);
        this.intervalIDs.push(id);
        return id;
    }

}
