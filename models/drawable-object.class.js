class DrawableObject {
    intervalIDs;
    currentImage = 0;
    imageCache = {};

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

    stopGame() {
        this.intervalIDs.forEach(id => clearInterval(id));
    }

}
