function MudançaCor (cor) {

    let bg = document.querySelector('.bg_color');
    let ColorSelecionada = cor.value;
    let select = document.getElementsByClassName('op')
    let separar = ColorSelecionada.split(" ")
    document.getElementById('text').innerHTML = select[separar[1]].innerHTML  

    bg.style.background = separar[0];

}