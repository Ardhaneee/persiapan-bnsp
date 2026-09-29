let angka = [3, 8, 15, 22, 7, 10, 19, 6, 11, 4];

for (let i = 0; i < angka.length; i++) {
    if (angka[i] % 2 === 0) {
        console.log(angka[i] + "    adalah genap");
    }else if (angka[i] % 1 === 0){
        console.log(angka[i] + "    adalah ganjil");
    }
}
