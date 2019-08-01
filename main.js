const con = document.querySelector("#taille12");

if(con.hasAttribute("_blank")) {
    console.log(con.getAttribute("_blank"));
} else {
    console.log(con.setAttribute("_blank","_blank"));
}

console.log("Done.");

console.log(con.attributes);

///// 


const featured = document.querySelector(".featured-image");
const theimg = featured.querySelector("img");

var altText = theimg.getAttribute("alt"); 

var CaptionElement = document.createElement("featuredFigure");

var CaptionText = document.createTextNode(altText);

CaptionElement.appendChild(CaptionText);
featured.appendChild(CaptionElement);

theimg.toggleAttribute("alt");

console.log(featured);