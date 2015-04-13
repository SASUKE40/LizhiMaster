/**
 * Created by Administrator on 2015/4/7.
 */
module lizhi {

    /**
     * 分數面板類
     */
    export class ScorePanel extends egret.Sprite {

        // 遊戲文本
        private message:egret.TextField;
        // 分數文本
        private score:egret.TextField;
        // 重試按鈕
        private retry:egret.Bitmap;
        // 分享按鈕
        private share:egret.Bitmap;
        // 分數框
        private description:egret.Bitmap;
        // 底部banner
        private banner:egret.Bitmap;
        // 遊戲信息
        private msg:string;
        // 百分比信息
        private percent:string;
        // 百分比文本
        private per:egret.TextField;

        public constructor() {
            super();
            // 設置當前精靈對象為屏幕大小
            this.width = getWidth();
            this.height = getHeight();

            // 重試按鈕
            this.retry = lizhi.createBitmapByName("retry");
            this.retry.x = (lizhi.getWidth()-this.retry.width)/2 - 160;
            this.retry.y = (lizhi.getHeight()-this.retry.height)/2 + 40;
            this.retry.touchEnabled = true;//开启触碰
            this.retry.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onRetry,this);//点击按钮重新游戏
            this.addChild(this.retry);

            // 分享按鈕
            this.share = lizhi.createBitmapByName("share");
            this.share.x = (lizhi.getWidth()-this.share.width)/2 + 160;
            this.share.y = (lizhi.getHeight()-this.share.height)/2 + 40;
            this.share.touchEnabled = true;//开启触碰
            this.share.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onShare,this);//点击按钮分享游戏
            this.addChild(this.share);

            // 分數框
            this.description = lizhi.createBitmapByName("description_3");
            this.description.x = (lizhi.getWidth()-this.description.width)/2;
            this.description.y = (lizhi.getHeight()-this.description.height)/2 -240;
            this.addChild(this.description);

            // 分數文本
            this.score = new egret.TextField();
            this.score.textColor = 0xfee60e;
            this.score.size = 32;
            this.score.textAlign = egret.HorizontalAlign.CENTER;
            this.score.verticalAlign = egret.VerticalAlign.MIDDLE;
            // 设置描边属性
            this.score.strokeColor = 0x883216;
            this.score.width = getWidth();
            this.score.stroke = 3;
            this.score.x = 10;
            this.score.y = (getHeight()-this.score.height)/2 - 300;
            this.score.text = "0";
            this.score.fontFamily = "微软雅黑";
            this.score.bold = true;
            this.addChild(this.score);

            // 百分比文本
            this.per = new egret.TextField();
            this.per.textColor = 0xfee60e;
            this.per.size = 36;
            this.per.textAlign = egret.HorizontalAlign.CENTER;
            this.per.verticalAlign = egret.VerticalAlign.MIDDLE;
            //设置描边属性
            this.per.strokeColor = 0x883216;
            this.per.width = getWidth();
            this.per.stroke = 3;
            this.per.x = 20;
            this.per.y = (getHeight()-this.per.height)/2 - 227;
            this.per.text = "0%";
            this.per.fontFamily = "微软雅黑";
            this.per.bold = true;
            this.addChild(this.per);

            // 遊戲信息文本
            this.message = new egret.TextField();
            this.message.textColor = 0xFFFFFF;
            this.message.size = 32;
            this.message.textAlign = egret.HorizontalAlign.CENTER;
            this.message.verticalAlign = egret.VerticalAlign.MIDDLE;
            //设置描边属性
            this.message.strokeColor = 0x833314;
            this.message.width = getWidth()/1.5;
            this.message.stroke = 2;
            this.message.x = 120;
            this.message.y = (getHeight()-this.message.height)/2 + 220;
            this.message.text = "想成为荔枝达人还得眼细手快些哦,再试一次吧~~~";
            this.message.fontFamily = "幼圆";
            this.message.bold = true;
            this.addChild(this.message);

            // 底部banner
            this.banner = createBitmapByName("banner" + this.oneThird());
            this.banner.x = (lizhi.getWidth()-this.banner.width)/2;
            this.banner.y = lizhi.getHeight() - this.banner.height;
            this.banner.touchEnabled = true;//开启触碰
            this.banner.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onOpen,this);//点击按钮分享游戏
            this.addChild(this.banner);
        }

        /**
         * 重試事件響應
         */
        public onRetry() {
            this.dispatchEventWith("retryGame");
        }

        /**
         * 分享事件響應
         */
        private onShare() {
            share();
        }

        /**
         * 打開鏈接事件響應
         */
        private onOpen() {
            openLink();
        }

        /**
         * 更改遊戲信息文本
         * @param msg
         */
        public changeMessage(msg:string) {
            this.msg = msg;
            this.message.text = msg;
        }

        /**
         * 更改遊戲分數
         * @param score
         */
        public changeScore(score:number) {
            this.score.text = score.toString();
        }

        /**
         * 獲得[1, 2, 3]其中之一隨機數
         * @returns {number}
         */
        private oneThird():number {
            return Math.floor(Math.random()*3+1);
        }

        /**
         * 根據分數生成百分比
         * @returns {string}
         */
        private percentGenerate():string {
            if(Data.score == 0) {
                this.percent = "0";
            } else if (Data.score >0 && Data.score <= 19) {
                this.percent = (20*Math.random()).toFixed(1);
            } else if (Data.score <= 39) {
                this.percent = (80-10*Math.random()).toFixed(1);
            } else if (Data.score <= 49) {
                this.percent = (90-10*Math.random()).toFixed(1);
            } else if (Data.score >= 50) {
                this.percent = (100-10*Math.random()).toFixed(1);
            } else {
                this.percent = (100-10*Math.random()).toFixed(1);
            }
            return this.percent;
        }

        /**
         * 分享信息
         * @returns {string}
         */
        public shareMsg():string {
            this.percentGenerate();
            this.per.text = this.percent + "%";
            var msg = "我在《荔枝达人》中摘得" + Data.score + "颗荔枝，击败了" + this.percent + "%的人，不服来战！";
            return msg;
        }
    }
}