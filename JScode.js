function doInputOutput() {
    let width = parseInt(document.getElementById('WidthV').value);
    let depth = parseInt(document.getElementById('DepthV').value);
    let height = parseInt(document.getElementById('HeightV').value);
    let sweep = parseInt(document.getElementById('SweepV').value);
    let result = houseVolume(width, depth, height, sweep);
    document.getElementById('Output').innerHTML = 'Your House Volume is: ' + Math.round(result);
}

function houseVolume(width, depth, height, sweep) {
    let livingV = livingVolume(width, depth, height);
    let roofV = roofVolume(width, depth, sweep);
    let houseV = livingV + roofV;
    return houseV;
}

function livingVolume(w, d, h) {
    let ls = w * d * h;
    return ls;
}

function roofVolume(wR, dR, sR) {
    let triangleA = triangleArea(wR, dR, sR);
    let rvt = triangleA * wR;
    return rvt;
}

function triangleArea(a, b, c) {
    let s = (a + b + c) / 2;
    let area = Math.sqrt(s * (s-a) * (s-b) * (s-c));
    return area;
}