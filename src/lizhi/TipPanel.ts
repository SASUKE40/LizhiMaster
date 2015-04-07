/**
 * Created by Administrator on 2015/4/7.
 */
module lizhi {

    export class TipPanel extends egret.Sprite {

        private description:egret.Bitmap;
        private black:egret.Bitmap;
        private _3:egret.Bitmap;
        private _2:egret.Bitmap;
        private _1:egret.Bitmap;
        private _go:egret.Bitmap;

        private count:number = 3;
        private timer:egret.Timer = new egret.Timer(1000,5);

        public constructor() {
            super();
            this.createTipPanel();
        }

        private createTipPanel() {
            this.width = getWidth();
            this.height = getHeight();
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
            this.addChild(this.black);
            this.addChild(this.description);

        }

        public countDown() {

            //this.removeChild(this.description);
            //注册事件侦听器
            this.timer.addEventListener(egret.TimerEvent.TIMER,this.timerFunc,this);
            this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.timerComFunc,this);
            //开始计时
            this.timer.start();

        }

        private timerFunc() {
            switch(this.count) {
                case 3:this.addChild(this._3);break;
                case 2:this.addChild(this._2);this.removeChild(this._3);break;
                case 1:this.addChild(this._1);this.removeChild(this._2);break;
                case 0:this.addChild(this._go);this.removeChild(this._1);break;
            }
            this.count--;
        }

        private timerComFunc() {
            this.dispatchEventWith("countDown");
            this.parent.removeChild(this);
        }
    }
}