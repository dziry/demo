var link = document.createElement("a");
link.href = "https://github.com/AdelLarbi/demo.git";
link.alt = "Flash and JS are not enemies!";

var img = document.createElement("img");
img.src = "https://cinox-dar.herokuapp.com/tracked-user.png";
//img.height="150";
//img.width="300";
img.alt="Ad-tracked-user";
link.appendChild(img);

document.body.appendChild(link);