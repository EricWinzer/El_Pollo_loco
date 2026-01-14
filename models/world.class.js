class World {
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    character;
    statusbarHealth;
    statusbarCoin;
    statusbarBottle;
    statusbarEndboss;
    flyingSalsaBottle = [];
    level;
    lastTime = 0;
    gameStarted = false;
    startImage = new Image();


    constructor(canvas, keyboard, level = level1) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.keyboard = keyboard;
        this.level = level;
        this.camera_x = 0;
        this.lastTime = 0;

        this.startImage.src = '../assets/img/9_intro_outro_screens/start/startscreen_1.png';


        // Character
        this.character = new Character();
        this.character.world = this; // sehr wichtig

        // Statusbars
        this.statusbarHealth = new StatusbarHealth();
        this.statusbarCoin = new StatusbarCoin();
        this.statusbarBottle = new StatusbarBottle();
        this.statusbarEndboss = new StatusbarEndbossHealth();

        // Enemies Welt zuweisen
        this.level.enemies.forEach(enemy => {
            enemy.world = this;
            enemy.initEndboss?.();
        });

        window.addEventListener('keydown', () => {
            if (!this.gameStarted) {
                this.startGame();
            }
        }, { once: true });

        requestAnimationFrame(this.gameLoop.bind(this));
    }

    startGame() {
        this.gameStarted = true;
        this.lastTime = Date.now();
    }

    gameLoop(time) {
        if (!this.gameStarted) {
            this.drawStartScreen();
            requestAnimationFrame(this.gameLoop.bind(this));
            return;
        }
        const intervalTime = time - this.lastTime;
        this.lastTime = time;

        this.update(intervalTime);
        this.draw();

        requestAnimationFrame(this.gameLoop.bind(this));
    }

    update(intervalTime) {
        this.character.update(intervalTime);
        this.flyingSalsaBottle.forEach(b => b.update(intervalTime));
        this.level.enemies.forEach(e => e.update?.(intervalTime));
        this.level.bottles.forEach(bottle => bottle.update?.(intervalTime));
        this.checkEndbossActivation();
        this.checkCollisions();
        this.cleanupObjects();
    }

    checkCollisions() {
        this.level.enemies.forEach(enemy => {
            if (this.character.isColliding(enemy) && enemy.state !== 'dead' && !enemy.isEndboss()) {
                if (this.character.isFallingOnEnemy(enemy)) {
                    enemy.energy = Math.max(enemy.energy - 5, 0);
                    this.character.speedY = 10;
                } else if (!this.character.isFallingOnEnemy(enemy)) {
                    this.character.hit();
                    this.statusbarHealth.setPercentage(this.character.energy);
                }
            }
        }
        );

        this.level.coins = this.level.coins.filter(coin => {
            if (this.character.isColliding(coin)) {
                this.character.collecting(coin);
                this.statusbarCoin.setPercentage(this.character.coins);
                return false;
            }
            return true;
        });


        this.level.bottles = this.level.bottles.filter(bottle => {
            if (this.character.isColliding(bottle)) {
                bottle.collect();
                this.character.collecting(bottle);
                this.statusbarBottle.setPercentage(this.character.bottles);
                return false;
            }
            return true;
        });

        this.flyingSalsaBottle.forEach(bottle => {
            this.level.enemies.forEach(enemy => {
                if (bottle.isColliding(enemy) && !bottle.exploded && enemy.state !== 'dead') {
                    bottle.explode();
                    enemy.hit?.();
                }
            });
        });
    }


    cleanupObjects() {
        this.flyingSalsaBottle = this.flyingSalsaBottle.filter(b => !b.remove);
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.save();
        this.ctx.translate(this.camera_x, 0);

        this.level.backgroundObjects.forEach(obj => obj.draw(this.ctx));
        this.level.clouds.forEach(obj => obj.draw(this.ctx));
        this.level.enemies.forEach(obj => obj.draw(this.ctx));
        this.level.coins.forEach(obj => obj.draw(this.ctx));
        this.level.bottles.forEach(obj => obj.draw(this.ctx));
        this.flyingSalsaBottle.forEach(obj => obj.draw(this.ctx));

        this.character.draw(this.ctx);
        this.ctx.restore();

        this.drawStatusBars();
    }

    drawStatusBars() {
        this.statusbarHealth.draw(this.ctx);
        this.statusbarCoin.draw(this.ctx);
        this.statusbarBottle.draw(this.ctx);
        this.statusbarEndboss.draw?.(this.ctx);
        if (enemy.isEndboss()) {
            this.statusbarEndboss.draw(this.ctx);
        }

    }

    drawStartScreen() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.drawImage(
            this.startImage,
            0,
            0,
            this.canvas.width,
            this.canvas.height
        );
    }

    checkEndbossActivation() {
        const endboss = this.level.enemies.find(e => e instanceof Endboss);
        if (!endboss || endboss.activated) return;

        const triggerX =
            this.level.level_end_x - endboss.activationDistance;

        if (-this.camera_x >= triggerX) {
            endboss.activated = true;
            endboss.state = 'alerted';
            this.statusbarEndboss.setPercentage(endboss.energy);
        }
    }





}

