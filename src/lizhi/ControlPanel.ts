/**
 * Created by Administrator on 2015/4/7.
 */
module lizhi {

    export class ControlPanel extends egret.Sprite {

        private time:egret.Bitmap;
        private timeCount:egret.TextField;
        private sound:egret.Bitmap;
        private score:egret.TextField;

        public constructor() {
            super();
            this.createControlPanel();
        }

        private createControlPanel() {
            this.width = getWidth();
            this.height = getHeight();
            this.time = createBitmapByName("time");
            this.sound = createBitmapByName("sound");

            this.time.x = (getWidth()-this.time.width)/2 - 250;
            this.time.y = (getHeight()-this.time.height)/2 - 400;
            this.sound.x = (getWidth()-this.sound.width)/2 + 250;
            this.sound.y = (getHeight()-this.sound.height)/2 - 400;
            this.addChild(this.time);
            this.addChild(this.sound);

            this.timeCount = new egret.TextField();
            this.timeCount.textAlign = "center";
            this.timeCount.textColor = 0xFFFFFF;
            this.timeCount.size = 48;
            this.timeCount.x = (getWidth()-this.timeCount.width)/2 - 200;
            this.timeCount.y = (getHeight()-this.timeCount.height)/2 - 420;
            this.timeCount.text = "30";
            this.addChild(this.timeCount);


            this.score = new egret.TextField();
            this.score.textColor = 0xFFFFFF;
            this.score.size = 52;
            this.score.textAlign = egret.HorizontalAlign.CENTER;
            this.score.verticalAlign = egret.VerticalAlign.MIDDLE;
            //设置描边属性
            this.score.strokeColor = 0x833314;
            this.score.width = getWidth();
            this.score.stroke = 3;
            this.score.x = 0;
            this.score.y = (getHeight()-this.score.height)/2 - 320;
            this.score.text = "荔枝数:0";
            this.score.fontFamily = "幼圆";
            this.score.bold = true;
            this.addChild(this.score);

        }

        public changeScore(score:number) {
            var msg = "荔枝数:";
            this.score.text = msg + score;
        }

        public changeTime(time:number) {
            this.timeCount.text = time.toString();
        }
    }
}