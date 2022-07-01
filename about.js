console.log("hello world");

function handleSubmit(evt) {
  evt.preventDefault();
  console.log("test");
  alert("form submit");
}

let form = document.querySelector("#contact");

form.addEventListener("submit", handleSubmit);

let imgDuck = document.getElementById("duck");
imgDuck.addEventListener("mouseover", function (event) {
  // console.log("hi");
  alert("Cool Hat");
});
