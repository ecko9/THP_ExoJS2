let footerElement = document.getElementsByTagName("footer")[0];

let x = 0;

footerElement.addEventListener("click", function (event) {
  x += 1;
  console.log(`clic numéro ${x}`);
});


/*######################################################*/



let headerElement = document.getElementById("navbarHeader");

let hambTarget = document.getElementsByClassName("navbar-toggler")[0];

let collapseAttribute = true;

hambTarget.addEventListener("click", function (event) {
  if (collapseAttribute === true) {
    headerElement.classList.remove("collapse");
    collapseAttribute = false;
  }
  else if (collapseAttribute === false) {
    headerElement.classList.add("collapse");
    collapseAttribute = true;
  }
});

/*######################################################*/


let targetF3 = document.getElementsByClassName("fonct3")[0];

let card1 = document.querySelector("div.card1");

targetF3.addEventListener("click", function (event) {
  card1.style.color = "red"
});

/*######################################################*/

let targetF4 = document.querySelector("button.fonct4");

let card2 = document.querySelector("div.card2");

let card2Style = card2.style.color;

targetF4.addEventListener("click", function (event) {
  if (card2.style.color === "green") {
    card2.style.color = card2Style;
  }
  else {
    card2.style.color = "green";
  }

});

/*######################################################*/

let targetF5 = document.querySelector("head > link");

let navBar = document.querySelector("header");

let cdn = targetF5.href;

let cdnstatus = true;

navBar.addEventListener("dblclick", function (event) {
  if (targetF5.href === cdn) {
    targetF5.href = "";
  }
  else {
    targetF5.href = cdn;
  }
});

/*######################################################*/

let targetF6 = document.querySelectorAll(".btn-success");



for (let i = 0; i < targetF6.length; i++) {

  let parentElem = targetF6[i].parentNode.parentNode.parentNode.parentNode;
  let newNode = parentElem.querySelector("p");
  let reduce = false;

  targetF6[i].addEventListener("mouseover", function (event) {

    if (reduce === false) {
      parentElem.firstElementChild.style.transform = "scale(0.2)";
      parentElem.querySelector("div > p").remove();
      reduce = true;
    }
    else {
      parentElem.firstElementChild.style.transform = "scale(1)";
      parentElem.querySelector("div").insertBefore(newNode, parentElem.querySelector("div").lastElementChild);
      reduce = false;
    }
  });

};

/*######################################################*/

let targetF7 = document.querySelector("section").querySelectorAll("a")[1];

targetF7.addEventListener("click", function (event) {

  let lastCard = document.getElementsByClassName("carroussel")[0].lastElementChild;
  let firstCard = document.getElementsByClassName("carroussel")[0].firstElementChild;

  document.getElementsByClassName("carroussel")[0].insertBefore(lastCard, firstCard);
});


/*######################################################*/


let targetF8 = document.querySelector("section").querySelectorAll("a")[0];
targetF8.href = "#";

targetF8.addEventListener("click", function (event) {

  let lastCard = document.getElementsByClassName("carroussel")[0].lastElementChild;
  let firstCard = document.getElementsByClassName("carroussel")[0].firstElementChild;

  document.getElementsByClassName("carroussel")[0].insertBefore(firstCard, lastCard.nextSibling);
});


/*######################################################*/

let targetF9 = document.querySelector("strong").parentElement;
console.log(targetF9);

let isfocus = false;
targetF9.addEventListener("focus", function (event) {
  isfocus = true;
});

targetF9.addEventListener("blur", function (event) {
  isfocus = false;
});

targetF9.addEventListener("keydown", function (event) {
  if (isfocus === true) {
    console.log(event.code);
    if (event.code === "KeyA") {
      document.getElementsByTagName("body")[0].className = "";
      document.getElementsByTagName("body")[0].classList.add("col-4");
      document.getElementsByTagName("body")[0].classList.add("flex-start");
    }
    else if (event.code === "KeyY") {
      document.getElementsByTagName("body")[0].className = "";
      document.getElementsByTagName("body")[0].classList.add("col-4");
      document.getElementsByTagName("body")[0].classList.add("offset-md-4");
    }
    else if (event.code === "KeyP") {
      document.getElementsByTagName("body")[0].className = "";
      document.getElementsByTagName("body")[0].classList.add("col-4");
      document.getElementsByTagName("body")[0].classList.add("offset-md-8");
    }
    else if (event.code === "KeyB") {
      document.getElementsByTagName("body")[0].className = "";
    }
  }
  else {
  }
});

