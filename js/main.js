document.addEventListener("click", function(e) {
  const clikedElement = e.target;

  if (clikedElement.matches("li.key")) {
    console.log(clikedElement.dataset.note);
  } else {
    console.log("Other element clicked", clikedElement);
  }
});
