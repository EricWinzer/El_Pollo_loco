class StatusbarEndbossHealth extends DrawableObject {
    x = 500;
    y = 0;
    height = 60;
    width = 200;
    percentage = 100;

    images = [
        '../assets/img/7_statusbars/2_statusbar_endboss/orange/orange0.png',
        '../assets/img/7_statusbars/2_statusbar_endboss/orange/orange20.png',
        '../assets/img/7_statusbars/2_statusbar_endboss/orange/orange40.png',
        '../assets/img/7_statusbars/2_statusbar_endboss/orange/orange60.png',
        '../assets/img/7_statusbars/2_statusbar_endboss/orange/orange80.png',
        '../assets/img/7_statusbars/2_statusbar_endboss/orange/orange100.png'
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
