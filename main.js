function getUserPosition() {
    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    function success(pos) {
        var crd = pos.coords;
        automode(crd)
    }

    function error(err) {
        console.warn(`ERREUR (${err.code}): ${err.message}`);
    }
    navigator.geolocation.getCurrentPosition(success, error, options);
}


function automode(crd) {
    window.location.href = "./geomode.html"
    alert(`${crd.latitude}, ${crd.longitude} La précision est de ${crd.accuracy} mètres.`)
}
