function pin() {
    let pin = document.getElementById('angkapin').value;
    if (pin == '123456') {
        window.open('tunai.html', '_blank')
        window.close('pin.html', '_blank')
    } else {
        alert('PIN Yang Anda Masukan Salah')
    }
}
