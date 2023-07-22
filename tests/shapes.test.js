const Shapes = require('../lib/shapes.js')

const input = {
    text: 'exp',
    color: 'blue',
    shape: 'Circle',
    shapeColor: 'blue'
}

describe('Shapes', () => {

    describe('Circle', () => {
        test('should return a string with html code that renders a blue circle', () => {
            const newCircle = new Shapes(
                input.text,
                input.color,
                input.shape, 
                input.shapeColor
                )
            expect(newCircle.shapeFunction(newCircle)).toEqual('<circle cx="150" cy="100" r="80" fill="blue"/>');
        })
    })

    describe('Square', () => {
        test('should return a string with html code that renders a blue square', () => {
            input.shape = 'Square'
            const newSquare = new Shapes(
                input.text,
                input.color,
                input.shape, 
                input.shapeColor
                )
            expect(newSquare.shapeFunction(newSquare)).toEqual('<rect x="90" y="40" width="120" height="120" fill="blue"/>');
        })
    })

    describe('Triangle', () => {
        test('should return a string with html code that renders a blue triangle', () => {
            input.shape = 'Triangle'
            const newTriangle = new Shapes(
                input.text,
                input.color,
                input.shape, 
                input.shapeColor
                )
            expect(newTriangle.shapeFunction(newTriangle)).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue"/>');
        })
    })
})