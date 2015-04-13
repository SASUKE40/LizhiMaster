/**
 * Created by Administrator on 2015/4/7.
 */
module lizhi {

    /**
     * �[������
     */
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

            // 픲�banner
            this.topMost = createBitmapByName("most_top");
            this.topMost.x = (getWidth()-this.topMost.width)/2;//���ж�λ
            this.topMost.y = 0;//���
            this.addChild(this.topMost);

            // ��߅��֦���o
            this.litchi = createBitmapByName("lizhi_icon");
            this.litchi.x = (getWidth()-this.litchi.width)/2 - 200;
            this.litchi.y = (getHeight()-this.litchi.height)/2 + 300;
            this.addChild(this.litchi);

            // ��߅���Ұ��o
            this.cherry = createBitmapByName("cherry_icon");
            this.cherry.x = (getWidth()-this.cherry.width)/2 + 200;
            this.cherry.y = (getHeight()-this.cherry.height)/2 + 300;
            this.addChild(this.cherry);

            // ˮ���M
            this.fruitGroup = new lizhi.FruitGroup();
            this.fruitGroup.x = (getWidth()-this.fruitGroup.width)/2;//���ж�λ
            this.fruitGroup.y = (getHeight()-this.fruitGroup.height)/2;//���ж�λ
            this.fruitGroup.addEventListener("scoreAdd", this.onScoreAdd, this);
            this.fruitGroup.addEventListener("gameOver", this.onGameOver, this);
            this.addChild(this.fruitGroup);

            // ���u���
            this.controlPanel = new lizhi.ControlPanel();
            this.controlPanel.x = (getWidth()-this.controlPanel.width)/2;//���ж�λ
            this.controlPanel.y = (getHeight()-this.controlPanel.height)/2;//���ж�λ
            this.addChild(this.controlPanel);
        }

        /**
         * �_���[���|��
         */
        public canTouch() {
            this.litchi.touchEnabled = true;//��������
            this.litchi.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onLitchiTouch,this);//��֦���o�¼�
            this.cherry.touchEnabled = true;//��������
            this.cherry.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onCherryTouch,this);//���Ұ��o�¼�

        }

        /**
         * ��֦���o�¼�
         * @param evt
         */
        private onLitchiTouch(evt:egret.TouchEvent):void {
            this.fruitGroup.down(FruitType.LITCHI);
        }

        /**
         * ���Ұ��o�¼�
         * @param evt
         */
        private onCherryTouch(evt:egret.TouchEvent):void {
            this.fruitGroup.down(FruitType.CHERRY);
        }

        /**
         * �֔�����푑�
         */
        private onScoreAdd() {
            this.controlPanel.changeScore(Data.score);
        }

        /**
         * �r�g����푑�
         * @param time
         */
        public changeTime(time) {
            this.controlPanel.changeTime(time);
        }

        /**
         * �[��Y���¼�
         */
        private onGameOver() {
            this.dispatchEventWith("gameOver");
        }

        /**
         * �@ȡ���u��匦��
         * @returns {lizhi.ControlPanel}
         */
        public get getControlPanel():lizhi.ControlPanel {
            return this.controlPanel;
        }
    }

}