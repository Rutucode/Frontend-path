let count = 0;

let totalCount = document.getElementById("day-Count");

let increaseCount = document.getElementById("increment-btn");

function increment() {
  count += 1;
  totalCount.innerHTML = count;
  // increaseCount.innerHTML = totalCount + 1;
}
increment();

/*
let count = 0
function increment(){
  let  totalCount count +=1
  or count +=1
  console.log(totalCount)
}

increment()
*/
