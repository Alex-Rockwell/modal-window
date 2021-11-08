const button =  document.querySelector('.btn')
const modal =  document.querySelector('#modal')
const overlay =  document.querySelector('.overlay')
const closeButton = document.querySelector('.close-button')

button.addEventListener('click', showModal)

function showModal() {
  modal.classList.add('active')
  overlay.classList.add('active')
}

closeButton.addEventListener('click', hideModal) 

function hideModal() {
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

overlay.addEventListener('click', () => {
  hideModal()
})