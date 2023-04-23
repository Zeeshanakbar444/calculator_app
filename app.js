let num = (a) => {
    let number = document.querySelector('#inp')
    number.value += a
    // number.value += a
    console.log(a)
}


function cal(){
    let a = document.getElementById('inp')
    a.value = eval(a.value)
}

function clr(){
    let a = document.querySelector('#inp')
    a.value = ''
}
function del() {

    let str = document.getElementById('inp').value
    str = str.substr(0,str.length-1)
    document.getElementById('inp').value = str

}