const Decorator = function(){
    this.stock = [];

};

Decorator.prototype.addPaint = function(paint){
    this.stock.push(paint)
}

Decorator.prototype.calculateStockLitres = function(){
    let total = 0;
    for (const paint of this.stock) {
        total += paint.litres;
    }
    return total;
}

Decorator.prototype.enoughPaintForRoom = function(room){
    return this.calculateStockLitres() >= room.area;

};

Decorator.prototype.paintRoom = function(room){
    if (!this.enoughPaintForRoom(room)){
        return;
    }

room.paintWalls();
}








module.exports = Decorator