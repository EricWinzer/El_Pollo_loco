class BackgroundObject extends DrawableObject {

    height = 480;
    width = 720;

    constructor(imagePath, x = 0) {
        super();
        this.loadImage(imagePath);
        this.x = x;
        this.y = canvas.height - this.height;

    }





}
