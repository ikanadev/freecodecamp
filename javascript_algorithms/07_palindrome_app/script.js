
/** @type {{textInput: HTMLInputElement, checkBtn: HTMLButtonElement, result: HTMLParagraphElement}} */
const elements = {
  textInput: null,
  checkBtn: null,
  result: null,
};

/**
 * @param {string} text
 * @returns {boolean}
*/
function isPalindrome(text) {
  const raw = text.toLowerCase().replace(/[^a-z0-9]/g, "");
  const len = raw.length;
  for (let i = 0; i < len / 2; i++) {
    if (raw[i] !== raw[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

function handleCheckBtnClick() {
  const text = elements.textInput.value.trim();
  if (!text) {
    alert("Please input a value");
    return;
  }
  if (isPalindrome(text)) {
    elements.result.classList.remove("not-palindrome");
    elements.result.classList.add("is-palindrome");
    elements.result.textContent = `${text} is a palindrome.`;
  } else {
    elements.result.classList.remove("is-palindrome");
    elements.result.classList.add("not-palindrome");
    elements.result.textContent = `${text} is not a palindrome.`;
  }
}

function handleInputChange() {
  const resultText = elements.result.textContent;
  if (resultText) {
    elements.result.textContent = "";
  }
}

function main() {
  // Get elements
  elements.textInput = document.querySelector("#text-input");
  elements.checkBtn = document.querySelector("#check-btn");
  elements.result = document.querySelector("#result");
  if (!elements.textInput || !elements.checkBtn || !elements.result) {
    alert("There is an unexpected error, please reload the page, or contact the developer :(");
    return;
  }
  // Handle check
  elements.checkBtn.addEventListener("click", handleCheckBtnClick);
  elements.textInput.addEventListener("keypress", (ev) => {
    if (ev.key !== "Enter") return;
    handleCheckBtnClick();
  });
  // Handle input change
  elements.textInput.addEventListener("input", handleInputChange);
}

window.addEventListener("DOMContentLoaded", main);
