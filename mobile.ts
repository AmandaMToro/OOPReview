
 export class Mobile
{   
  
    private name:string;
    private model:string;
    private tradeMark:string;
    private sdSize:string;
    private color:string;
    private is5G:boolean;
    private cameraNumber:number;
    private price:number;
    constructor( name:string, model:string, tradeMark:string, sdSize:string, color:string, is5G:boolean, cameraNumber:number, price:number )
    {
        this.name = name;
        this.model = model;
        this.tradeMark = tradeMark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5G = is5G;
        this.cameraNumber = cameraNumber
        this.price = price;
    }
    public getName():string
    {
        return this.name
    }
    public setName(nueva:string)
    {
        this.name= nueva;
    }

    public getModel():string
    {
        return this.model
    }
    public setModel(nueva:string)
    {
        this.model= nueva;
    }

    public getTradeMark():string
    {
        return this.tradeMark
    }
    public setTradeMark(nueva:string)
    {
        this.tradeMark= nueva;
    }

    public getSdSize():string
    {
        return this.sdSize
    }
    public setSdSize(nueva:string)
    {
        this.sdSize= nueva;
    }

    public getColor():string
    {
        return this.color
    }
    public setColor(nueva:string)
    {
        this.color = nueva;
    }

    public getIs5G():Boolean
    {
        return this.is5G
    }
    public setIs5G(nueva:boolean)
    {
        this.is5G= nueva;
    }
    public getCameraNumber():number
    {
        return this.cameraNumber
    }
    public setCameraNumber(nueva:number):void
    {
        this.cameraNumber= nueva;
    }

    public getPrice():number
    {
        return this.price
    }
    public setPrice(nueva:number)
    {
        this.price = nueva;
    }

    public características():string
    {
        let todasLasCaracterísticas: string = (" Name" + ": " + this.name + "\n" + " Model" + ": " + this.model  +"\n" + " Trademark" + ": " + this.tradeMark + "\n" + " SD size" + ": " + this.sdSize +"\n" + " Color" + ": " + this.color + "\n" + " Is 5G?" + ": " + this.is5G  + "\n" + " Number of Cameras"  + ": " + this.cameraNumber + "\n" + " Price" + ": " + this.price  + "\n")
        return todasLasCaracterísticas;
    }
    
     public imprimirObjetos(arrayMobile):string
    {
        let resultado:string = ""; //hacerlo para no poner dos log; CARACterísticas ya te hace un log
        for (let i=0; i<arrayMobile.length; i++)
        {
        resultado = arrayMobile[i].características();        
        }
        return resultado
}
}






