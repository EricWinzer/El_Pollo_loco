class DrawableObject {
    img;
    currentImage = 0;
    imageCache = {};

    x = 0;
    y = 0;
    height = 220;
    width = 100;

    groundZero = 440; // y position on ground
    collected = false;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    drawMovableObject(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken || this instanceof Endboss) {
            ctx.beginPath();
            ctx.lineWidth = '0';
            ctx.strokeStyle = 'transparent';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }


    draw(ctx) {
        if (this.otherDirection) {
            ctx.save();
            ctx.translate(this.x + this.width, 0);
            ctx.scale(-1, 1);
            ctx.drawImage(this.img, 0, this.y, this.width, this.height);
            ctx.restore();
        } else {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        }

        this.drawFrame?.(ctx);
    }



}
