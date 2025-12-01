class DrawableObject {
    intervalIDs;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }



    stopGame() {
        this.intervalIDs.forEach(id => clearInterval(id));
    }

}
