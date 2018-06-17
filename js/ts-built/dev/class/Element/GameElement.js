var GameElement = (function () {
    function GameElement(x, y) {
        this.x = x;
        this.y = y;
        this.visibility = true;
    }
    GameElement.prototype.getX = function () {
        return this.x;
    };
    GameElement.prototype.getY = function () {
        return this.y;
    };
    GameElement.prototype.setX = function (x) {
        this.x = x;
    };
    GameElement.prototype.setY = function (y) {
        this.y = y;
    };
    GameElement.prototype.setVisible = function (visibility) {
        this.visibility = visibility;
    };
    GameElement.prototype.visible = function () {
        return this.visibility;
    };
    return GameElement;
}());
export { GameElement };
