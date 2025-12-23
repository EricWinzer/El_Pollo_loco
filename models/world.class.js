class World {
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    character = new Character();
    statusbarHealth = new StatusbarHealth();
    statusbarCoin = new StatusbarCoin();
    statusbarBottle = new StatusbarBottle();
    flyingSalsaBottle = [];
    level = level1;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.runTheAction();
    }

    setWorld() {
        this.character.world = this;
        this.character.initAnimation();

        this.flyingSalsaBottle.forEach(bottle => {
            bottle.world = this;
        });

        this.level.enemies.forEach(enemy => {
            enemy.world = this;
            if (enemy.initEndboss) {
                enemy.initEndboss();
            }
        });
    }

    runTheAction() {
        setInterval(() => {
            this.checkCollisionsCharacterWithEnemies();
            this.checkCollectingCoins();
            this.checkCollectiongBottles();
            this.checkCollisionsBottleWithEnemies();
        }, 200);
    }


    checkCollisionsCharacterWithEnemies() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusbarHealth.setPercentage(this.character.energy);
            }
        });
    }

    checkCollectingCoins() {
        this.level.coins.forEach((coin) => {
            if (this.character.isColliding(coin) && !coin.collected) {
                // start coin collect animation
                if (coin.collect) coin.collect();
                // increment player's coin count immediately
                this.character.collecting(coin);
                this.statusbarCoin.setPercentage(this.character.coins);

                // remove coin from level after animation completes
                setTimeout(() => {
                    const idx = this.level.coins.indexOf(coin);
                    if (idx > -1) this.level.coins.splice(idx, 1);
                }, 700);
            }
        });
    }

    checkCollectiongBottles() {
        this.level.bottles.forEach((bottle) => {
            if (this.character.isColliding(bottle) && !bottle.collected) {
                // start bottle collect animation if available
                if (bottle.collect) bottle.collect();
                // increment player's bottle count immediately
                this.character.collecting(bottle);
                this.statusbarBottle.setPercentage(this.character.bottles);

                // remove bottle from level after animation completes
                setTimeout(() => {
                    const idx = this.level.bottles.indexOf(bottle);
                    if (idx > -1) this.level.bottles.splice(idx, 1);
                }, 700);
            }
        });
    }

    checkCollisionsBottleWithEnemies() {
        this.level.enemies.forEach((enemy) => {
            this.flyingSalsaBottle.forEach((bottle, index) => {
                if (bottle.isColliding(enemy)) {
                    this.flyingSalsaBottle.splice(index, 1);
                    if (enemy.hit) enemy.hit();
                    this.statusbarBottle.setPercentage(this.character.bottles);
                }
            });
        });
    }

    draw() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.flyingSalsaBottle);
        this.fixPlaceForStatusBar();
        this.addToMap(this.character);

        this.ctx.translate(-this.camera_x, 0);

        self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(object => {
            this.addToMap(object);
        });
    }

    addToMap(movableObject) {
        if (movableObject.otherDirection) {
            this.flipImage(movableObject);
            this.ctx.drawImage(movableObject.img, 0, movableObject.y, movableObject.width, movableObject.height);
            this.flipImageBack(movableObject);
        } else {
            movableObject.drawMovableObject(this.ctx);
        }
        movableObject.drawFrame(this.ctx);
    }

    flipImage(movableObject) {
        this.ctx.save();
        this.ctx.translate(movableObject.x + movableObject.width, 0);
        this.ctx.scale(-1, 1);
    }

    flipImageBack(movableObject) {
        this.ctx.restore();
    }

    fixPlaceForStatusBar() {
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusbarHealth);
        this.addToMap(this.statusbarCoin);
        this.addToMap(this.statusbarBottle);
        this.ctx.translate(this.camera_x, 0);

    }


}
