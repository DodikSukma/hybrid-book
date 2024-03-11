function cekJawabankol2() {
    var Kolom2a = document.getElementById('Kolom2a').value.trim().toLowerCase();
    var Kolom2b = document.getElementById('Kolom2b').value.trim().toLowerCase();
    var Kolom2c = document.getElementById('Kolom2c').value.trim().toLowerCase();
    
    if (Kolom2a.includes('positif') && Kolom2b.includes('non') && Kolom2c.includes('meningkat')) {
        benar()
    } else {
        salah()
    }
}

function cekJawabankol3() {
    var Kolom3a = document.getElementById('Kolom3a').value.trim().toLowerCase();
    var Kolom3b = document.getElementById('Kolom3b').value.trim().toLowerCase();
    var Kolom3c = document.getElementById('Kolom3c').value.trim().toLowerCase();
    
    if (Kolom3a.includes('positif') && Kolom3b.includes('linear') && Kolom3c.includes('meningkat')) {
        benar()
    } else {
        salah()
    }
}

function cekJawabankol4() {
    var Kolom4a = document.getElementById('Kolom4a').value.trim().toLowerCase();
    var Kolom4b = document.getElementById('Kolom4b').value.trim().toLowerCase();
    var Kolom4c = document.getElementById('Kolom4c').value.trim().toLowerCase();
    
    if (Kolom4a.includes('negatif') && Kolom4b.includes('linear') && Kolom4c.includes('meningkat' || 'menurun')) {
        benar()
    } else {
        salah()
    }
}

function cekJawabankol5() {
    var Kolom5a = document.getElementById('Kolom5a').value.trim().toLowerCase();
    var Kolom5b = document.getElementById('Kolom5b').value.trim().toLowerCase();
    var Kolom5c = document.getElementById('Kolom5c').value.trim().toLowerCase();
    
    if (Kolom5a.includes('tidak') && Kolom5b.includes('tidak') && Kolom5c.includes('tidak')) {
        benar()
    } else {
        salah()
    }
}

function cekJawabankol6() {
    var Kolom6a = document.getElementById('Kolom6a').value.trim().toLowerCase();
    var Kolom6b = document.getElementById('Kolom6b').value.trim().toLowerCase();
    var Kolom6c = document.getElementById('Kolom6c').value.trim().toLowerCase();
    
    if (Kolom6a.includes('negatif') && Kolom6b.includes('linear') && Kolom6c.includes('meningkat' || 'menurun')) {
        benar()
    } else {
        salah()
    }
}
