/**
 * Created by Administrator on 2015/4/7.
 */
var lizhi;
(function (lizhi) {
    var GameUtil = (function () {
        function GameUtil() {
        }
        /**
         * ���ھ��ε���ײ����
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
     * ����name�ؼ��ִ���һ��Bitmap������name�������ο�resources/resource.json�����ļ������ݡ�
     */
    function createBitmapByName(name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
    lizhi.createBitmapByName = createBitmapByName;
})(lizhi || (lizhi = {}));
