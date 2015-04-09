/**
 * Created by Administrator on 2015/4/7.
 */
module lizhi {

    export class GameContainer extends egret.DisplayObjectContainer {
        /**@private*/
        private stageW:number;
        /**@private*/
        private stageH:number;
        /**開始按鈕*/
        private btnStart:egret.Bitmap;
        /**開始標題*/
        private titleStart:egret.Bitmap;
        /**開始描述*/
        private descriptionStart:egret.Bitmap;
        /**提示面板*/
        private tipPanel:lizhi.TipPanel;
        /**遊戲面板*/
        private gamePanel:lizhi.GamePanel;
        /**分數面板*/
        private scorePanel:lizhi.ScorePanel;
        /**計時器*/
        private timeCount:number = 30;
        private timer:egret.Timer;
        private bgm:egret.Sound;

        public constructor() {
            super();
            this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
        }

        /**初始化*/
        private onAddToStage(event:egret.Event) {
            this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
            this.createGameScene();
        }

        /**创建游戏场景*/
        private createGameScene():void {
            this.stageW = this.stage.stageWidth;
            this.stageH = this.stage.stageHeight;

            //開始按鈕
            this.btnStart = this.createBitmapByName("star");//開始按鈕
            this.btnStart.x = (this.stageW-this.btnStart.width)/2;//居中定位
            this.btnStart.y = (this.stageH-this.btnStart.height)/2 + 240;//居中定位+240
            this.btnStart.touchEnabled = true;//开启触碰
            this.btnStart.addEventListener(egret.TouchEvent.TOUCH_TAP,this.gameStart,this);//点击按钮开始游戏
            this.addChild(this.btnStart);

            //開始標題
            this.titleStart = this.createBitmapByName("title");//開始標題
            this.titleStart.x = (this.stageW-this.titleStart.width)/2;//居中定位
            this.titleStart.y = (this.stageH-this.titleStart.height)/2 - 240;//居中定位-240
            this.addChild(this.titleStart);


            //開始描述
            this.descriptionStart = this.createBitmapByName("description_1");//開始描述
            this.descriptionStart.x = (this.stageW-this.descriptionStart.width)/2;//居中定位
            this.descriptionStart.y = (this.stageH-this.descriptionStart.height)/2 - 100;//居中定位-100
            this.addChild(this.descriptionStart);

        }

        private gameStart(evt:egret.TouchEvent) {
            if(this.btnStart.parent) {
                this.removeChild(this.btnStart);
            }
            if(this.titleStart.parent) {
                this.removeChild(this.titleStart);
            }
            if(this.descriptionStart.parent) {
                this.removeChild(this.descriptionStart);
            }
            this.init();
            this.preInit();
            //this.onGameOver();
        }

        private preInit() {
            this.tipPanel = new lizhi.TipPanel();
            this.tipPanel.x = (this.stageW-this.tipPanel.width)/2;//居中定位
            this.tipPanel.y = (this.stageH-this.tipPanel.height)/2;//居中定位
            this.addChild(this.tipPanel);
            this.tipPanel.countDown();
            this.tipPanel.addEventListener("countDown", this.onCountDown, this);
        }

        private onCountDown() {
            this.gamePanel.canTouch();
            this.timeCount = 30;
            this.timer  = new egret.Timer(1000,30);
            //注册事件侦听器
            this.timer.addEventListener(egret.TimerEvent.TIMER,this.onTimeDown,this);
            this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.onGameOver,this);
            this.timer.start();
            this.bgm = RES.getRes("bgm_mp3");
            if(Data.soundFlat) {
                this.bgm.play(true);
            }
        }

        private onSoundToggle() {
            if(!Data.soundFlat) {
                this.bgm.pause();
            } else {
                this.bgm.play(true);
            }
        }

        private init() {
            Data.score = 0;
            this.gamePanel = new lizhi.GamePanel();
            this.gamePanel.x = (this.stageW-this.gamePanel.width)/2;//居中定位
            this.gamePanel.y = (this.stageH-this.gamePanel.height)/2;//居中定位
            this.gamePanel.addEventListener("gameOver", this.onGameOver, this);
            this.addChild(this.gamePanel);
            this.gamePanel.getControlPanel.addEventListener("soundToggle", this.onSoundToggle, this);
        }


        private onTimeDown() {
            this.timeCount--;
            this.gamePanel.changeTime(this.timeCount);
        }

        private onGameOver() {
            this.bgm.pause();
            this.scorePanel = new lizhi.ScorePanel();
            this.scorePanel.x = (this.stageW-this.scorePanel.width)/2;//居中定位
            this.scorePanel.y = (this.stageH-this.scorePanel.height)/2;//居中定位
            this.scorePanel.changeScore(Data.score);
            if(Data.score >=0 && Data.score <= 19) {
                this.scorePanel.changeMessage("想成为荔枝达人还得眼细手快些哦,再试一次吧~~~");
            } else if (Data.score <= 39) {
                this.scorePanel.changeMessage("有进步哦,还差" + (40 - Data.score) + "个荔枝\n你就是荔枝达人啦,再挑战一次吧~~");
            } else if (Data.score <= 49) {
                this.scorePanel.changeMessage("荔枝达人驾到!\n集齐50颗荔枝会有惊喜哦,听说真正的勇者都会再挑战一次的~~~");
            } else if (Data.score >= 50) {
                this.scorePanel.changeMessage("膜拜,全宇宙无人企及的荔枝大师就是你啦!");
            } else {
                this.scorePanel.changeMessage("想成为荔枝达人还得眼细手快些哦,再试一次吧~~~");
            }
            this.addChild(this.scorePanel);
            this.scorePanel.addEventListener("retryGame", this.onRetry, this);
            this.timer.removeEventListener(egret.TimerEvent.TIMER,this.onTimeDown,this);
            this.timer.removeEventListener(egret.TimerEvent.TIMER_COMPLETE,this.onGameOver,this);
            this.removeChild(this.gamePanel);
            var s = this.scorePanel.shareMsg();
            result(s);
        }



        private onRetry() {

            this.removeChild(this.scorePanel);
            this.init();
            this.onCountDown();
        }

        /**
         * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
         * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
         */
        private createBitmapByName(name: string): egret.Bitmap {
            var result: egret.Bitmap = new egret.Bitmap();
            var texture: egret.Texture = RES.getRes(name);
            result.texture = texture;
            return result;
        }
    }
}