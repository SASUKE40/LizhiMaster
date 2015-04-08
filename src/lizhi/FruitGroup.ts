/**
 * Created by Administrator on 2015/4/7.
 */
module lizhi {

    export class FruitGroup extends egret.Sprite {

        private fruits:Array<Fruit> = [];
        private levelScore:Array<number> = [20,30,40,50];
        private level:Array<number> = [0.5,0.4,0.3,0.2];
        private step:number = 200;
        private fruitNumber:number = 4;
        /**荔枝聲音*/
        private litchiSound:egret.Sound;
        /**櫻桃聲音*/
        private cherrySound:egret.Sound;
        public constructor() {
            super();
            this.createFruitGroup();
            this.litchiSound = RES.getRes("left");
            this.cherrySound = RES.getRes("right");
        }

        private createFruitGroup() {
            if(Data.score < this.levelScore[0]){
                for(var i = 0;i < this.fruitNumber;i++){
                    var fruit = new Fruit(this.level[0]);
                    this.fruits.push(fruit);
                    fruit.y = i * this.step;
                    this.addChild(fruit);
                }
            }
        }

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