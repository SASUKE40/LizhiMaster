/**
 * Created by Administrator on 2015/4/7.
 */
var lizhi;
(function (lizhi) {
    var Data = (function () {
        function Data() {
        }
        Data.score = 0;
        return Data;
    })();
    lizhi.Data = Data;
    Data.prototype.__class__ = "lizhi.Data";
})(lizhi || (lizhi = {}));
