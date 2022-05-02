function texto() {
    var iker1 = document.getElementById('iker1')
    var iker2 = document.getElementById('iker2')
    var numerobi = document.getElementById('numerobi').value
    var procesando = document.getElementById('procesando')
    procesando.innerHTML = parseInt(numerobi, 2);
    var ultimodigito = numerobi.charAt(numerobi.length - 1)
    if (numerobi == '') {
        procesando.innerHTML = ''
    }
    if (ultimodigito = 0 || ultimodigito == 1) {
        iker2.innerHTML = 'Here is your decimal'
        iker1.innerHTML = ''
    } else {
        procesando.innerHTML = 'Waiting for a valid binary number...'
    }
    if (ultimodigito >> 1 || ultimodigito >> 9999) {
        iker1.innerHTML = 'You entered a non binary digit (please enter only 0 or 1)'
        iker2.innerHTML = ''
    }
    if (ultimodigito == '') {
        iker1.innerHTML = ''
        iker2.innerHTML = ''
    }
}