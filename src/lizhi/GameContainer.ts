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
        /**頂部圖片*/
        private topMost:egret.Bitmap;
        /**荔枝按鈕*/
        private litchi:egret.Bitmap;
        /**櫻桃按鈕*/
        private cherry:egret.Bitmap;
        /**水果組合*/
        private fruitGroup:lizhi.FruitGroup;

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
            this.btnStart = this.createBitmapByName("start");//開始按鈕
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
            this.descriptionStart = this.createBitmapByName("description");//開始描述
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
        }

        private init() {

            this.topMost = createBitmapByName("top_most");
            this.topMost.x = (this.stageW-this.topMost.width)/2;//居中定位
            this.topMost.y = 0;//居頂
            this.addChild(this.topMost);

            this.litchi = createBitmapByName("litchi");
            this.litchi.x = (this.stageW-this.litchi.width)/2 - 200;
            this.litchi.y = (this.stageH-this.litchi.height)/2 + 300;
            this.litchi.touchEnabled = true;//开启触碰
            this.litchi.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onLitchiTouch,this);//点击按钮开始游戏
            this.addChild(this.litchi);

            this.cherry = createBitmapByName("cherry");
            this.cherry.x = (this.stageW-this.cherry.width)/2 + 200;
            this.cherry.y = (this.stageH-this.cherry.height)/2 + 300;
            this.cherry.touchEnabled = true;//开启触碰
            this.cherry.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onCherryTouch,this);//点击按钮开始游戏
            this.addChild(this.cherry);

            this.fruitGroup = new lizhi.FruitGroup();
            this.fruitGroup.x = (this.stageW-this.fruitGroup.width)/2;//居中定位
            this.fruitGroup.y = (this.stageH-this.fruitGroup.height)/2;//居中定位
            this.addChild(this.fruitGroup);
        }


        private onLitchiTouch(evt:egret.TouchEvent):void {
            this.fruitGroup.down(FruitType.LITCHI);

        }

        private onCherryTouch(evt:egret.TouchEvent):void {
            this.fruitGroup.down(FruitType.CHERRY);
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