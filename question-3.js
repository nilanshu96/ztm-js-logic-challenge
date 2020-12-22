// Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.

const input = "#01cd3e";
const input2 = "rgb(10, 213, 155)";
const input3 = '#sdfkjd';
const input4 = 23487;
const input5 = "rgb(23, 34)";

function isHexColor(hex) {

    const regExp = /#[0-9a-f]{6}/g;
    return String(hex).match(regExp) !== null;
}

function hexToRgb(hex) {

    const regExp = /[0-9a-f][0-9a-f]/g;
    const colors = String(hex).match(regExp);
    
    const r = parseInt(colors[0], 16);
    const g = parseInt(colors[1], 16);
    const b = parseInt(colors[2], 16);

    return `rgb(${r}, ${g}, ${b})`;
}

function isRgbColor(rgb) {
    
    const prefixCheck = String(rgb).startsWith('rgb(');
    const suffixCheck = String(rgb).endsWith(')');
    const regExp = /\d+/g;
    const colors = String(rgb).match(regExp);
    return prefixCheck && suffixCheck && colors.length == 3? true: false;
}

function intToHex(num) {

    let hex = parseInt(num).toString(16);
    return hex.length === 1? "0"+hex: hex;
}

function rgbToHex(rgb) {

    const regExp = /\d+/g;
    const colors = String(rgb).match(regExp);    
    
    const r = intToHex(colors[0]);
    const g = intToHex(colors[1]);
    const b = intToHex(colors[2]);

    return `#${r}${g}${b}`;
}

function convertToHexOrRgb(color) {

    if(isHexColor(color)) {
        return hexToRgb(color);
    } else if(isRgbColor(color)) {
        return rgbToHex(color);
    } else {
        return "Invalid input";
    }
}

console.log(convertToHexOrRgb(input));
console.log(convertToHexOrRgb(input2));
console.log(convertToHexOrRgb(input3));
console.log(convertToHexOrRgb(input4));
console.log(convertToHexOrRgb(input5));

