const SeleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
    if (dataArray.length <= 5) {
      return "Jumlah angka dalam dataArray harus lebih dari 5";
    }
  
    if (nilaiAwal >= nilaiAkhir) {
      return "Nilai akhir harus lebih besar dari nilai awal";
    }
  
    // Mencari dan mengurutkan data di antara nilaiAwal dan nilaiAkhir
    const hasilSeleksi = dataArray.filter(item => item > nilaiAwal && item < nilaiAkhir).sort((a, b) => a - b);
  
    if (hasilSeleksi.length > 0) {
      return hasilSeleksi;
    } else {
      return "Nilai tidak ditemukan";
    }
  };
  
 
  console.log(SeleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8])); 
  console.log(SeleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8]));
  console.log(SeleksiNilai(5, 17, [2, 25, 4]));
  console.log(SeleksiNilai(5, 17, [2, 25, 4, 1, 30, 18])); 
  