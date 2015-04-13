/**
 * Created by Administrator on 2015/4/7.
 */
module lizhi {

    /**
     * 水果組類
     */
    export class FruitGroup extends egret.Sprite {

        // 水果數組
        private fruits:Array<Fruit> = [];
        // 遊戲分數級別
        private levelScore:Array<number> = [20,30,40,50];
        // 遊戲難度級別
        private level:Array<number> = [0.5,0.4,0.4,0.4];
        // 水果步數
        private step:number = 200;
        // 水果數量
        private fruitNumber:number = 4;
        // 荔枝聲音
        private litchiSound:egret.Sound;
        // 櫻桃聲音
        private cherrySound:egret.Sound;
        public constructor() {
            super();
            this.createFruitGroup();
            // 初始化音頻資源
            this.litchiSound = RES.getRes("left");
            this.cherrySound = RES.getRes("right");
        }

        /**
         * 創建水果組
         */
        private createFruitGroup() {
            if(Data.score < this.levelScore[0]){
                for(var i = 0;i < this.fruitNumber;i++){
                    var fruit = new Fruit(this.level[0]);
                    this.fruits.push(fruit);
                    // 水果垂直軸位移
                    fruit.y = i * this.step;
                    this.addChild(fruit);
                }
            }
        }

        /**
         * 下一個水果
         * @param fruitType
         */
        public down(fruitType:FruitType) {
            //egret.Tween.get(this, { loop: false }).to({ y: 320 }, 2000);
            var lastFruit = this.fruits[this.fruits.length-1];
            if(lastFruit.fruitType == fruitType){
                this.fruits.pop();
                this.removeChild(lastFruit);
                if(lastFruit.fruitType == FruitType.LITCHI) {
                    Data.score++;
                    this.dispatchEventWith("scoreAdd");
                    if(Data.soundFlat) {
                        this.litchiSound.play();
                    }
                } else {
                    if(Data.soundFlat) {
                        this.cherrySound.play();
                    }
                }
                if(Data.score < this.levelScore[0]) {
                    var fruit = new Fruit(this.level[0]);
                    this.fruits.unshift(fruit);
                    fruit.y = -this.step;
                    this.addChild(fruit);
                } else if (Data.score < this.levelScore[1]) {
                    var fruit = new Fruit(this.level[1]);
                    this.fruits.unshift(fruit);
                    fruit.y = -this.step;
                    this.addChild(fruit);
                } else if (Data.score < this.levelScore[2]) {
                    var fruit = new Fruit(this.level[2]);
                    this.fruits.unshift(fruit);
                    fruit.y = -this.step;
                    this.addChild(fruit);
                } else if (Data.score < this.levelScore[3]) {
                    var fruit = new Fruit(this.level[3]);
                    this.fruits.unshift(fruit);
                    fruit.y = -this.step;
                    this.addChild(fruit);
                } else {
                    var fruit = new Fruit(this.level[3]);
                    this.fruits.unshift(fruit);
                    fruit.y = -this.step;
                    this.addChild(fruit);
                }
                for(var i = 0,len = this.fruits.length; i < len;i++){
                    var currentFruit = this.fruits[i];
                    egret.Tween.get(currentFruit, { loop: false }).to({ y: this.step * i }, 200);
                }
            } else {
                this.dispatchEventWith("gameOver");
            }
        }
    }
}