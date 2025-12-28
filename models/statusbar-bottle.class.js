class StatusbarBottle extends DrawableObject {
    x = 100;
    y = 50;
    height = 70;
    width = 70;
    percentage = 0;


    constructor() {
        super();
        this.loadImage('../assets/img/7_statusbars/3_icons/icon_salsa_bottle.png');
    }

    setPercentage(percentage) {
        this.percentage = percentage;
    }

    drawMovableObject(ctx) {
        // draw icon
        if (this.img) {
            ctx.drawImage(this.img, this.x + 10, this.y + 10, this.width, this.height);
        }
        // draw number next to icon
        ctx.fillStyle = 'black';
        ctx.font = '40px Boogaloo';
        ctx.textAlign = 'left';
        ctx.fillText(this.percentage.toString(), this.x + this.width + 10, this.y + this.height - 10);
    }



}
