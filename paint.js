const Paint = function(litres){
    this.litres = litres
}

Paint.prototype.checkLitres = function(litres){
    this.litres(litres)
}

Paint.prototype.empty = function(litres){
    this.litres = 0;
    
}

Paint.prototype.usePaint = function(litres){
    this.litres -= litres;
    
};





module.exports = Paint