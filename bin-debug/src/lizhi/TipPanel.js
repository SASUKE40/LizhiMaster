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
    var TipPanel = (function (_super) {
        __extends(TipPanel, _super);
        function TipPanel() {
            _super.call(this);
            this.count = 3;
            this.timer = new egret.Timer(1000, 5);
            this.createTipPanel();
        }
        TipPanel.prototype.createTipPanel = function () {
            this.width = lizhi.getWidth();
            this.height = lizhi.getHeight();
            this.description = lizhi.createBitmapByName("description_2");
            this.black = lizhi.createBitmapByName("black");
            this._3 = lizhi.createBitmapByName("3");
            this._2 = lizhi.createBitmapByName("2");
            this._1 = lizhi.createBitmapByName("1");
            this._go = lizhi.createBitmapByName("GO");
            this._3.x = (lizhi.getWidth() - this._3.width) / 2;
            this._3.y = (lizhi.getHeight() - this._3.height) / 2;
            this._2.x = (lizhi.getWidth() - this._3.width) / 2;
            this._2.y = (lizhi.getHeight() - this._3.height) / 2;
            this._1.x = (lizhi.getWidth() - this._3.width) / 2;
            this._1.y = (lizhi.getHeight() - this._3.height) / 2;
            this._go.x = (lizhi.getWidth() - this._3.width) / 2;
            this._go.y = (lizhi.getHeight() - this._3.height) / 2;
            this.description.x = (lizhi.getWidth() - this.description.width) / 2;
            this.description.y = (lizhi.getHeight() - this.description.height) / 2;
            this.black.x = (lizhi.getWidth() - this.black.width) / 2;
            this.black.y = (lizhi.getHeight() - this.black.height) / 2;
            this.addChild(this.black);
            this.addChild(this.description);
        };
        TipPanel.prototype.countDown = function () {
            this.removeChild(this.description);
            //注册事件侦听器
            this.timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
            this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerComFunc, this);
            //开始计时
            this.timer.start();
        };
        TipPanel.prototype.timerFunc = function () {
            switch (this.count) {
                case 3:
                    this.addChild(this._3);
                    break;
                case 2:
                    this.addChild(this._2);
                    this.removeChild(this._3);
                    break;
                case 1:
                    this.addChild(this._1);
                    this.removeChild(this._2);
                    break;
                case 0:
                    this.addChild(this._go);
                    this.removeChild(this._1);
                    break;
            }
            this.count--;
        };
        TipPanel.prototype.timerComFunc = function () {
            this.parent.removeChild(this);
            this.dispatchEventWith("countDown");
        };
        return TipPanel;
    })(egret.Sprite);
    lizhi.TipPanel = TipPanel;
    TipPanel.prototype.__class__ = "lizhi.TipPanel";
})(lizhi || (lizhi = {}));
