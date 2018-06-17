var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { GameElement } from './GameElement.js';
import { UMI } from '../Logic/UMI.js';
var Polygon = (function (_super) {
    __extends(Polygon, _super);
    function Polygon(x, y, polygons, color, img) {
        var _this = _super.call(this, x, y) || this;
        _this.width = 0;
        _this.height = 0;
        _this.minX = 999999999;
        _this.minY = 999999999;
        _this.maxX = 0;
        _this.maxY = 0;
        _this.color = color;
        _this.polygons = polygons;
        _this.updatePolygonsOnMap();
        for (var i = 0; i < _this.polygons.length; i++) {
            if (_this.polygons[i][0] > _this.maxX)
                _this.maxX = _this.polygons[i][0];
            if (_this.polygons[i][1] > _this.maxY)
                _this.maxY = _this.polygons[i][1];
            if (_this.polygons[i][0] < _this.minX)
                _this.minX = _this.polygons[i][1];
            if (_this.polygons[i][1] < _this.minY)
                _this.minY = _this.polygons[i][1];
        }
        _this.maxX += _this.getX();
        _this.maxY += _this.getY();
        return _this;
    }
    Polygon.prototype.getMinX = function () {
        return this.getX();
    };
    Polygon.prototype.getMinY = function () {
        return this.getY();
    };
    Polygon.prototype.getMaxX = function () {
        return this.maxX;
    };
    Polygon.prototype.getMaxY = function () {
        return this.maxY;
    };
    Polygon.prototype.getWidth = function () {
        return this.width;
    };
    Polygon.prototype.getHeight = function () {
    };
    Polygon.prototype.updatePolygonsOnMap = function () {
        this.polygonsOnMap = [];
        for (var i = 0; i < this.polygons.length; i++) {
            this.polygonsOnMap.push([this.polygons[i][0] + this.getX(), this.polygons[i][1] + this.getY()]);
        }
    };
    Polygon.prototype.draw = function (ctx) {
        ctx.fillStyle = this.color;
        ctx.strokeStyke = this.color;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(UMI.screenX(this.getX() + this.polygons[0][0]), UMI.screenY(this.getY() + this.polygons[0][1]));
        for (var i = 1; i < this.polygons.length; i++) {
            ctx.lineTo(UMI.screenX(this.getX() + this.polygons[i][0]), UMI.screenY(this.getY() + this.polygons[i][1]));
        }
        ctx.closePath();
        ctx.fill();
    };
    Polygon.prototype.getPoints = function () {
        return this.polygonsOnMap;
    };
    Polygon.prototype.objOutBounds = function (obj) {
        return obj.getX() < this.getX() || obj.getY() < this.getY() || obj.getX() > this.maxX || obj.getY() > this.maxY;
    };
    Polygon.prototype.circleOutBounds = function (obj) {
        return obj.getX() + obj.getRadio() < this.getX() || obj.getY() + obj.getRadio() < this.getY() || obj.getX() - obj.getRadio() > this.maxX || obj.getY() - obj.getRadio() > this.maxY;
    };
    Polygon.prototype.cordOutBounds = function (x, y) {
        return x < this.getX() || y < this.getY() || x > this.maxX || y > this.maxY;
    };
    return Polygon;
}(GameElement));
export { Polygon };
