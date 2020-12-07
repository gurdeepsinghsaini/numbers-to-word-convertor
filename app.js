const input = document.querySelector(".linput")
const output = document.querySelector(".rinput")
const translateBtn = document.querySelector(".translateBtn")
const resetBtn = document.querySelector('.reset')
const baseUrl = 'https://api.funtranslations.com/translate/numbers.json'



const reset = () => {
  input.value = ''
  output.value = ''
}

const translate = () => {
  let finalUrl = `${baseUrl}?text=${input.value}`
  fetch(finalUrl)
    .then(response => response.json())
    .then(json => output.value = json.contents.translated)
    .catch(e => {
      alert('error: either you\'re offline or the api request limit has been reached. Please try again later.')
      console.log(e.message)
    })
}


translateBtn.addEventListener('click', translate)

resetBtn.addEventListener('click', reset)