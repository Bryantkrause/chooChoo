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

//   function add train let user add the following
//  train name, destination , time and frequency
