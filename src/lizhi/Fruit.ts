/**
 * Created by Administrator on 2015/4/7.
 */
module lizhi {

    /**
     * 水果類
     */
    export class Fruit extends egret.Bitmap {

        // 默認水果類型為櫻桃
        private _fruitType:string = FruitType.CHERRY;

        public constructor(rate:number) {
            super();
            // 根據權重決定荔枝生成幾率
            var r:number = Math.random();
            if (r <= rate) {
                this._fruitType = FruitType.LITCHI;
                this.texture = RES.getRes("lizhi");
            } else {
                r = Math.random();
                // 隨機出現櫻桃類型
                if (r < 0.5) {
                    this.texture = RES.getRes(this._fruitType+"_1");
                } else {
                    this.texture = RES.getRes(this._fruitType+"_2");
                }
            }
        }

        /**
         * 獲取水果類型
         * @returns {string}
         */
        public get fruitType():FruitType {
            return this._fruitType;
        }
    }
}