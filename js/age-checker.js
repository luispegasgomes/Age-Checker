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
        let gender = ''
        if (fsex[0].checked){
            gender = 'man'
            if (age >= 0 && age < 10 ){
                // Child
            }else if (age < 21){
                //Teen
            }else if (age < 50){
                //Adult
            }else{
                //old person
            }
        } else if (fsex[1].checked){
            gender = 'woman'
        }
        res.style.textAlign = 'center'
        res.innerHTML = `A ${age} years old ${gender} was detected.`
    }
}