class Shapes{
    constructor(text, color, shape, shapeColor) {
        this.text = text.toUpperCase(),
        this.color = color,
        this.shape = shape,
        this.shapeColor = shapeColor
    }

    shapeFunction(newLogo) {
        if (this.shape === 'Circle') {
            return this.shape =  `<circle cx="150" cy="100" r="80" fill="${newLogo.shapeColor}"/>`
        }
        else if (this.shape === 'Square') {
            return this.shape = `<rect x="90" y="40" width="120" height="120" fill="${newLogo.shapeColor}"/>`
        }
        else if (this.shape === 'Triangle') {
            return this.shape = `<polygon points="150, 18 244, 182 56, 182" fill="${newLogo.shapeColor}"/>`
        }
    }

    generateLogo(newLogo) {
        return `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${newLogo.shape}
    <text x="50%" y="50%" dominant-baseline="central" font-size="60" text-anchor="middle" fill="${newLogo.color}">${newLogo.text}</text>
</svg>`
    }
}

module.exports = Shapes;