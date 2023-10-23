// 1. indexOf(): Metode ini digunakan untuk mencari indeks pertama suatu elemen dalam array atau string.
console.log();
const fruits = ["apel", "pisang", "melon", "semangka"];
const index = fruits.indexOf("melon");
console.log(`hasil dari indexOF: ${index} `);


const text = 'Halo, saya adalah seorang programmer';
const index1 = text.indexOf('programmer');
console.log(`hasil dari indexOF(string): ${index1} `);


/* 2. slice(): Metode ini digunakan untuk membuat salinan sebagian dari array atau string berdasarkan indeks 
awal dan akhir yang ditentukan */


const numbers = [1,2,3,4,5]
const sliced = numbers.slice(1,3)
console.log(`hasil dari sliced: ${sliced} `);

// contoh penggunaan string

const text1 = 'saya menggunakan bahasa pemograman javascript'
const sliced1 = text1.slice(17, 23)
console.log(`hasil dari sliced(string): ${sliced1} `);



/* 3. push(): Metode ini digunakan untuk menambahkan satu atau 
lebih elemen ke akhir array dan mengembalikan panjang array yang diperbarui. */

const fruits1 = ["apel", "pisang", "melon", "semangka"];
const newLength = fruits1.push("mangga","anggur");
console.log(`hasil dari push: ${fruits1} `);
console.log(`hasil dari push(jumlah elemen): ${newLength} `);



/* 4. pop(): Metode ini digunakan untuk menghapus elemen terakhir dari 
array dan mengembalikan elemen tersebut */

const numbers1 = [1, 2, 3, 4, 5];
const lastNumber = numbers1.pop();
console.log(`hasil dari pop: ${numbers1} `);
console.log(`hasil dari pop(jumlah elemen): ${lastNumber} `); 

/* 5. shift(): Metode ini digunakan untuk menghapus elemen pertama dari array 
dan menggeser elemen-elemen lainnya. */

const colors = ['merah', 'hijau', 'biru'];
const firstColor = colors.shift();
console.log(`hasil dari shift: ${colors} `);
console.log(`hasil dari shift(elemen yang keluar dari array): ${firstColor} `); 

/* 6. unshift(): Metode ini digunakan untuk menambahkan satu atau lebih elemen ke awal array
dan mengembalikan panjang array yang diperbarui. */

const numbers2 = [3, 4, 5];
const newLength1 = numbers2.unshift(1, 2);
console.log(`hasil dari unshift: ${numbers2} `);
console.log(`hasil dari unshift(jumlah elemen): ${numbers2} `); 

/* 7. toUpperCase(): Metode ini digunakan pada string untuk mengubah semua karakter menjadi huruf besar. */

const text2 = 'Ini adalah contoh teks.';
const uppercaseText = text2.toUpperCase();
console.log(`hasil dari toUpperCase: ${text2} `);

/* 8. toLowerCase(): Metode ini digunakan pada string untuk mengubah semua karakter menjadi huruf kecil. */

const text3 = 'INI ADALAH CONTOH TEKS';
const lowercaseText = text.toLowerCase();
console.log(`hasil dari toLowerCase: ${text3} `);

/* 9. toFixed(): Metode ini digunakan pada angka floating-point untuk membulatkan angka desimal 
ke bilangan bulat dengan panjang desimal tertentu. */

const number = 3.14159;
const roundedNumber = number.toFixed(2);
console.log(`hasil dari toFixed: ${roundedNumber} `); 

/* 10. concat(): Metode ini digunakan untuk menggabungkan dua atau lebih array dan mengembalikan array baru. */

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = array1.concat(array2);
console.log(`hasil dari concat: ${combinedArray} `);
