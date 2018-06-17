import { UMI } from "./UMI.js";
import { Polygon } from "../Element/Polygon.js";
import { Circle } from "../Element/Circle.js";
import { Rect } from "../Element/Rect.js";
import { PHY } from "./PHY.js";

export class Screen {

    private x = 1800;
    private width = 1800;
    private minx = 200;
    private miny = 150;
    private y = 500;
    private objReference;
    private last_x;
    private last_y;

    private fixed = false;
    private regRefX = 0;
    private regRefY = 0;

    constructor(objReference){
        this.objReference = objReference;
        this.last_x = objReference.getX();
        this.last_y = objReference.getY();

        this.x = objReference.getX();
        this.y = objReference.getY();
        this.minx = objReference.getX();
        this.miny = objReference.getY();

        this.regRefX = UMI.getUMIsWidth()/2 - this.objReference.getX();
        this.regRefY = UMI.getUMIsHeight()/2 - this.objReference.getY();
        this.fixed = true;
        

    }

    public centerObjReference(){

            this.x = this.objReference.getX();
            this.y = this.objReference.getY();
            this.minx = this.objReference.getX();
            this.miny = this.objReference.getY();
            
            
            this.regRefX = UMI.getUMIsWidth()/2 - this.objReference.getX();
            this.regRefY = UMI.getUMIsHeight()/2 - this.objReference.getY();
            
        

    }

    public setObjReference(obj){
        this.objReference = obj;
    }


    public getX(){
        if(this.objReference.getX() > this.x) return this.x - this.objReference.getX() + this.regRefX;
        else if(this.objReference.getX() < this.minx) return -(this.objReference.getX() - this.minx)+this.regRefX;
        else return 0+this.regRefX;
    }

    public getY(){
        if(this.objReference.getY() > this.y) return this.y - this.objReference.getY()+this.regRefY;
        else if(this.objReference.getY() < this.miny) return -(this.objReference.getY() - this.miny)+this.regRefY;
        else return 0+this.regRefY;
    }


    public refX(){
        if(this.objReference.getX() > this.x) return this.x+this.regRefX;
        else if(this.objReference.getX() < this.minx) return this.minx+this.regRefX;
        else return this.objReference.getX()+this.regRefX;
    }

    public refY(){
        if(this.objReference.getY() > this.y) return this.y+this.regRefY;
        else if(this.objReference.getY() < this.miny) return this.miny+this.regRefY;
        else return this.objReference.getY()+this.regRefY;
    }

    public reverseRefY(){
        if(this.objReference.getY() > this.y || this.objReference.getY() < this.miny) return -this.objReference.getY()+this.regRefY;
        else return 0+this.regRefY;
    }
    
    public reverseRefX(){
        if(this.objReference.getX() > this.x || this.objReference.getX() < this.minx) return -this.objReference.getX()+this.regRefY;
        else return this.regRefY;
    }

    public objInScreen(obj):boolean{
        var r = false;
        var rangeX = UMI.getUMIsWidth()/1.5;
        var rangeY = UMI.getUMIsHeight()/1.5;

        if(obj instanceof Circle){
            r = PHY.getDistanceBetween(obj.getX(), obj.getY(), this.objReference.getX(), this.objReference.getY())-obj.getRadio() < UMI.getUMIsWidth()/1.5;
        } else if (obj instanceof Polygon || obj instanceof Rect){
            r = obj.getMinX() < this.objReference.getX()+rangeX || obj.getMaxX() > this.objReference.getX()-rangeX
                || obj.getMinY() < this.objReference.getY()+rangeY || obj.getMaxY() > this.objReference.getY()-rangeY;
        }
       
        return r;
    }
}