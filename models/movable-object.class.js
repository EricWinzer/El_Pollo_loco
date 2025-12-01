class MovableObject extends DrawableObject {
    x = 180;
    y = 190;
    img;
    height = 250;
    width = 120;

    constructor(imgPath) {
        super();
        this.img = new Image(imgPath);
    }

    moveRight() {
        console.log('move right');
    }

    moveLeft() {
        console.log('move left');
    }

    jump() {
        console.log('jump');
    }





    setStoppableInterval(func, time) {
        let id = setInterval(func, time);
        this.intervalIDs.push(id);
        return id;
    }

}
