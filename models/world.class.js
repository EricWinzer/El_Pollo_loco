class World {
    canvas;
    ctx;

    character = new Character();
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken()

    ];

    clouds = [
        new Cloud('../assets/img/5_background/layers/4_clouds/1.png'),
        new Cloud('../assets/img/5_background/layers/4_clouds/2.png', 350)
    ];

    backgroundObjects = [
        new BackgroundObject('../assets/img/5_background/layers/air.png'),
        new BackgroundObject('../assets/img/5_background/layers/3_third_layer/1.png'),
        new BackgroundObject('../assets/img/5_background/layers/2_second_layer/1.png'),
        new BackgroundObject('../assets/img/5_background/layers/1_first_layer/1.png')
    ];


    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();

    }


    draw() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

        this.addObjectsToMap(this.backgroundObjects);
        this.addObjectsToMap(this.enemies);
        this.addObjectsToMap(this.clouds);
        this.addToMap(this.character);

        self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }


    addToMap(MovableObject) {
        this.ctx.drawImage(MovableObject.img, MovableObject.x, MovableObject.y, MovableObject.width, MovableObject.height);
    }

    addObjectsToMap(objects) {
        objects.forEach(object => {
            this.addToMap(object);
        });
    }

}
