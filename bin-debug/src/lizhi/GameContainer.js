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
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        }
        /**��ʼ��*/
        GameContainer.prototype.onAddToStage = function (event) {
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
            this.createGameScene();
        };
        /**������Ϸ����*/
        GameContainer.prototype.createGameScene = function () {
            this.stageW = this.stage.stageWidth;
            this.stageH = this.stage.stageHeight;
            //�_ʼ���o
            this.btnStart = this.createBitmapByName("start"); //�_ʼ���o
            this.btnStart.x = (this.stageW - this.btnStart.width) / 2; //���ж�λ
            this.btnStart.y = (this.stageH - this.btnStart.height) / 2 + 240; //���ж�λ+240
            this.btnStart.touchEnabled = true; //��������
            this.btnStart.addEventListener(egret.TouchEvent.TOUCH_TAP, this.gameStart, this); //������ť��ʼ��Ϸ
            this.addChild(this.btnStart);
            //�_ʼ���}
            this.titleStart = this.createBitmapByName("title"); //�_ʼ���}
            this.titleStart.x = (this.stageW - this.titleStart.width) / 2; //���ж�λ
            this.titleStart.y = (this.stageH - this.titleStart.height) / 2 - 240; //���ж�λ-240
            this.addChild(this.titleStart);
            //�_ʼ����
            this.descriptionStart = this.createBitmapByName("description"); //�_ʼ����
            this.descriptionStart.x = (this.stageW - this.descriptionStart.width) / 2; //���ж�λ
            this.descriptionStart.y = (this.stageH - this.descriptionStart.height) / 2 - 100; //���ж�λ-100
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
        };
        GameContainer.prototype.init = function () {
            this.topMost = lizhi.createBitmapByName("top_most");
            this.topMost.x = (this.stageW - this.topMost.width) / 2; //���ж�λ
            this.topMost.y = 0; //����
            this.addChild(this.topMost);
            this.litchi = lizhi.createBitmapByName("litchi");
            this.litchi.x = (this.stageW - this.litchi.width) / 2 - 200;
            this.litchi.y = (this.stageH - this.litchi.height) / 2 + 300;
            this.litchi.touchEnabled = true; //��������
            this.litchi.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLitchiTouch, this); //������ť��ʼ��Ϸ
            this.addChild(this.litchi);
            this.cherry = lizhi.createBitmapByName("cherry");
            this.cherry.x = (this.stageW - this.cherry.width) / 2 + 200;
            this.cherry.y = (this.stageH - this.cherry.height) / 2 + 300;
            this.cherry.touchEnabled = true; //��������
            this.cherry.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCherryTouch, this); //������ť��ʼ��Ϸ
            this.addChild(this.cherry);
            this.fruitGroup = new lizhi.FruitGroup();
            this.fruitGroup.x = (this.stageW - this.fruitGroup.width) / 2; //���ж�λ
            this.fruitGroup.y = (this.stageH - this.fruitGroup.height) / 2; //���ж�λ
            this.addChild(this.fruitGroup);
        };
        GameContainer.prototype.onLitchiTouch = function (evt) {
            this.fruitGroup.down(lizhi.FruitType.LITCHI);
        };
        GameContainer.prototype.onCherryTouch = function (evt) {
            this.fruitGroup.down(lizhi.FruitType.CHERRY);
        };
        /**
         * ����name�ؼ��ִ���һ��Bitmap������name�������ο�resources/resource.json�����ļ������ݡ�
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
