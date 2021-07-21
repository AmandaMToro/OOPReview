"use strict";
exports.__esModule = true;
var mobile_1 = require("./mobile");
var arrayMobile;
var xiaomi = new mobile_1.Mobile("xiaomi", "st", "xiaomi", "56GB", "negro", false, 1, 160);
var Huawei = new mobile_1.Mobile("Huawei", "nitro", "Huawei", "190GB", "verde", true, 5, 190);
var Sony = new mobile_1.Mobile("Sony", "XPeria", "Sony", "60GB", "naranja", true, 2, 150);
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
function mostrarTodos() {
    for (var i = 0; i < arrayMobile.length; i++) {
        console.log(arrayMobile[i].características());
    }
}
mostrarTodos();
