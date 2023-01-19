let frameRegional = document.getElementById('mapa_geo-regional')
let regionalChecker = document.getElementById('regional')

regionalChecker.addEventListener('click', toggleMaps)

function toggleMaps() {
    frameRegional.classList.toggle('inactive')
}
