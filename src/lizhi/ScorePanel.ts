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
        private banner:egret.Bitmap;
        private msg:string;

        public constructor() {
            super();
            this.width = getWidth();
            this.height = getHeight();
            this.retry = lizhi.createBitmapByName("retry");
            this.retry.x = (lizhi.getWidth()-this.retry.width)/2 - 160;
            this.retry.y = (lizhi.getHeight()-this.retry.height)/2 + 140;
            this.retry.touchEnabled = true;//开启触碰
            this.retry.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onRetry,this);//点击按钮重新游戏
            this.addChild(this.retry);

            this.share = lizhi.createBitmapByName("share");
            this.share.x = (lizhi.getWidth()-this.share.width)/2 + 160;
            this.share.y = (lizhi.getHeight()-this.share.height)/2 + 140;
            this.share.touchEnabled = true;//开启触碰
            this.share.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onShare,this);//点击按钮分享游戏
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
            this.score.x = 20;
            this.score.y = (getHeight()-this.score.height)/2 - 260;
            this.score.text = "0";
            this.score.fontFamily = "微软雅黑";
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
            this.message.y = (getHeight()-this.message.height)/2 - 80;
            this.message.text = "想成为荔枝达人还得眼细手快些哦,再试一次吧~~~";
            this.message.fontFamily = "幼圆";
            this.message.bold = true;
            this.addChild(this.message);

            this.banner = createBitmapByName("banner" + this.oneThird());
            this.banner.x = (lizhi.getWidth()-this.banner.width)/2;
            this.banner.y = lizhi.getHeight() - this.banner.height;
            this.banner.touchEnabled = true;//开启触碰
            this.banner.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onOpen,this);//点击按钮分享游戏
            this.addChild(this.banner);
        }

        public onRetry() {
            this.dispatchEventWith("retryGame");
        }

        private onShare() {
            if(Data.score >=0 && Data.score <= 19) {
                share(this.shareMsg((10*Math.random()).toFixed(2)));
            } else if (Data.score <= 39) {
                share(this.shareMsg((50-10*Math.random()).toFixed(2)));
            } else if (Data.score <= 49) {
                share(this.shareMsg((75-10*Math.random()).toFixed(2)));
            } else if (Data.score >= 50) {
                share(this.shareMsg((90-10*Math.random()).toFixed(2)));
            } else {
                share(this.shareMsg((100-10*Math.random()).toFixed(2)));
            }
        }

        private shareMsg(n:string):string {
            var msg = "我在《荔枝达人》中摘得" + Data.score + "颗荔枝，击败了" + n + "%的人，不服来战！";
            return msg;
        }

        private onOpen() {
            openLink();
        }


        public changeMessage(msg:string) {
            this.msg = msg;
            this.message.text = msg;
        }

        public changeScore(score:number) {
            this.score.text = score.toString();
        }

        private oneThird():number {
            return Math.floor(Math.random()*3+1);
        }
    }
}