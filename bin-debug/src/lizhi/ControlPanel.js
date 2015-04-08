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
    var ControlPanel = (function (_super) {
        __extends(ControlPanel, _super);
        function ControlPanel() {
            _super.call(this);
            this.soundFlag = true;
            this.createControlPanel();
        }
        ControlPanel.prototype.createControlPanel = function () {
            this.width = lizhi.getWidth();
            this.height = lizhi.getHeight();
            this.time = lizhi.createBitmapByName("time");
            this.sound = lizhi.createBitmapByName("sound");
            this.soundStop = lizhi.createBitmapByName("sound_stop");
            this.time.x = (lizhi.getWidth() - this.time.width) / 2 - 250;
            //this.time.y = (getHeight()-this.time.height)/2 - 400;
            this.time.y = 100;
            this.sound.x = (lizhi.getWidth() - this.sound.width) / 2 + 250;
            //this.sound.y = (getHeight()-this.sound.height)/2 - 400;
            this.sound.y = 111;
            this.soundStop.x = (lizhi.getWidth() - this.soundStop.width) / 2 + 250;
            //this.sound.y = (getHeight()-this.sound.height)/2 - 400;
            this.soundStop.y = 111;
            this.sound.touchEnabled = true;
            this.sound.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSoundToggle, this);
            this.soundStop.touchEnabled = true;
            this.soundStop.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSoundToggle, this);
            this.addChild(this.time);
            this.soundFlag = lizhi.Data.soundFlat;
            if (this.soundFlag) {
                this.addChild(this.sound);
            }
            else {
                this.addChild(this.soundStop);
            }
            this.timeCount = new egret.TextField();
            this.timeCount.textAlign = "center";
            this.timeCount.textColor = 0xFFFFFF;
            this.timeCount.size = 48;
            this.timeCount.x = (lizhi.getWidth() - this.timeCount.width) / 2 - 200;
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
            this.score.width = lizhi.getWidth();
            this.score.stroke = 3;
            this.score.x = 0;
            this.score.y = (lizhi.getHeight() - this.score.height) / 2 - 320;
            this.score.text = "荔枝数:0";
            this.score.fontFamily = "幼圆";
            this.score.bold = true;
            this.addChild(this.score);
        };
        ControlPanel.prototype.changeScore = function (score) {
            var msg = "荔枝数:";
            this.score.text = msg + score;
        };
        ControlPanel.prototype.changeTime = function (time) {
            this.timeCount.text = time.toString();
        };
        ControlPanel.prototype.onSoundToggle = function (evt) {
            this.soundFlag = !this.soundFlag;
            lizhi.Data.soundFlat = this.soundFlag;
            if (!this.soundFlag) {
                this.removeChild(this.sound);
                this.addChild(this.soundStop);
            }
            else {
                this.removeChild(this.soundStop);
                this.addChild(this.sound);
            }
        };
        return ControlPanel;
    })(egret.Sprite);
    lizhi.ControlPanel = ControlPanel;
    ControlPanel.prototype.__class__ = "lizhi.ControlPanel";
})(lizhi || (lizhi = {}));
