function findMax(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function tryRemoveFromArray(arr, x) {

    for (let i = 0; i < arr.length; i++) {
        if (x === arr[i]) {
            arr.splice(i, 1);
            i--;
        }
    }
}


function isFibonacci(x) {
    if (x === 0 || x === 1) {
        return true;
    }
    let a = 1, b = 0, count = 2;
    while (count <= x) {
        if (a + count === x) {
            return true;
        }
        b = a;
        a = count;
        count += b;
    }
    return false;

}


console.log(isFibonacci(1))


class Circle {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.cvs = document.getElementById("myCanvas");
        this.ctx = this.cvs.getContext("2d");
    }

    render() {
        this.ctx.beginPath();
        this.ctx.fillStyle = this.color;
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.ctx.fill()
    }
}

let circle = new Circle(10, 10, 100, "#000");
circle.render();
