let frameRegional = document.getElementById('mapa_geo-regional')
let regionalChecker = document.getElementById('regional')

regionalChecker.addEventListener('click', showHideMaps)

function showHideMaps() {
    if (regionalChecker.checked) {
        frameRegional.style.display = 'block'
    } else {
        frameRegional.style.display = 'none'
    }
}