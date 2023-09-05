const assert = require('assert')
const Room = require('../room.js')

describe('Room', function(){
    let room
    beforeEach(function(){
        room = new Room(200)
        
    })

    it('should have an area', function(){

        const actual = room.area;
        assert.strictEqual(actual, 200)
    })

    it('should start not painted', function(){

        const actual = room.isPainted;
        assert.strictEqual(actual, false)
    })
    
    it('should be able to be painted', function(){
        room.paintWalls();
        const actual = room.isPainted;
        assert.strictEqual(actual, true)
        
    })
})