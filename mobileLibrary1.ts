import { Mobile } from './mobile';

export class MobileLibrary
{
    private name:string;
    private location: string;
    private mobiles: Mobile[];
    private totalprice: number;



    constructor(name:string, location: string, mobiles: Mobile[])
    {
        this.name= name;
        this.location=location;
        this.mobiles=mobiles;
        this.totalprice=this.totalPriceCalculation();
       
        
    }
    public getName(): string {
        return this.name;
    }

    public setName(newName: string) {
       return this.name = newName;
    }

    public getLocation(): string {
        return this.location;
    }

    public setLocation(newLocation: string) {
        return this.location = newLocation;
    }

    public getMobiles() {
        return this.mobiles;
    }

    public setMobiles(newMobiles:[]) {
        return this.mobiles = newMobiles;
    }

    public getTotalprice(): number {
        return this.totalprice;
    }

    public setTotalprice(newTotalPrice: number) {
       return this.totalprice = newTotalPrice;
    }


    public totalPriceCalculation()
    {
       let sumAllPrices: number=0;
       for (let key in this.mobiles)
       {
        sumAllPrices += this.mobiles[key].getPrice();
       }
        return sumAllPrices;
    }

    public printAll ()
    {   
        let printAtrib:string ="";
        console.log("This is all my mobiles: ");
        
        for(let key in this.mobiles)
        {   
            printAtrib += " The characteristics of the mobile name are:  " + 
                "\n" + " Name: " + this.mobiles[key].getName() + 
                "\n" + " Model: " + this.mobiles[key].getModel() +
                "\n" +" Trademark: " + this.mobiles[key].getTradeMark() +
                "\n"+ " SD Size: " +this.mobiles[key].getSdSize() +
                "\n"+ " Color: " + this.mobiles[key].getColor() +
                "\n"+ " Is 5G?: " + this.mobiles[key].getIs5G() +
                "\n"+ " Number of Cameras: " + this.mobiles[key].getCameraNumber() + "\n";
               
        }  
        return printAtrib
    }      
    
}
      


        


  

   
  
    




