var link = document.createElement("a");
link.href = "https://github.com/AdelLarbi/cinox-new.git";
link.alt = "Flash and JS are not enemies!";

var img = document.createElement("img");
img.src = "https://cinox-dar.herokuapp.com/new-user.jpg";
//img.height="128";
//img.width="128";
img.alt="Ad-new-user";
link.appendChild(img);

document.body.appendChild(link);