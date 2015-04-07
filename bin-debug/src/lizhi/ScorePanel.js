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
    var ScorePanel = (function (_super) {
        __extends(ScorePanel, _super);
        function ScorePanel() {
            _super.call(this);
            this.width = lizhi.getWidth();
            this.height = lizhi.getHeight();
            this.retry = lizhi.createBitmapByName("retry");
            this.retry.x = (lizhi.getWidth() - this.retry.width) / 2 - 160;
            this.retry.y = (lizhi.getHeight() - this.retry.height) / 2 + 240;
            this.retry.touchEnabled = true; //开启触碰
            this.retry.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRetry, this); //点击按钮重新游戏
            this.addChild(this.retry);
            this.share = lizhi.createBitmapByName("share");
            this.share.x = (lizhi.getWidth() - this.share.width) / 2 + 160;
            this.share.y = (lizhi.getHeight() - this.share.height) / 2 + 240;
            this.addChild(this.share);
            this.description = lizhi.createBitmapByName("description_3");
            this.description.x = (lizhi.getWidth() - this.description.width) / 2;
            this.description.y = (lizhi.getHeight() - this.description.height) / 2 - 240;
            this.addChild(this.description);
            this.score = new egret.TextField();
            this.score.textColor = 0xfee60e;
            this.score.size = 52;
            this.score.textAlign = egret.HorizontalAlign.CENTER;
            this.score.verticalAlign = egret.VerticalAlign.MIDDLE;
            //设置描边属性
            this.score.strokeColor = 0x883216;
            this.score.width = lizhi.getWidth();
            this.score.stroke = 3;
            this.score.x = 10;
            this.score.y = (lizhi.getHeight() - this.score.height) / 2 - 260;
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
            this.message.width = lizhi.getWidth() / 1.5;
            this.message.stroke = 3;
            this.message.x = 120;
            this.message.y = (lizhi.getHeight() - this.message.height) / 2;
            this.message.text = "想成为荔枝达人还得眼细手快些哦，再试一次吧~~~";
            this.message.fontFamily = "幼圆";
            this.message.bold = true;
            this.addChild(this.message);
        }
        ScorePanel.prototype.onRetry = function () {
            this.dispatchEventWith("retryGame");
        };
        ScorePanel.prototype.changeMessage = function (msg) {
            this.message.text = msg;
        };
        ScorePanel.prototype.changeScore = function (score) {
            this.score.text = score.toString();
        };
        return ScorePanel;
    })(egret.Sprite);
    lizhi.ScorePanel = ScorePanel;
    ScorePanel.prototype.__class__ = "lizhi.ScorePanel";
})(lizhi || (lizhi = {}));
