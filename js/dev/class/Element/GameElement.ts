export abstract class GameElement{
    
    private x:number;
    private y:number;

    private visibility:boolean;

    constructor(x:number, y:number){
        this.x = x;
        this.y = y;
        this.visibility = true;
    }

    public abstract draw(ctx:any):void;

    public getX():number{
        return this.x;
    }

    public getY():number{
        return this.y;
    }


    public setX(x:number):void{
        this.x = x;
    }

    public setY(y:number):void{
        this.y = y;
    }


    public setVisible(visibility){
        this.visibility = visibility;
    }

    public visible(){
        return this.visibility;
    }

}