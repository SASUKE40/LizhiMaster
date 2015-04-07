/**
 * Created by Administrator on 2015/4/7.
 */
module lizhi {

    export class Fruit extends egret.Bitmap {

        private _fruitType:string = FruitType.CHERRY;

        public constructor(rate:number) {
            super();
            var r:number = Math.random();
            if (r <= rate) {
                this._fruitType = FruitType.LITCHI;
                this.texture = RES.getRes("lizhi");
            } else {
                r = Math.random();
                if (r < 0.5) {
                    this.texture = RES.getRes(this._fruitType+"_1");
                } else {
                    this.texture = RES.getRes(this._fruitType+"_2");
                }
            }
        }

        public get fruitType():FruitType {
            return this._fruitType;
        }
    }
}