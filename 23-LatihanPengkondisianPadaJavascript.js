// Latihan 1
var noAngkot=1;
var jmlAngkot=10;
var angkotBeroperasi=6;

for(noAngkot;noAngkot<=jmlAngkot;noAngkot++){
    if(noAngkot<=angkotBeroperasi){
        console.log('Angkot No.'+noAngkot+' '+'beroperasi dengan baik.');
    }else if(noAngkot===8 || noAngkot===10){
        console.log('Angkot No.'+noAngkot+' '+'sedang lembur.');
    }else{
        console.log('Angkot No.'+noAngkot+' '+'sedang tidak beroperasi.');
    }
}
// Akhir Latihan 1

// Latihan 2
var noAngkot=1;
var jmlAngkot=10;
var angkotBeroperasi=6;

for(noAngkot;noAngkot<=jmlAngkot;noAngkot++){
    if(noAngkot<=angkotBeroperasi&&noAngkot!==5){
        console.log('Angkot No.'+noAngkot+' '+'beroperasi dengan baik.');
    }else if(noAngkot===8 || noAngkot===10 || noAngkot===5){
        console.log('Angkot No.'+noAngkot+' '+'sedang lembur.');
    }else{
        console.log('Angkot No.'+noAngkot+' '+'sedang tidak beroperasi.');
    }
}
// Akhir Latihan 2