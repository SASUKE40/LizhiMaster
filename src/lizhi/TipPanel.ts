/**
 * Created by Administrator on 2015/4/7.
 */
module lizhi {

    /**
     * 提示面板類
     */
    export class TipPanel extends egret.Sprite {

        // 提示框
        private description:egret.Bitmap;
        // 黑底
        private black:egret.Bitmap;
        // 數字3
        private _3:egret.Bitmap;
        // 數字2
        private _2:egret.Bitmap;
        // 數字1
        private _1:egret.Bitmap;
        // 文字“go”
        private _go:egret.Bitmap;

        // 倒計時
        private count:number = 3;
        // 定時器
        private timer:egret.Timer = new egret.Timer(1000,5);

        public constructor() {
            super();
            this.createTipPanel();
        }

        /**
         * 創建提示面板
         */
        private createTipPanel() {
            this.width = getWidth();
            this.height = getHeight();

            // 初始化元素
            this.description = createBitmapByName("description_2");
            this.black = createBitmapByName("black");
            this._3 = createBitmapByName("3");
            this._2 = createBitmapByName("2");
            this._1 = createBitmapByName("1");
            this._go = createBitmapByName("GO");
            this._3.x = (getWidth()-this._3.width)/2 + 10;
            this._3.y = (getHeight()-this._3.height)/2-120;
            this._2.x = (getWidth()-this._3.width)/2+10;
            this._2.y = (getHeight()-this._3.height)/2-120;
            this._1.x = (getWidth()-this._3.width)/2 + 10;
            this._1.y = (getHeight()-this._3.height)/2-120;
            this._go.x = (getWidth()-this._3.width)/2 + 10;
            this._go.y = (getHeight()-this._3.height)/2-120;
            this.description.x = (getWidth()-this.description.width)/2;
            this.description.y = (getHeight()-this.description.height)/2;
            this.black.x = (getWidth()-this.black.width)/2;
            this.black.y = (getHeight()-this.black.height)/2;

            // 增加元素
            this.addChild(this.black);
            this.addChild(this.description);

        }

        /**
         * 開始計時
         */
        public countDown() {

            //this.removeChild(this.description);
            //注册事件侦听器
            this.timer.addEventListener(egret.TimerEvent.TIMER,this.timerFunc,this);
            this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.timerComFunc,this);
            //开始计时
            this.timer.start();

        }

        /**
         * 倒計時數字替換
         */
        private timerFunc() {
            switch(this.count) {
                case 3:this.addChild(this._3);break;
                case 2:this.addChild(this._2);this.removeChild(this._3);break;
                case 1:this.addChild(this._1);this.removeChild(this._2);break;
                case 0:this.addChild(this._go);this.removeChild(this._1);break;
            }
            this.count--;
        }

        /**
         * 時間結束，開始遊戲
         */
        private timerComFunc() {
            this.dispatchEventWith("countDown");
            this.parent.removeChild(this);
        }
    }
}