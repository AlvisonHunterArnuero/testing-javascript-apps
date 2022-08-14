let data = { cheesecakes: 0 };

const incrementCount = () => {
  data.cheesecakes++;
  window.document.getElementById("count").innerText = data.cheesecakes;
};

const incrementButton = window.document.getElementById("increment-button");
incrementButton.addEventListener("click", incrementCount);
