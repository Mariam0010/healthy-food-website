var Categories = document.getElementById("Categories");
var Meal = document.getElementById("Meal");
var Quantity = document.getElementById("Quantity");
var Price = document.getElementById("Price");
var Data = [];
var searchInput = document.getElementById("searchInput");
var inputs = document.getElementsByClassName("form-control");
var addBtn = document.getElementById("addBtn");
var cuurentinedx = 0;

if (localStorage.getItem("data")) {
  Data = JSON.parse(localStorage.getItem("data"));
  displayData();
}

addBtn.onclick = function () {
  if (addBtn.innerHTML == "Add Data") {
    AddData();
  } else {
    updatedata();
  }
  displayData();
  clearData();
};

searchInput.onkeyup = function () {
  var x = "";
  for (var i = 0; i < Data.length; i++) {
    if (
      Data[i].Categories.toLowerCase().includes(searchInput.value.toLowerCase())
    ) {
      x += `<tr><td>${Data[i].Categories}</td>
            <td>${Data[i].Meal}</td>
            <td>${Data[i].Quantity}</td>
            <td>${Data[i].Price}</td>
            <td><button class='btn btn-success'>update</button></td>
            <td><button onclick='deletedata(${i})' class='btn btn-danger'>delete</button></td></tr>`;
    }
    document.getElementById("table").innerHTML = x;
  }
};

function AddData() {
  var data = {
    Categories: Categories.value,
    Meal: Meal.value,
    Quantity: Quantity.value,
    Price: Price.value,
  };
  Data.push(data);
  var stringarray = JSON.stringify(Data);
  localStorage.setItem("data", stringarray);
}

function displayData() {
  var x = "";
  for (var i = 0; i < Data.length; i++) {
    x += `<tr><td>${Data[i].Categories}</td>
        <td>${Data[i].Meal}</td>
        <td>${Data[i].Quantity}</td>
        <td>${Data[i].Price}</td>
        <td><button class='btn btn-success' onclick='getdataInfo(${i})'>update</button></td>
        <td><button onclick='deletedata(${i})' class='btn btn-danger'>delete</button></td></tr>`;
  }
  document.getElementById("table").innerHTML = x;
}

function deletedata(index) {
  Data.splice(index, 1);
  console.log(Data);
  var stringarray = JSON.stringify(Data);
  localStorage.setItem("data", stringarray);
  displayData();
}

function clearData() {
  for (i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
}

function getdataInfo(index) {
  curentdata = Data[index];
  cuurentinedx = index;
  Categories.value = curentdata.Categories;
  Meal.value = curentdata.Meal;
  Quantity.value = curentdata.Quantity;
  Price.value = curentdata.Price;
  addBtn.innerHTML = "Update Data";
}

function updatedata() {
  var data = {
    Categories: Categories.value,
    Meal: Meal.value,
    Quantity: Quantity.value,
    Price: Price.value,
  };
  Data[cuurentinedx] = data;
  var stringarray = JSON.stringify(Data);
  localStorage.setItem("data", stringarray);
  addBtn.innerHTML = "Add Data";
}
