class Keyboard extends egret.EventDispatcher
{
    /**
     * 键盘事件控制
     */
    public static keydown:string = "keydown";
    public static keyup:string = "keyup";

    private static _ins:Keyboard;
	public static get ins():Keyboard
	{
		if(Keyboard._ins == null){
            Keyboard._ins = new Keyboard();
            Keyboard._ins.initEvent();
        }
		return Keyboard._ins;
    }
     /**
     * 添加事件监听
     */
    private initEvent():void
    {
        window.addEventListener( "keydown", this.onKeyDownHandler.bind(this), false);
        window.addEventListener( "keyup", this.onKeyUpHandler.bind(this), false);
    }
    private onKeyDownHandler(e:KeyboardEvent)
    {
        // console.log(e);
        this.dispatchEventWith(Keyboard.keydown,false,e);   //按健（下）事件
    }
    private onKeyUpHandler(e:KeyboardEvent)
    {
        // console.log(e);
         this.dispatchEventWith(Keyboard.keyup,false,e);   //按健（上）事件
    }
}