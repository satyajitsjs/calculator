let input = "";
let result = "";
const URL = "https://calculator.alphazero.in/api/";

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("equalbtn").click();
  }
});

function inputHandler(value) {
  input += value;
  updateDisplay();
}

function clearInput() {
  input = "";
  result = "";
  updateDisplay();
}

function backspace() {
  input = input.slice(0, -1);
  updateDisplay();
}

function changePlusMinus() {
  input = input.charAt(0) === "-" ? input.slice(1) : "-" + input;
  updateDisplay();
}

async function calculateAns() {
  try {
    const response = await fetch(`${URL}calculate/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ expression: input }),
    });
    const data = await response.json();
    if (response.status === 201) {
      result = data.result;
    } else {
      result = "Error";
    }
    updateDisplay();
  } catch (error) {
    result = "Error";
    updateDisplay();
  }
}

async function fetchCalculations() {
  try {
    const response = await fetch(`${URL}calculations/`);
    const data = await response.json();
    const calculationsList = document.getElementById("calculations");
    calculationsList.innerHTML = "";
    data.forEach((calc) => {
      const li = document.createElement("li");
      li.textContent = `${calc.expression} = ${calc.result}`;
      calculationsList.appendChild(li);
    });
  } catch (error) {
    console.error("Error fetching calculations:", error);
  }
}

function updateDisplay() {
  const display = document.getElementById("display");
  display.textContent = result || input;
}
