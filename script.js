const displayResponse = (idNumber) => {
  const question = document.getElementById(`Q${idNumber}`)
  const arrow = document.getElementById(`A${idNumber}`)
  const response = document.getElementById(`R${idNumber}`)

  if(arrow.classList.contains('active-arrow')) {
    question.classList.remove('active-question')
    arrow.classList.remove('active-arrow')
    response.classList.remove('active-response')
  } else {
    question.classList.add('active-question')
    arrow.classList.add('active-arrow')
    response.classList.add('active-response')
  }
}

document.getElementById('A0').addEventListener('click', () => {
  displayResponse(0)
})
document.getElementById('A1').addEventListener('click', () => {
  displayResponse(1)
})
document.getElementById('A2').addEventListener('click', () => {
  displayResponse(2)
})
document.getElementById('A3').addEventListener('click', () => {
  displayResponse(3)
})
document.getElementById('A4').addEventListener('click', () => {
  displayResponse(4)
})