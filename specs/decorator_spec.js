const assert = require('assert')
const Paint = require('../paint.js')
const Room = require('../room.js')
const Decorator = require('../decorator.js')

describe('Decorator', function(){
    let room
    let decorator
    let paint1
    let paint2
    let paint3

    beforeEach(function(){
        room = new Room(15)
        decorator = new Decorator()
        paint1 = new Paint(10)
        paint2 = new Paint(5)
        paint3 = new Paint(0)
        
    });

    it('should start with an empty paint stock', function(){

        const actual = [];
        assert.deepStrictEqual(actual, decorator.stock)
    })

    it('should be able to add a can of paint to stock', function(){

        decorator.addPaint(paint1)
        const actual = [paint1];
        assert.deepStrictEqual(actual, decorator.stock)
        

    })

    it('should be able to calculate total litres of paint in stock', function(){
        decorator.addPaint(paint1);
        decorator.addPaint(paint2);
        const actual = 15;
        assert.strictEqual(actual, decorator.calculateStockLitres())
    })

    it('should be able calculate if it has enough paint to paint a room', function(){
        decorator.addPaint(paint1);
        decorator.addPaint(paint2);
        
        const actual = true
        assert.deepStrictEqual(actual, decorator.enoughPaintForRoom(room) )

    })

    it('should be able to paint a room if enough paint', function(){
        decorator.addPaint(paint1);
        decorator.addPaint(paint2);
        decorator.paintRoom(room);
        const actual = true
        assert.deepStrictEqual(actual, room.isPainted);
    })

    

});
