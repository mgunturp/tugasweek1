const hitungNilai=(matematika, bahasaIndonesia, bahasaInggris, ipa)=> 
{
  if (matematika && bahasaIndonesia && bahasaInggris && ipa) {
    
  let rataRata = (matematika + bahasaIndonesia + bahasaInggris + ipa) / 4

  let grade;
  if (rataRata >= 90 && rataRata <= 100) {
    grade = 'A';
  } else if (rataRata >= 80 && rataRata < 90) {
    grade = 'B';
  } else if (rataRata >= 70 && rataRata < 80) {
    grade = 'C';
  } else if (rataRata >= 60 && rataRata < 70) {
    grade = 'D';
  } else {
    grade = 'E';
  }

  console.log(`Rata-rata = ${rataRata}`);
  console.log(`Grade = ${grade}`);
  return   
  }else{
    console.log('Semua nilai harus diisi');
  }
}
hitungNilai(90,80,50,40)
