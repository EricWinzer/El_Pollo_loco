class World {
    canvas;
    ctx;
    keyboard;
    camera_x = 0;

    character = new Character();
    level = level1;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();

    }

    setWorld() {
        this.character.world = this;
        this.character.initAnimation();

        this.level.enemies.forEach(enemy => {
            enemy.world = this;
            if (enemy.initEndboss) {
                enemy.initEndboss();
            }
        });
    }


    draw() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.clouds);
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
            this.ctx.drawImage(movableObject.img, movableObject.x, movableObject.y, movableObject.width, movableObject.height);
        }
    }

    flipImage(movableObject) {
        this.ctx.save();
        this.ctx.translate(movableObject.x + movableObject.width, 0);
        this.ctx.scale(-1, 1);
    }

    flipImageBack(movableObject) {
        this.ctx.restore();
    }

}
