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
    var Fruit = (function (_super) {
        __extends(Fruit, _super);
        function Fruit(rate) {
            _super.call(this);
            this._fruitType = lizhi.FruitType.CHERRY;
            var r = Math.random();
            if (r <= rate) {
                this._fruitType = lizhi.FruitType.LITCHI;
                this.texture = RES.getRes("lizhi");
            }
            else {
                r = Math.random();
                if (r < 0.5) {
                    this.texture = RES.getRes(this._fruitType + "_1");
                }
                else {
                    this.texture = RES.getRes(this._fruitType + "_2");
                }
            }
        }
        Object.defineProperty(Fruit.prototype, "fruitType", {
            get: function () {
                return this._fruitType;
            },
            enumerable: true,
            configurable: true
        });
        return Fruit;
    })(egret.Bitmap);
    lizhi.Fruit = Fruit;
    Fruit.prototype.__class__ = "lizhi.Fruit";
})(lizhi || (lizhi = {}));
