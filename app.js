// pass original date in seconds (unix) and rate in minutes
const getNext = (original, rate) => {
  
    const rateInSeconds = rate * 60
  
    const now = moment().unix()
  
    let lapse = original
  
    while (lapse < now) {
      lapse += rateInSeconds
    }
  
    return moment((lapse + rate), 'X').format('MMMM, Do YYYY hh:mm a')
  }

  document.querySelector('#add-train').addEventListener('click', e => {
    e.preventDefault()
    let train = document.getElementById("train-input").value;
    let destination = document.getElementById("destination-input").value;
    let time = document.getElementById("time-input").value;
    let frequency = document.getElementById("frequency-input").value;
    if(train.length === 0 || destination.length === 0|| time.length === 0|| frequency.length === 0){
        alert('you are missing a field please try again')
    }
    console.log(train)
    console.log(destination)
    console.log(time)
    console.log(frequency)
  })
//   function add train let user add the following
//  train name, destination , time and frequency
