const rateBtns = document.querySelectorAll(".rate-num-container");
const submitBtn = document.querySelector(".submit-btn");
const selectedEl = document.getElementById("rate-selected");
const feedbackEl = document.querySelector(".feedback");
const thankyouEl = document.querySelector(".thank-you--page");

for (let i = 0; i < rateBtns.length; i++) {
  rateBtns[i].addEventListener("click", function (e) {
    e.currentTarget.classList.add("active");
    for (let j = 0; j < rateBtns.length; j++) {
      if (e.currentTarget !== rateBtns[j])
        rateBtns[j].classList.remove("active");
    }
  });
}

submitBtn.addEventListener("click", function () {
  rateBtns.forEach((btn) => {
    if (!btn.classList.contains("active")) return;
    const selectedRate = btn.querySelector(".rate-num").textContent;
    selectedEl.textContent = `You selected ${selectedRate} out of 5`;
    feedbackEl.classList.add("d-none");
    thankyouEl.classList.remove("d-none");
  });
});
