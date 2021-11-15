let evenNum = [];

function evenNumbers() {
  for (let i = 0; i <= 200; i++) {
    if (i % 2 === 0) {
      evenNum.push(i);
    }
  }
  return evenNum;
}

evenNumbers();

function searchinArray() {
  let search = integer.value;
  for (let i = 0; i < evenNum.length; i++) {
    if (evenNum[i] === parseInt(search)) {
      result.value = `Exist in the array`;
      break;
    } else if (search == "") {
      result.value = `Please write an integer`;
    } else {
      result.value = `Not exist in the array`;
    }
  }
}
