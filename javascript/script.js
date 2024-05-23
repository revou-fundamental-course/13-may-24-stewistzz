function validationKeliling() {
    // validation
    document.getElementById("container-luas").style.display = "none";
    document.getElementById("container-keliling").style.display = "block";
}
function validationLuas() {
    // validation
    document.getElementById("container-luas").style.display = "block";
    document.getElementById("container-keliling").style.display = "none";
}

function LuasSegitiga() {
    var alas = parseFloat(document.getElementById("alas").value)
    var tinggi = parseFloat(document.getElementById("tinggi").value)

    // console.log(alas, tinggi)

    // console.log(alas * tinggi / 2)

    if (isNaN(alas) || isNaN(tinggi)) {
        alert('Masukkan angka yang valid untuk sisi-sisi segitiga.');
        return;
    }
    var Luas = .5 * alas * tinggi;
    document.getElementById("luas").textContent = 1/2 + " * " + alas + " * " + tinggi
    document.getElementById("result-luas").textContent = "Luas Segitiga : " + Luas;
}

function KelilingSegitiga() {
    var A = parseFloat(document.getElementById("sisiA").value)
    var B = parseFloat(document.getElementById("sisiB").value)
    var C = parseFloat(document.getElementById("sisiC").value)

    // console.log(A + B + C)
    if (isNaN(A) || isNaN(B) || isNaN(C)) {
        alert('Masukkan angka yang valid untuk sisi-sisi segitiga.');
        return;
    }
    var keliling = A + B + C;
    document
    // document.getElementById("diketahui").textContent = "Diketahui\nSisi A + Sisi B + Sisi C"
    document.getElementById("keliling").textContent = A + " + " + B + " + " + C
    document.getElementById("result-keliling").textContent = "Keliling Segitiga: " + keliling;
}

function resetForm() {
    document.getElementById('alas').value = '';
    document.getElementById('tinggi').value = '';
    document.getElementById('sisiA').value = '';
    document.getElementById('sisiB').value = '';
    document.getElementById('sisiC').value = '';
    document.getElementById('result-luas').textContent = '';
    document.getElementById('result-keliling').textContent = '';
}