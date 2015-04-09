/**
 * Created by Administrator on 2015/4/7.
 */
module lizhi {

    export class GamePanel extends egret.Sprite {

        /**픲��DƬ*/
        private topMost:egret.Bitmap;
        /**��֦���o*/
        private litchi:egret.Bitmap;
        /**���Ұ��o*/
        private cherry:egret.Bitmap;
        /**ˮ���M��*/
        private fruitGroup:lizhi.FruitGroup;
        /**�������*/
        private controlPanel:lizhi.ControlPanel;

        public constructor() {
            super();
            this.createGamePanel();
        }

        private createGamePanel() {
            this.width = getWidth();
            this.height = getHeight();

            this.topMost = createBitmapByName("most_top");
            this.topMost.x = (getWidth()-this.topMost.width)/2;//���ж�λ
            this.topMost.y = 0;//���
            this.addChild(this.topMost);

            this.litchi = createBitmapByName("lizhi_icon");
            this.litchi.x = (getWidth()-this.litchi.width)/2 - 200;
            this.litchi.y = (getHeight()-this.litchi.height)/2 + 300;
            this.addChild(this.litchi);

            this.cherry = createBitmapByName("cherry_icon");
            this.cherry.x = (getWidth()-this.cherry.width)/2 + 200;
            this.cherry.y = (getHeight()-this.cherry.height)/2 + 300;
            this.addChild(this.cherry);

            this.fruitGroup = new lizhi.FruitGroup();
            this.fruitGroup.x = (getWidth()-this.fruitGroup.width)/2;//���ж�λ
            this.fruitGroup.y = (getHeight()-this.fruitGroup.height)/2;//���ж�λ
            this.fruitGroup.addEventListener("scoreAdd", this.onScoreAdd, this);
            this.fruitGroup.addEventListener("gameOver", this.onGameOver, this);
            this.addChild(this.fruitGroup);

            this.controlPanel = new lizhi.ControlPanel();
            this.controlPanel.x = (getWidth()-this.controlPanel.width)/2;//���ж�λ
            this.controlPanel.y = (getHeight()-this.controlPanel.height)/2;//���ж�λ
            this.addChild(this.controlPanel);
        }

        public canTouch() {
            this.litchi.touchEnabled = true;//��������
            this.litchi.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onLitchiTouch,this);//�����ť��ʼ��Ϸ
            this.cherry.touchEnabled = true;//��������
            this.cherry.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onCherryTouch,this);//�����ť��ʼ��Ϸ

        }

        private onLitchiTouch(evt:egret.TouchEvent):void {
            this.fruitGroup.down(FruitType.LITCHI);
        }

        private onCherryTouch(evt:egret.TouchEvent):void {
            this.fruitGroup.down(FruitType.CHERRY);
        }

        private onScoreAdd() {
            this.controlPanel.changeScore(Data.score);
        }

        public changeTime(time) {
            this.controlPanel.changeTime(time);
        }

        private onGameOver() {
            this.dispatchEventWith("gameOver");
        }

        public get getControlPanel():lizhi.ControlPanel {
            return this.controlPanel;
        }
    }

}