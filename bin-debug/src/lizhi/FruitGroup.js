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
    var FruitGroup = (function (_super) {
        __extends(FruitGroup, _super);
        function FruitGroup() {
            _super.call(this);
            this.fruits = [];
            this.levelScore = [20, 30, 40, 50];
            this.level = [0.75, 0.6, 0.4, 0.2];
            this.step = 180;
            this.fruitNumber = 4;
            this.createFruitGroup();
            this.litchiSound = RES.getRes("left");
            this.cherrySound = RES.getRes("right");
        }
        FruitGroup.prototype.createFruitGroup = function () {
            if (lizhi.Data.score < this.levelScore[0]) {
                for (var i = 0; i < this.fruitNumber; i++) {
                    var fruit = new lizhi.Fruit(this.level[0]);
                    this.fruits.push(fruit);
                    fruit.y = i * this.step;
                    this.addChild(fruit);
                }
            }
        };
        FruitGroup.prototype.down = function (fruitType) {
            //egret.Tween.get(this, { loop: false }).to({ y: 320 }, 2000);
            var lastFruit = this.fruits[this.fruits.length - 1];
            if (lastFruit.fruitType == fruitType) {
                this.fruits.pop();
                this.removeChild(lastFruit);
                if (lastFruit.fruitType == lizhi.FruitType.LITCHI) {
                    lizhi.Data.score++;
                    console.log(lizhi.Data.score);
                    this.litchiSound.play();
                }
                else {
                    this.cherrySound.play();
                }
                if (lizhi.Data.score < this.levelScore[0]) {
                    var fruit = new lizhi.Fruit(this.level[0]);
                    this.fruits.unshift(fruit);
                    fruit.y = -this.step;
                    this.addChild(fruit);
                }
                else if (lizhi.Data.score < this.levelScore[1]) {
                    var fruit = new lizhi.Fruit(this.level[1]);
                    this.fruits.unshift(fruit);
                    fruit.y = -this.step;
                    this.addChild(fruit);
                }
                else if (lizhi.Data.score < this.levelScore[2]) {
                    var fruit = new lizhi.Fruit(this.level[2]);
                    this.fruits.unshift(fruit);
                    fruit.y = -this.step;
                    this.addChild(fruit);
                }
                else if (lizhi.Data.score < this.levelScore[3]) {
                    var fruit = new lizhi.Fruit(this.level[3]);
                    this.fruits.unshift(fruit);
                    fruit.y = -this.step;
                    this.addChild(fruit);
                }
                else {
                    var fruit = new lizhi.Fruit(this.level[3]);
                    this.fruits.unshift(fruit);
                    fruit.y = -this.step;
                    this.addChild(fruit);
                }
                for (var i = 0, len = this.fruits.length; i < len; i++) {
                    var currentFruit = this.fruits[i];
                    egret.Tween.get(currentFruit, { loop: false }).to({ y: this.step * i }, 200);
                }
            }
            else {
                this.dispatchEventWith("gameOver");
            }
        };
        return FruitGroup;
    })(egret.Sprite);
    lizhi.FruitGroup = FruitGroup;
    FruitGroup.prototype.__class__ = "lizhi.FruitGroup";
})(lizhi || (lizhi = {}));
