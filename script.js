const froyo = prompt("Please enter the froyo flavors you would like in a comma separated list ");
let froyoArray = froyo.replace(/\s+/g, '').toLowerCase().split(",");

const froyoObj = {};

function generateFroyo(arr) {

    for (const key of arr) {
        if (key in froyoObj) {
            froyoObj[key] += 1;
        } else {
            froyoObj[key] = 1;
        }
    }
    return froyoObj;
}


console.table(generateFroyo(froyoArray));