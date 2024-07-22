var p = [];
function displayData(id) {
  var cartona = "";
  for (var i = 0; i < p.length; i++) {
    cartona += `<div class="col-md-4">
        <div>
            <img class='w-100 h-75' src='${p[i].image_url}'></img>
            <p>${p[i].title}</p>
            <a href='${p[i].source_url}' class='btn btn-info' target='_blank'  >source</a>
        </div>
    </div>`;
  }

  if (id == "PostData") {
    console.log("potato");
    document.getElementById("postData").innerHTML = cartona;
  }
}

async function getPotato() {
  var response = await fetch("https://forkify-api.herokuapp.com/api/search?q=potato");
  var r = await response.json();
  p = r.recipes;
  console.log("potato", p);
  displayData("PostData");
}

async function getAll() {
  await getPotato();
}

getAll();