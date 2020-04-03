let city = {}

document.getElementById('search').addEventListener('click', event => { event.preventDefault()
  console.log('ping')

  fetch(`api.openweathermap.org/data/2.5/weather?q=${document.getElementbyId('search').value}&appid=bcb0dc3522dc8355ea073fa6c61ff3b8`)
    .then(r => r.json())
    .then(weather => {
      document.getElementById('city').innerHTML = ''
      let city = document.createElement('div')
      
    })
})