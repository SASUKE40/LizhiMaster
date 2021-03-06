/**
 * Created by Administrator on 2015/4/7.
 */
var lizhi;
(function (lizhi) {
    var GameUtil = (function () {
        function GameUtil() {
        }
        /**
         * 基于矩形的碰撞检测
         */
        GameUtil.hitTest = function (obj1, obj2) {
            var rect1 = obj1.getBounds();
            var rect2 = obj2.getBounds();
            rect1.x = obj1.x;
            rect1.y = obj1.y;
            rect2.x = obj2.x;
            rect2.y = obj2.y;
            return rect1.intersects(rect2);
        };
        return GameUtil;
    })();
    lizhi.GameUtil = GameUtil;
    GameUtil.prototype.__class__ = "lizhi.GameUtil";
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     */
    function createBitmapByName(name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
    lizhi.createBitmapByName = createBitmapByName;
    function getHeight() {
        return egret.MainContext.instance.stage.stageHeight;
    }
    lizhi.getHeight = getHeight;
    function getWidth() {
        return egret.MainContext.instance.stage.stageWidth;
    }
    lizhi.getWidth = getWidth;
})(lizhi || (lizhi = {}));
