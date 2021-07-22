import { Mobile } from './mobile';
let arrayMobile: Mobile[]

let xiaomi:Mobile = new Mobile("xiaomi", "st", "xiaomi","56GB","negro",false, 1 ,160)
let Huawei: Mobile = new Mobile("Huawei", "nitro", "Huawei","190GB","verde", true, 5, 190 )
let Sony: Mobile = new Mobile("Sony", "XPeria","Sony","60GB", "naranja", true, 2, 150 )

console.log("XIAOMI");
console.log(xiaomi);
console.log("HUAWEI");
console.log(Huawei);
console.log("SONY");
console.log(Sony);


console.log("XIAOMI CAMBIADO");
xiaomi.setCameraNumber(5);
xiaomi.setIs5G(true);
console.log(xiaomi);



console.log("TODOS ARRAY");
arrayMobile = [xiaomi, Huawei, Sony];

    function mostrarTodos()
{
    for(let i= 0; i<arrayMobile.length; i++)
    {
        console.log(arrayMobile[i].características());
    
    }
}
mostrarTodos()

 
