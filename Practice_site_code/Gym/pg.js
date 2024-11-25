let count = 0;
count += 1;

totalCount = document.getElementById("daydCount");

let increaseCount = document.getElementById("increment-btn");

function increment() {
    totalCount.innerHTML =count
  increaseCount.innerHTML = totalCount + 1;
}
increment();
