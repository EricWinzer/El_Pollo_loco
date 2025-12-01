class Cloud extends MovableObject {

    y = 0;
    height = 250;
    width = 360;

    constructor(imagePath, x = 0) {
        super();
        this.x = x;
        this.loadImage(imagePath);
        this.animate();


    }

    animate() {
        setInterval(() => {
            this.x -= 0.15;
        }, 1000 / 60);
    }



}
