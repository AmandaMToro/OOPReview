"use strict";
exports.__esModule = true;
exports.Mobile = void 0;
var Mobile = /** @class */ (function () {
    function Mobile(name, model, tradeMark, sdSize, color, is5G, cameraNumber, price) {
        this.name = name;
        this.model = model;
        this.tradeMark = tradeMark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5G = is5G;
        this.cameraNumber = cameraNumber;
        this.price = price;
    }
    Mobile.prototype.getName = function () {
        return this.name;
    };
    Mobile.prototype.setName = function (nueva) {
        this.name = nueva;
    };
    Mobile.prototype.getModel = function () {
        return this.model;
    };
    Mobile.prototype.setModel = function (nueva) {
        this.model = nueva;
    };
    Mobile.prototype.getTradeMark = function () {
        return this.tradeMark;
    };
    Mobile.prototype.setTradeMark = function (nueva) {
        this.tradeMark = nueva;
    };
    Mobile.prototype.getSdSize = function () {
        return this.sdSize;
    };
    Mobile.prototype.setSdSize = function (nueva) {
        this.sdSize = nueva;
    };
    Mobile.prototype.getColor = function () {
        return this.color;
    };
    Mobile.prototype.setColor = function (nueva) {
        this.color = nueva;
    };
    Mobile.prototype.getIs5G = function () {
        return this.is5G;
    };
    Mobile.prototype.setIs5G = function (nueva) {
        this.is5G = nueva;
    };
    Mobile.prototype.getCameraNumber = function () {
        return this.cameraNumber;
    };
    Mobile.prototype.setCameraNumber = function (nueva) {
        this.cameraNumber = nueva;
    };
    Mobile.prototype.getPrice = function () {
        return this.price;
    };
    Mobile.prototype.setPrice = function (nueva) {
        this.price = nueva;
    };
    Mobile.prototype.características = function () {
        var todasLasCaracterísticas = (" Name" + ": " + this.name + "\n" + " Model" + ": " + this.model + "\n" + " Trademark" + ": " + this.tradeMark + "\n" + " SD size" + ": " + this.sdSize + "\n" + " Color" + ": " + this.color + "\n" + " Is 5G?" + ": " + this.is5G + "\n" + " Number of Cameras" + ": " + this.cameraNumber + "\n" + " Price" + ": " + this.price + "\n");
        return todasLasCaracterísticas;
    };
    Mobile.prototype.imprimirObjetos = function (arrayMobile) {
        var resultado = ""; //hacerlo para no poner dos log; CARACterísticas ya te hace un log
        for (var i = 0; i < arrayMobile.length; i++) {
            resultado = arrayMobile[i].características();
        }
        return resultado;
    };
    return Mobile;
}());
exports.Mobile = Mobile;
