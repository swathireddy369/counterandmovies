let count = 9;
const movies = ["KGF", "SALAR", "MATRIX", "GANGOF4"];
let newMoive = "";

function increment() {
  count++;
  countEl.innerHTML = count;
}
const decrement = () => {
  count--;
  countEl.innerHTML = count;
};
const displayMovies = () => {
  movieEl.innerHTML = "";

  movies.map((movie) => {
    let newSingleMovie = document.createElement("li");
    newSingleMovie.textContent = movie;
    movieEl.appendChild(newSingleMovie);
  });
  inputMovieEl.value = "";
};
const hanleChange = (e) => {
  if (e.key == "Enter") {
    newMoive = e.target.value;
    addNew();
    inputMovieEl.value = "";
  } else {
    inputMovieEl.innerHTML = e.target.value;
  }
};
const addNew = () => {
  newMoive = inputMovieEl.value;
  movies.push(newMoive);
  displayMovies();
};

const handleClick = (e) => {
  e.preventDefault();
  console.log("hurray");
};

let countEl = document.getElementById("count");
let counterContainerE1 = document.querySelector(".counter_container");
let addBtnEl = document.getElementById("add_btn");
let subBtnEl = document.getElementById("sub_btn");
let movieEl = document.getElementById("Movies");
let inputMovieEl = document.querySelector(".movie");
let addMovieEl = document.getElementById("add_movie");
console.log(counterContainerE1, movieEl, inputMovieEl);

//events
document.addEventListener("DOMContentLoaded", () => {
  countEl.innerHTML = count;
  displayMovies();
});

counterContainerE1.addEventListener("click", handleClick);
addBtnEl.addEventListener("click", increment);
subBtnEl.addEventListener("click", decrement);
inputMovieEl.addEventListener("keyup", hanleChange);
addMovieEl.addEventListener("click", addNew);
