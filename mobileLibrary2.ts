import { Mobile } from './mobile';
import { MobileLibrary } from './mobileLibrary1';



let Xiaomi: Mobile = new Mobile("Xiaomi", "plusA","Xiaomi","164GB", "Amarillo", true, 4, 200);
let Oppo: Mobile = new Mobile("OPPO","Find X3", "Oppo", "128GB","Rose Gold", true, 5, 200);
let Sony: Mobile = new Mobile ("Sony", "Xperia 25", "Sony", "160GB", "rojo", true, 3, 150);
let Iphone: Mobile = new Mobile("Iphone", "12", "Apple", "125GB", "negro", true, 8, 900);

let allMobiles = [Xiaomi,Oppo,Sony,Iphone];
 
let asignArray = new MobileLibrary("Alcatel","Rusia",allMobiles);
let nuevaArray= new MobileLibrary("Sony","class2", [ Iphone, Oppo, Sony])

console.log("totalPriceCalculation");
console.log(asignArray.totalPriceCalculation());


console.log("getName");
console.log(asignArray.getName());

console.log("setName");
console.log(asignArray.setName("vivo"));

console.log("getLocation");
console.log(asignArray.getLocation());

console.log("setLocation");
console.log(asignArray.setLocation("Algodonales"));

console.log("getMobiles");
console.log(asignArray.getMobiles());

console.log("setMobiles");
console.log(asignArray.setMobiles([]));

console.log("getTotalPrice");
console.log(asignArray.getTotalprice());

console.log("setTotalPrice");
console.log(asignArray.setTotalprice(500));


console.log("ultimo ejercicio");
console.log(nuevaArray.printAll());
console.log("Priceoverall:  " + nuevaArray.totalPriceCalculation());












