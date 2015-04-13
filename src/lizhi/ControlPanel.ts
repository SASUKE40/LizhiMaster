/**
 * Created by Administrator on 2015/4/7.
 */
module lizhi {

    /**
     * 控制面板類
     */
    export class ControlPanel extends egret.Sprite {

        // 遊戲時間圖標
        private time:egret.Bitmap;
        // 剩餘時間文本
        private timeCount:egret.TextField;
        // 遊戲聲音圖片
        private sound:egret.Bitmap;
        // 禁止聲音圖標
        private soundStop:egret.Bitmap;
        // 分數文本
        private score:egret.TextField;
        // 聲音標誌位
        private soundFlag:boolean = true;

        public constructor() {
            super();
            this.createControlPanel();
        }

        /**
         * 創建控制面板
         */
        private createControlPanel() {
            this.width = getWidth();
            this.height = getHeight();

            // 初始化元素
            this.time = createBitmapByName("time");
            this.sound = createBitmapByName("sound");
            this.soundStop = createBitmapByName("sound_stop");

            this.time.x = (getWidth()-this.time.width)/2 - 250;
            //this.time.y = (getHeight()-this.time.height)/2 - 400;
            this.time.y = 100;
            this.sound.x = (getWidth()-this.sound.width)/2 + 250;
            //this.sound.y = (getHeight()-this.sound.height)/2 - 400;
            this.sound.y = 111;
            this.soundStop.x = (getWidth()-this.soundStop.width)/2 + 250;
            //this.sound.y = (getHeight()-this.sound.height)/2 - 400;
            this.soundStop.y = 111;

            this.sound.touchEnabled = true;
            this.sound.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onSoundToggle,this);
            this.soundStop.touchEnabled = true;
            this.soundStop.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onSoundToggle,this);
            this.addChild(this.time);
            this.soundFlag = Data.soundFlat;
            if (this.soundFlag) {
                this.addChild(this.sound);
            } else {
                this.addChild(this.soundStop);
            }

            this.timeCount = new egret.TextField();
            this.timeCount.textAlign = "center";
            this.timeCount.textColor = 0xFFFFFF;
            this.timeCount.size = 48;
            this.timeCount.x = (getWidth()-this.timeCount.width)/2 - 200;
            //this.timeCount.y = (getHeight()-this.timeCount.height)/2 - 420;
            this.timeCount.y = 120;
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

        /**
         * 更改遊戲分數文本
         * @param score
         */
        public changeScore(score:number) {
            var msg = "荔枝数:";
            this.score.text = msg + score;
        }

        /**
         * 更改遊戲時間文本
         * @param time
         */
        public changeTime(time:number) {
            this.timeCount.text = time.toString();
        }

        /**
         * 切換聲音模式
         * @param evt
         */
        private onSoundToggle(evt:egret.TouchEvent) {
            this.soundFlag = !this.soundFlag;
            Data.soundFlat = this.soundFlag;
            if (!this.soundFlag) {
                this.removeChild(this.sound);
                this.addChild(this.soundStop);
            } else {
                this.removeChild(this.soundStop);
                this.addChild(this.sound);
            }
            // 轉發事件
            this.dispatchEventWith("soundToggle")
        }
    }
}