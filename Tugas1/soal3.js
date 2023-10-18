const print=()=>{
    const printSegitiga = 5;
    if(typeof printSegitiga === 'number'){
        for(i = printSegitiga; i >= 1 ; i--){
            let s='';
        for( j = 1 ;j <= i ; j++){
            s += j + ' ';
        }
        console.log(s);
    }
    
    }
    else{
        console.log("Data harus number");
    }
}
print()