//btn verify
function verify() {
    let date = new Date()
    let year = date.getFullYear()
    let fyear = document.getElementById('txtyear')
    let res = document.querySelector('div#res')
    if (fyear.value.length == 0 || Number(fyear.value) > year) {
        window.alert('This values are wrong, try again :(')
    }else{
        let fsex = document.getElementsByName('radsex')
        let age = year - Number(fyear.value)
        res.innerHTML = `Calculated age: ${age}`
    }
}