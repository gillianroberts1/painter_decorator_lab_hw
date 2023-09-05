const assert = require('assert')
const Paint = require('../paint.js')

describe('Piant', function(){
    let paint
    beforeEach(function(){
        paint = new Paint(10)
})

    it('should have 10litres of paint', function(){

        const actual = paint.litres;
        assert.strictEqual(actual, 10)
    })

    it('should be able to check if it is empty', function(){
        paint.empty();
        const actual = paint.litres;
        assert.strictEqual(actual, 0)
    })

    it('should be able to empty itself of paint', function(){
        paint.usePaint(10);
        const actual = paint.litres;
        assert.strictEqual(actual, 0)
    })

    

})