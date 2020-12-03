const numbers = document.querySelectorAll(".num");
const raffleBtn = document.querySelector(".raffleBtn");
const replayBtn = document.querySelector(".replay");
const choiceSection = document.querySelector(".choice");
const resultSection = document.querySelector(".result");
const lottoDiv = document.querySelector(".lotto-ball");
const choiceDiv = document.querySelector(".choice-number");

const SELECTED = "selected";
const MAX_COUNT = 1; //선택숫자 개수 조정

const randomList = [];
const equalList = [];
let count = 0;
let selectNumber = 0;

const printList = (result) => {
  const lottoUl = document.createElement("ul");
  lottoDiv.append(lottoUl);

  for (i = 0; i < randomList.length; i++) {
    const lottoLi = document.createElement("li");

    lottoLi.append(randomList[i]);
    lottoUl.append(lottoLi);
  }
  const text = document.createElement("p");
  text.innerText = selectNumber;
  choiceDiv.append(text);

  const resultText = document.createElement("p");
  resultSection.append(resultText);
  if (result) {
    resultText.innerText = "당첨!";
  } else {
    resultText.innerText = "꽝!";
  }
};

const randomNumber = () => {
  return Math.floor(Math.random() * 20 + 1);
};

const calculate = () => {
  const selectedButton = document.querySelector(".selected");
  selectNumber = Number(selectedButton.value);

  let i = 0;
  while (i < 6) {
    let random = randomNumber();
    if (randomList.indexOf(random) < 0) {
      randomList.push(random);
      i++;
    }
  }
  if (randomList.indexOf(selectNumber) < 0) {
    printList(false);
  } else {
    printList(true);
  }
};

const startRaffle = () => {
  if (count < MAX_COUNT) {
    return;
  }
  choiceSection.style.animation = "fade-out 0.5s forwards";
  resultSection.style.animation = "fade-in 0.5s forwards";
  setTimeout(() => {
    choiceSection.style.display = "none";
    resultSection.style.display = "block";
  }, 500);
  calculate();
};

const selectedNumber = (event) => {
  const target = event.target;
  if (target.classList.contains(SELECTED)) {
    target.classList.remove(SELECTED);
    count--;
  } else if (count < MAX_COUNT) {
    target.classList.add(SELECTED);
    count++;
  }
  if (count === MAX_COUNT) {
    return;
  }
};

const init = () => {
  numbers.forEach((number) => {
    number.addEventListener("click", selectedNumber);
  });
  raffleBtn.addEventListener("click", startRaffle);
  replayBtn.addEventListener("click", () => {
    window.location.reload();
  });
};

init();
