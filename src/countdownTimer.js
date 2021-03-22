export function countdownTimer() {
    let timeend = new Date()
    timeend = new Date(
        timeend.getYear() > 1900
            ? timeend.getYear() + 1
            : timeend.getYear() + 1901,
        0,
        1
    )
    function time() {
        let today = new Date()
        today = Math.floor((timeend - today) / 1000)
        let tsec = today % 60
        today = Math.floor(today / 60)
        if (tsec < 10) tsec = '0' + tsec
        let tmin = today % 60
        today = Math.floor(today / 60)
        if (tmin < 10) tmin = '0' + tmin
        let thour = today % 24
        if (thour < 10) thour = '0' + thour
        today = Math.floor(today / 24)
        // timestr=today +" : "+ thour+" : "+tmin+" : "+tsec+"";
        let timestr = '00' + ' : ' + thour + ' : ' + tmin + ' : ' + tsec
        document.getElementById(
            'left-aside__countdown-time'
        ).innerHTML = timestr
    }

    setInterval(() => time(), 1000)
}
