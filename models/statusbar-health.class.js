class StatusbarHealth extends DrawableObject {
    x = 20;
    y = 0;
    height = 60;
    width = 200;
    percentage = 100;

    images = [
        '../assets/img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png',
        '../assets/img/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png',
        '../assets/img/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png',
        '../assets/img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png',
        '../assets/img/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png',
        '../assets/img/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png'
    ];


    constructor() {
        super();
        this.loadImage(this.images[5]);
        this.loadImages(this.images);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.images[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.percentage >= 80) {
            return 5;
        } else if (this.percentage >= 60) {
            return 4;
        } else if (this.percentage >= 40) {
            return 3;
        } else if (this.percentage >= 20) {
            return 2;
        } else if (this.percentage > 0) {
            return 1;
        } else {
            return 0;
        }

    }



}
