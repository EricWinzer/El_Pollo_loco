class MovableObject extends DrawableObject {
    x = 180;
    y = 190;
    img;
    height = 250;
    width = 120;
    speed = 0.15;
    speedY = 0;
    acceleration = 2.5;
    otherDirection = false;
    energy = 100;
    lastHit = 0;

    constructor(imgPath) {
        super();
        this.img = new Image(imgPath);
    }

    moveRight() {
        console.log('move right');
    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }

    jump() {
        console.log('jump');
    }


    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }


    setStoppableInterval(func, time) {
        let id = setInterval(func, time);
        this.intervalIDs.push(id);
        return id;
    }

}
