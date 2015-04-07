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