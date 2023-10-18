
const validasi=()=>{
    const mtk = 80;
    const bahasaIndonesia = 90;
    const bahasaInggirs = 89;
    const ipa = 69;
    if(typeof mtk===null){
       return console.log("masukan nilai");
    }
    else if( typeof bahasaIndonesia===null){
      return  console.log("masukan nilai");
    }
    else if(typeof bahasaInggirs===null){
        return console.log("masukan nilai");
    }
    else if( typeof ipa===null){
       return console.log("masukan nilai");
    }
}

validasi()