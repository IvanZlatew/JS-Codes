function area(input){
    let figure = input[0];
    let a = Number(input[1]);
    let b = Number(input[2]);
    let areaSquare = a * a;
    let areaRectangle = a * b;
    let areaCircle = Math.PI * a * a;
    let areaTriangle = (a * b) / 2;
        if (figure === 'square'){
    console.log((areaSquare).toFixed(3));
} else if (figure === 'rectangle'){
    console.log((areaRectangle).toFixed(3));
} else if (figure === 'circle'){
    console.log((areaCircle).toFixed(3));
} else if (figure === 'triangle'){
    console.log((areaTriangle).toFixed(3));
}
}
area(['circle','5','6']);