/**
 * Created by Administrator on 2015/4/7.
 */
module lizhi {

    export class ScorePanel extends egret.Sprite {

        private message:egret.TextField;
        private score:egret.TextField;
        private retry:egret.Bitmap;
        private share:egret.Bitmap;
        private description:egret.Bitmap;

        public constructor() {
            super();
            this.width = getWidth();
            this.height = getHeight();
            this.retry = lizhi.createBitmapByName("retry");
            this.retry.x = (lizhi.getWidth()-this.retry.width)/2 - 160;
            this.retry.y = (lizhi.getHeight()-this.retry.height)/2 + 240;
            this.addChild(this.retry);

            this.share = lizhi.createBitmapByName("share");
            this.share.x = (lizhi.getWidth()-this.share.width)/2 + 160;
            this.share.y = (lizhi.getHeight()-this.share.height)/2 + 240;
            this.addChild(this.share);


            this.description = lizhi.createBitmapByName("description_3");
            this.description.x = (lizhi.getWidth()-this.description.width)/2;
            this.description.y = (lizhi.getHeight()-this.description.height)/2 -240;
            this.addChild(this.description);

            this.score = new egret.TextField();
            this.score.textColor = 0xfee60e;
            this.score.size = 52;
            this.score.textAlign = egret.HorizontalAlign.CENTER;
            this.score.verticalAlign = egret.VerticalAlign.MIDDLE;
            //设置描边属性
            this.score.strokeColor = 0x883216;
            this.score.width = getWidth();
            this.score.stroke = 3;
            this.score.x = 10;
            this.score.y = (getHeight()-this.score.height)/2 - 260;
            this.score.text = "0";
            this.score.fontFamily = "幼圆";
            this.score.bold = true;
            this.addChild(this.score);

            this.message = new egret.TextField();
            this.message.textColor = 0xFFFFFF;
            this.message.size = 32;
            this.message.textAlign = egret.HorizontalAlign.CENTER;
            this.message.verticalAlign = egret.VerticalAlign.MIDDLE;
            //设置描边属性
            this.message.strokeColor = 0x833314;
            this.message.width = getWidth()/1.5;
            this.message.stroke = 3;
            this.message.x = 120;
            this.message.y = (getHeight()-this.message.height)/2;
            this.message.text = "想成为荔枝达人还得眼细手快些哦，再试一次吧~~~";
            this.message.fontFamily = "幼圆";
            this.message.bold = true;
            this.addChild(this.message);
        }


        public changeMessage(msg:string) {
            this.message.text = msg;
        }
    }
}