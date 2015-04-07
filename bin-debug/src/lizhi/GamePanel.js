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
    var GamePanel = (function (_super) {
        __extends(GamePanel, _super);
        function GamePanel() {
            _super.call(this);
            this.createGamePanel();
        }
        GamePanel.prototype.createGamePanel = function () {
            this.width = lizhi.getWidth();
            this.height = lizhi.getHeight();
            this.topMost = lizhi.createBitmapByName("most_top");
            this.topMost.x = (lizhi.getWidth() - this.topMost.width) / 2; //���ж�λ
            this.topMost.y = 0; //����
            this.addChild(this.topMost);
            this.litchi = lizhi.createBitmapByName("lizhi_icon");
            this.litchi.x = (lizhi.getWidth() - this.litchi.width) / 2 - 200;
            this.litchi.y = (lizhi.getHeight() - this.litchi.height) / 2 + 300;
            this.addChild(this.litchi);
            this.cherry = lizhi.createBitmapByName("cherry_icon");
            this.cherry.x = (lizhi.getWidth() - this.cherry.width) / 2 + 200;
            this.cherry.y = (lizhi.getHeight() - this.cherry.height) / 2 + 300;
            this.addChild(this.cherry);
            this.fruitGroup = new lizhi.FruitGroup();
            this.fruitGroup.x = (lizhi.getWidth() - this.fruitGroup.width) / 2; //���ж�λ
            this.fruitGroup.y = (lizhi.getHeight() - this.fruitGroup.height) / 2; //���ж�λ
            this.fruitGroup.addEventListener("scoreAdd", this.onScoreAdd, this);
            this.fruitGroup.addEventListener("gameOver", this.onGameOver, this);
            this.addChild(this.fruitGroup);
            this.controlPanel = new lizhi.ControlPanel();
            this.controlPanel.x = (lizhi.getWidth() - this.controlPanel.width) / 2; //���ж�λ
            this.controlPanel.y = (lizhi.getHeight() - this.controlPanel.height) / 2; //���ж�λ
            this.addChild(this.controlPanel);
        };
        GamePanel.prototype.canTouch = function () {
            this.litchi.touchEnabled = true; //��������
            this.litchi.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLitchiTouch, this); //������ť��ʼ��Ϸ
            this.cherry.touchEnabled = true; //��������
            this.cherry.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCherryTouch, this); //������ť��ʼ��Ϸ
        };
        GamePanel.prototype.onLitchiTouch = function (evt) {
            this.fruitGroup.down(lizhi.FruitType.LITCHI);
        };
        GamePanel.prototype.onCherryTouch = function (evt) {
            this.fruitGroup.down(lizhi.FruitType.CHERRY);
        };
        GamePanel.prototype.onScoreAdd = function () {
            this.controlPanel.changeScore(lizhi.Data.score);
        };
        GamePanel.prototype.changeTime = function (time) {
            this.controlPanel.changeTime(time);
        };
        GamePanel.prototype.onGameOver = function () {
            this.dispatchEventWith("gameOver");
        };
        return GamePanel;
    })(egret.Sprite);
    lizhi.GamePanel = GamePanel;
    GamePanel.prototype.__class__ = "lizhi.GamePanel";
})(lizhi || (lizhi = {}));
