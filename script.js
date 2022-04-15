let arr = [];
let input = document.getElementById("item");
let list = document.querySelector("#list");

showList = () => {
  list.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    list.innerHTML +=
      "<li><button onclick='removeItem(" +
      i +
      ")'><i class='fa-solid fa-trash'></i></button>   " +
      "<p>" +
      arr[i] +
      "</p><input type='checkbox'></input></li>";
  }
};

removeItem = (n) => {
  arr.splice(n, 1);
  showList();
};

addItem = (e) => {
  e.preventDefault();
  if (input.value == "") {
  } else {
    arr.push(input.value);
    input.value = null;
    showList();
  }
};
