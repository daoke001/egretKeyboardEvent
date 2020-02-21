var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Keyboard = (function (_super) {
    __extends(Keyboard, _super);
    function Keyboard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Keyboard, "ins", {
        get: function () {
            if (Keyboard._ins == null) {
                Keyboard._ins = new Keyboard();
                Keyboard._ins.initEvent();
            }
            return Keyboard._ins;
        },
        enumerable: true,
        configurable: true
    });
    /**
    * 添加事件监听
    */
    Keyboard.prototype.initEvent = function () {
        window.addEventListener("keydown", this.onKeyDownHandler.bind(this), false);
        window.addEventListener("keyup", this.onKeyUpHandler.bind(this), false);
    };
    Keyboard.prototype.onKeyDownHandler = function (e) {
        // console.log(e);
        this.dispatchEventWith(Keyboard.keydown, false, e); //按健（下）事件
    };
    Keyboard.prototype.onKeyUpHandler = function (e) {
        // console.log(e);
        this.dispatchEventWith(Keyboard.keyup, false, e); //按健（上）事件
    };
    /**
     * 键盘事件控制
     */
    Keyboard.keydown = "keydown";
    Keyboard.keyup = "keyup";
    return Keyboard;
}(egret.EventDispatcher));
__reflect(Keyboard.prototype, "Keyboard");
//# sourceMappingURL=Keyboard.js.map