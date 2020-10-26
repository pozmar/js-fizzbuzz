
var numUl = document.getElementById("lista");
for (var i = 1; i <= 100; i++){
  if(i % 3 == 0 && i % 5 === 0){
    numUl.innerHTML += "<li>" + "FizzBuzz" + "</li>";
  }
  else if (i % 5 === 0){
    numUl.innerHTML += "<li>" + "Buzz" + "</li>";
  }
  else if (i % 3 === 0){
    numUl.innerHTML += "<li>" + "Fizz" + "</li>";
  }
  else{
    numUl.innerHTML += "<li>" + i + "</li>";
  }
}
