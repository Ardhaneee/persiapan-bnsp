let nilai = [65, 80, 90, 72, 88, 55, 95, 60];
let total = 0;

for (let i = nilai.length -1; i >= 1; i--) { 
    total -= nilai[i];
}

console.log("Total: " + total);  