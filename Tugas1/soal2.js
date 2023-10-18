const mtk = 80;
const bahasaIndonesia = 90;
const bahasaInggirs = 89;
const ipa = 69;

const validasi=()=>{
    if(mtk===""){
       return console.log("masukan nilai");
    }
    else if(bahasaIndonesia===""){
      return  console.log("masukan nilai");
    }
    else if(bahasaInggirs===""){
        return console.log("masukan nilai");
    }
    else if(ipa===""){
       return console.log("masukan nilai");
    }
}

const rataRata = (mtk + bahasaIndonesia + bahasaInggirs + ipa) / 4;

console.log(rataRata);

const checkpassingGrade=(grade)=>
{
    if(grade>=90){

    }
}