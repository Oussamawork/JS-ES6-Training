const con = document.querySelector("#taille12");

if(con.hasAttribute("_blank")) {
    console.log(con.getAttribute("_blank"));
} else {
    console.log(con.setAttribute("_blank","_blank"));
}

console.log("Done.");

console.log(con);