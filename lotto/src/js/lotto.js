const numbers = document.querySelectorAll(".num");
const raffleBtn = document.querySelector(".raffle-btn");
const replayBtn = document.querySelector(".replay");
const choiceSection = document.querySelector(".choice");
const resultSection = document.querySelector(".result");
const lottoDiv = document.querySelector(".lotto-ball");
const choiceDiv = document.querySelector(".choice-number");

const SELECTED = "selected";
const MAX_COUNT = 6; //선택숫자 개수 조정

const selectedList = [];
let count = 0;
let lottoNumber = 0;

const printList = (result) => {
  const lottoText = document.createElement("p");
  lottoText.innerText = lottoNumber;
  lottoDiv.append(lottoText);

  const selectUl = document.createElement("ul");
  choiceDiv.append(selectUl);

  for (i = 0; i < selectedList.length; i++) {
    const selectLi = document.createElement("li");

    selectLi.innerText = selectedList[i];
    selectUl.append(selectLi);
  }

  const resultText = document.createElement("p");
  choiceDiv.append(resultText);
  if (result) {
    resultText.innerText = "당첨!";
  } else {
    resultText.innerText = "꽝!";
  }
};

const randomNumber = () => {
  return Math.floor(Math.random() * 49 + 1);
};

const calculate = () => {
  const selectedButton = document.querySelectorAll(".selected");
  selectedButton.forEach((number) => {
    selectedList.push(Number(number.value));
  });

  lottoNumber = randomNumber();

  if (selectedList.indexOf(lottoNumber) < 0) {
    printList(false);
  } else {
    printList(true);
  }
  //랜덤번호 6개 뽑을 때
  /*
  let i = 0;
  while (i < 6) {
    let random = randomNumber();
    if (randomList.indexOf(random) < 0) {
      randomList.push(random);
      i++;
    }
  }
  */
};

const startLotto = () => {
  if (count < MAX_COUNT) {
    return;
  }
  choiceSection.style.animation = "fade-out 0.5s forwards";
  resultSection.style.animation = "fade-in 0.5s forwards";
  setTimeout(() => {
    choiceSection.style.display = "none";
    resultSection.style.display = "flex";
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
  raffleBtn.addEventListener("click", startLotto);
  replayBtn.addEventListener("click", () => {
    window.location.reload();
  });
};

init();
