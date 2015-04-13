/**
 * Created by Administrator on 2015/4/7.
 */
module lizhi {

    /**
     * 遊戲面板類
     */
    export class GamePanel extends egret.Sprite {

        /**頂部圖片*/
        private topMost:egret.Bitmap;
        /**荔枝按鈕*/
        private litchi:egret.Bitmap;
        /**櫻桃按鈕*/
        private cherry:egret.Bitmap;
        /**水果組合*/
        private fruitGroup:lizhi.FruitGroup;
        /**控制面板*/
        private controlPanel:lizhi.ControlPanel;

        public constructor() {
            super();
            this.createGamePanel();
        }

        private createGamePanel() {
            this.width = getWidth();
            this.height = getHeight();

            // 頂部banner
            this.topMost = createBitmapByName("most_top");
            this.topMost.x = (getWidth()-this.topMost.width)/2;//居中定位
            this.topMost.y = 0;//居頂
            this.addChild(this.topMost);

            // 左邊荔枝按鈕
            this.litchi = createBitmapByName("lizhi_icon");
            this.litchi.x = (getWidth()-this.litchi.width)/2 - 200;
            this.litchi.y = (getHeight()-this.litchi.height)/2 + 300;
            this.addChild(this.litchi);

            // 右邊櫻桃按鈕
            this.cherry = createBitmapByName("cherry_icon");
            this.cherry.x = (getWidth()-this.cherry.width)/2 + 200;
            this.cherry.y = (getHeight()-this.cherry.height)/2 + 300;
            this.addChild(this.cherry);

            // 水果組
            this.fruitGroup = new lizhi.FruitGroup();
            this.fruitGroup.x = (getWidth()-this.fruitGroup.width)/2;//居中定位
            this.fruitGroup.y = (getHeight()-this.fruitGroup.height)/2;//居中定位
            this.fruitGroup.addEventListener("scoreAdd", this.onScoreAdd, this);
            this.fruitGroup.addEventListener("gameOver", this.onGameOver, this);
            this.addChild(this.fruitGroup);

            // 控製面板
            this.controlPanel = new lizhi.ControlPanel();
            this.controlPanel.x = (getWidth()-this.controlPanel.width)/2;//居中定位
            this.controlPanel.y = (getHeight()-this.controlPanel.height)/2;//居中定位
            this.addChild(this.controlPanel);
        }

        /**
         * 開啟遊戲觸摸
         */
        public canTouch() {
            this.litchi.touchEnabled = true;//开启触碰
            this.litchi.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onLitchiTouch,this);//荔枝按鈕事件
            this.cherry.touchEnabled = true;//开启触碰
            this.cherry.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onCherryTouch,this);//櫻桃按鈕事件

        }

        /**
         * 荔枝按鈕事件
         * @param evt
         */
        private onLitchiTouch(evt:egret.TouchEvent):void {
            this.fruitGroup.down(FruitType.LITCHI);
        }

        /**
         * 櫻桃按鈕事件
         * @param evt
         */
        private onCherryTouch(evt:egret.TouchEvent):void {
            this.fruitGroup.down(FruitType.CHERRY);
        }

        /**
         * 分數增加響應
         */
        private onScoreAdd() {
            this.controlPanel.changeScore(Data.score);
        }

        /**
         * 時間更新響應
         * @param time
         */
        public changeTime(time) {
            this.controlPanel.changeTime(time);
        }

        /**
         * 遊戲結束事件
         */
        private onGameOver() {
            this.dispatchEventWith("gameOver");
        }

        /**
         * 獲取控製面板對象
         * @returns {lizhi.ControlPanel}
         */
        public get getControlPanel():lizhi.ControlPanel {
            return this.controlPanel;
        }
    }

}