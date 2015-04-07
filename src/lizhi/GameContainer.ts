/**
 * Created by Administrator on 2015/4/7.
 */
module lizhi {

    export class GameContainer extends egret.DisplayObjectContainer {
        /**@private*/
        private stageW:number;
        /**@private*/
        private stageH:number;
        /**�_ʼ���o*/
        private btnStart:egret.Bitmap;
        /**�_ʼ���}*/
        private titleStart:egret.Bitmap;
        /**�_ʼ����*/
        private descriptionStart:egret.Bitmap;
        /**픲��DƬ*/
        private topMost:egret.Bitmap;
        /**��֦���o*/
        private litchi:egret.Bitmap;
        /**���Ұ��o*/
        private cherry:egret.Bitmap;
        /**ˮ���M��*/
        private fruitGroup:lizhi.FruitGroup;

        public constructor() {
            super();
            this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
        }

        /**��ʼ��*/
        private onAddToStage(event:egret.Event) {
            this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
            this.createGameScene();
        }

        /**������Ϸ����*/
        private createGameScene():void {
            this.stageW = this.stage.stageWidth;
            this.stageH = this.stage.stageHeight;

            //�_ʼ���o
            this.btnStart = this.createBitmapByName("start");//�_ʼ���o
            this.btnStart.x = (this.stageW-this.btnStart.width)/2;//���ж�λ
            this.btnStart.y = (this.stageH-this.btnStart.height)/2 + 240;//���ж�λ+240
            this.btnStart.touchEnabled = true;//��������
            this.btnStart.addEventListener(egret.TouchEvent.TOUCH_TAP,this.gameStart,this);//�����ť��ʼ��Ϸ
            this.addChild(this.btnStart);

            //�_ʼ���}
            this.titleStart = this.createBitmapByName("title");//�_ʼ���}
            this.titleStart.x = (this.stageW-this.titleStart.width)/2;//���ж�λ
            this.titleStart.y = (this.stageH-this.titleStart.height)/2 - 240;//���ж�λ-240
            this.addChild(this.titleStart);


            //�_ʼ����
            this.descriptionStart = this.createBitmapByName("description");//�_ʼ����
            this.descriptionStart.x = (this.stageW-this.descriptionStart.width)/2;//���ж�λ
            this.descriptionStart.y = (this.stageH-this.descriptionStart.height)/2 - 100;//���ж�λ-100
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
            this.topMost.x = (this.stageW-this.topMost.width)/2;//���ж�λ
            this.topMost.y = 0;//���
            this.addChild(this.topMost);

            this.litchi = createBitmapByName("litchi");
            this.litchi.x = (this.stageW-this.litchi.width)/2 - 200;
            this.litchi.y = (this.stageH-this.litchi.height)/2 + 300;
            this.litchi.touchEnabled = true;//��������
            this.litchi.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onLitchiTouch,this);//�����ť��ʼ��Ϸ
            this.addChild(this.litchi);

            this.cherry = createBitmapByName("cherry");
            this.cherry.x = (this.stageW-this.cherry.width)/2 + 200;
            this.cherry.y = (this.stageH-this.cherry.height)/2 + 300;
            this.cherry.touchEnabled = true;//��������
            this.cherry.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onCherryTouch,this);//�����ť��ʼ��Ϸ
            this.addChild(this.cherry);

            this.fruitGroup = new lizhi.FruitGroup();
            this.fruitGroup.x = (this.stageW-this.fruitGroup.width)/2;//���ж�λ
            this.fruitGroup.y = (this.stageH-this.fruitGroup.height)/2;//���ж�λ
            this.addChild(this.fruitGroup);
        }


        private onLitchiTouch(evt:egret.TouchEvent):void {
            this.fruitGroup.down(FruitType.LITCHI);

        }

        private onCherryTouch(evt:egret.TouchEvent):void {
            this.fruitGroup.down(FruitType.CHERRY);
        }

        /**
         * ����name�ؼ��ִ���һ��Bitmap����name������ο�resources/resource.json�����ļ������ݡ�
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