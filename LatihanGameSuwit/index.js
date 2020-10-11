var tanya = true;
while(tanya){
    // Mengambil data pengguna
    var p = prompt('Pilih suwit : Gunting, Batu, atau Kertas !');

    // Mengambil data random komputer
    var comp = Math.random();
    if(comp<0.34){
        comp = "gunting";
    }else if(comp>=0.34 && comp<=0.68){
        comp = "batu";
    }else{
        comp = 'kertas'
    }
    // Hasil suwit
    var hasil = '';
    if(p==comp){
        hasil='seri'
    }else if (p=='gunting'){
        hasil = (comp='batu')? 'Menang' : 'Kalah';
    }else if (p=='batu'){
        hasil = (comp='kertas')? 'Menang' : 'Kalah';
    }else if (p=='kertas') {
        hasil = (comp='gunting')? 'Menang' : 'Kalah';
    }else {
        hasil = 'Anda sembarangan masukinnya!'
    }

    alert(hasil);
    tanya = confirm('lagi?');
}