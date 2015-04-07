/**
 * Created by Administrator on 2015/4/7.
 */
var lizhi;
(function (lizhi) {
    var FruitType = (function () {
        function FruitType() {
        }
        FruitType.LITCHI = "litchi";
        FruitType.CHERRY = "cherry";
        return FruitType;
    })();
    lizhi.FruitType = FruitType;
    FruitType.prototype.__class__ = "lizhi.FruitType";
})(lizhi || (lizhi = {}));
