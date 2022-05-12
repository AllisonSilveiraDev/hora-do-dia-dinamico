function carregar() {
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('imagem')
  var data = new Date()
  var hora = data.getHours()
  var min = data.getMinutes()
  msg.innerHTML = `Agora são ${hora} horas ${min} minutos`

  if (hora >= 0 && hora < 12) {
    //bom dia
    img.src = 'Assets/manha.png'
    document.body.style.background = '#669a5a'
    document.getElementById('titulo').style.color = '#ebf79c'
  } else if (hora >= 12 && hora < 18) {
    //boa tarde
    img.src = 'Assets/tarde.png'
    document.body.style.background = '#e57d86'
    document.getElementById('titulo').style.color = '#c11423'
  } else {
    img.src = 'Assets/noite.png'
    document.body.style.background = '#052c3d'
    document.getElementById('titulo').style.color = '#1098d4'
  }
}
