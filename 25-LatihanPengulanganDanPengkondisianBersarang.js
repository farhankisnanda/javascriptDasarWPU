// Membuat * 5x Kesamping
var s = '';
for(var i=0;i<5;i++){
    s += "*";
}console.log(s);
console.log('')
// Akhir Membuat * 5x Kesamping

// Membuat * 10x Kebawah
var s = '';
for (var i=0;i<10;i++){
    s+='*';
    s+='\n';
}console.log(s)
// Akhir Membuat * 10x Kebawah */

// Membuat ***** 10x Kebawah
var s ='';
for (var i=0;i<10;i++){
    for(var j=0;j<5;j++){
        s+='*';
    }
    s+='\n';
}console.log(s)
// Akhir Membuat ***** 10x Kebawah

// Membuat * Segitiga Siku-Siku
var s='';
for(var i=0;i<5;i++){
    for(var j=0;j<=i;j++){
        s+='*';
    }
    s+='\n'
}console.log(s)
// Akhir Membuat * Segitiga Siku-Siku

//  Membuat * Segitiga Siku-Siku Terbalik
var s='';
for(var i=5;i>0;i--){
    for(var j=0;j<i;j++){
        s+='*';
    }
    s+='\n';
}console.log(s)
// Akhir Membuat * Segitiga Siku-Siku Terbalik

var s='';
for(var i=5;i>0;i--){
    for(var j=0;j<i;j++){
        s+='*';
    }
    s+='\n';
    for(a=0;a<j&&a%5==0;a++){
        for(b=1;b>0;b++){
            s+='z'
        }
    }
}console.log(s)