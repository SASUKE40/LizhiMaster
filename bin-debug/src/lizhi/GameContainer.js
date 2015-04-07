var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * Created by Administrator on 2015/4/7.
 */
var lizhi;
(function (lizhi) {
    var GameContainer = (function (_super) {
        __extends(GameContainer, _super);
        function GameContainer() {
            _super.call(this);
            /**計時器*/
            this.timeCount = 30;
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        }
        /**初始化*/
        GameContainer.prototype.onAddToStage = function (event) {
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
            this.createGameScene();
        };
        /**创建游戏场景*/
        GameContainer.prototype.createGameScene = function () {
            this.stageW = this.stage.stageWidth;
            this.stageH = this.stage.stageHeight;
            //開始按鈕
            this.btnStart = this.createBitmapByName("star"); //開始按鈕
            this.btnStart.x = (this.stageW - this.btnStart.width) / 2; //居中定位
            this.btnStart.y = (this.stageH - this.btnStart.height) / 2 + 240; //居中定位+240
            this.btnStart.touchEnabled = true; //开启触碰
            this.btnStart.addEventListener(egret.TouchEvent.TOUCH_TAP, this.gameStart, this); //点击按钮开始游戏
            this.addChild(this.btnStart);
            //開始標題
            this.titleStart = this.createBitmapByName("title"); //開始標題
            this.titleStart.x = (this.stageW - this.titleStart.width) / 2; //居中定位
            this.titleStart.y = (this.stageH - this.titleStart.height) / 2 - 240; //居中定位-240
            this.addChild(this.titleStart);
            //開始描述
            this.descriptionStart = this.createBitmapByName("description_1"); //開始描述
            this.descriptionStart.x = (this.stageW - this.descriptionStart.width) / 2; //居中定位
            this.descriptionStart.y = (this.stageH - this.descriptionStart.height) / 2 - 100; //居中定位-100
            this.addChild(this.descriptionStart);
        };
        GameContainer.prototype.gameStart = function (evt) {
            if (this.btnStart.parent) {
                this.removeChild(this.btnStart);
            }
            if (this.titleStart.parent) {
                this.removeChild(this.titleStart);
            }
            if (this.descriptionStart.parent) {
                this.removeChild(this.descriptionStart);
            }
            this.init();
            this.preInit();
            //this.onGameOver();
        };
        GameContainer.prototype.preInit = function () {
            this.tipPanel = new lizhi.TipPanel();
            this.tipPanel.x = (this.stageW - this.tipPanel.width) / 2; //居中定位
            this.tipPanel.y = (this.stageH - this.tipPanel.height) / 2; //居中定位
            this.addChild(this.tipPanel);
            this.tipPanel.countDown();
            this.tipPanel.addEventListener("countDown", this.onCountDown, this);
        };
        GameContainer.prototype.onCountDown = function () {
            this.gamePanel.canTouch();
            this.timeCount = 30;
            this.timer = new egret.Timer(1000, 30);
            //注册事件侦听器
            this.timer.addEventListener(egret.TimerEvent.TIMER, this.onTimeDown, this);
            this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.onGameOver, this);
            this.timer.start();
        };
        GameContainer.prototype.init = function () {
            lizhi.Data.score = 0;
            this.gamePanel = new lizhi.GamePanel();
            this.gamePanel.x = (this.stageW - this.gamePanel.width) / 2; //居中定位
            this.gamePanel.y = (this.stageH - this.gamePanel.height) / 2; //居中定位
            this.gamePanel.addEventListener("gameOver", this.onGameOver, this);
            this.addChild(this.gamePanel);
        };
        GameContainer.prototype.onTimeDown = function () {
            this.timeCount--;
            this.gamePanel.changeTime(this.timeCount);
        };
        GameContainer.prototype.onGameOver = function () {
            this.scorePanel = new lizhi.ScorePanel();
            this.scorePanel.x = (this.stageW - this.scorePanel.width) / 2; //居中定位
            this.scorePanel.y = (this.stageH - this.scorePanel.height) / 2; //居中定位
            this.scorePanel.changeScore(lizhi.Data.score);
            this.addChild(this.scorePanel);
            this.scorePanel.addEventListener("retryGame", this.onRetry, this);
            this.timer.removeEventListener(egret.TimerEvent.TIMER, this.onTimeDown, this);
            this.timer.removeEventListener(egret.TimerEvent.TIMER_COMPLETE, this.onGameOver, this);
            this.removeChild(this.gamePanel);
        };
        GameContainer.prototype.onRetry = function () {
            this.removeChild(this.scorePanel);
            this.init();
            this.onCountDown();
        };
        /**
         * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
         * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
         */
        GameContainer.prototype.createBitmapByName = function (name) {
            var result = new egret.Bitmap();
            var texture = RES.getRes(name);
            result.texture = texture;
            return result;
        };
        return GameContainer;
    })(egret.DisplayObjectContainer);
    lizhi.GameContainer = GameContainer;
    GameContainer.prototype.__class__ = "lizhi.GameContainer";
})(lizhi || (lizhi = {}));
