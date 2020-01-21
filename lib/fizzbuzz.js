function fizzBuzz(numbers){
  if (numbers%3 == 0 && numbers%5 == 0){
    console.log('fizz buzz')
  }
  else if (numbers% 3 == 0){
    console.log('fizz')
  }
  else if (numbers% 5 == 0){
    console.log('buzz')
  }
  else {
    console.log(numbers)
  }
}
var test = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
test.forEach(function(numbers){
  fizzBuzz(numbers)
})
