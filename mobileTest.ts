import{Mobile} from "./mobile"

let nokia3210:Mobile = new Mobile("nokia", "3210", "nokia","512GB","azul",false, 1 ,90)
let iphone3G: Mobile = new Mobile("Iphone", "8", "apple","256GB","Blanco", true, 3 ,400 )
let samsungGalaxy10: Mobile = new Mobile("Samsung", "Galaxy10","Samsung","128GB", "rosa", true, 2, 190 )


console.log("NOKIA 3210");
console.log(nokia3210);
console.log("IPHONE3G");
console.log(iphone3G);
console.log("SAMSUNG GALAXY10");
console.log(samsungGalaxy10);

console.log("NOKIA CON LOS CAMBIOS");
nokia3210.cameraNumber = 4;
nokia3210.is5G = true
console.log(nokia3210);




