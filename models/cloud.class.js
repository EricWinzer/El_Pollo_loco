class Cloud extends MovableObject {

    y = 80;
    height = 250;
    width = 360;

    constructor(imagePath, x = 0) {
        super();
        this.x = x;
        this.loadImage(imagePath);
        this.animate();


    }

    animate() {
        this.moveLeft();
    }



}
