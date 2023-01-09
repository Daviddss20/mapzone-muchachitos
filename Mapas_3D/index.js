let frameMapa3dTransparent = document.getElementById('mapa_3d-transparente')
let frameMapa3dSearcher = document.getElementById('mapa_3d-geolocalizador')

//Checkers
let geolocalizadorChecker = document.getElementById('geolocalizador')
let transparenteChecker = document.getElementById('transparente')

let CheckersList = [geolocalizadorChecker, transparenteChecker]
CheckersList.forEach(element => { element.addEventListener('click', showHideMaps) })

function showHideMaps() {
    if (geolocalizadorChecker.checked) {
        frameMapa3dSearcher.style.display = 'block'
    } else {
        frameMapa3dSearcher.style.display = 'none'
    }

    if (transparenteChecker.checked) {
        frameMapa3dTransparent.style.display = 'block'
    } else {
        frameMapa3dTransparent.style.display = 'none'
    }
}