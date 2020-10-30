var btn = document.getElementById("articleBtn");
var form = document.getElementById("articleForm");
var newH = document.getElementById("newH");
var newP = document.getElementById("newP");
var adderDiv = document.getElementById("adderDiv");
document.getElementById("articleBtn").addEventListener('click', showForm)

function showForm() {
    form.style.display = "block"
}

function hideForm() {
    form.style.display = "none"
}
function checkArticle() {
    if (newH.value != "" && newP.value != "") {
        var divDivider = document.createElement("div");
        var title = document.createElement("h1");
        var paragraph = document.createElement("p");
        title.innerText = newH.value;
        paragraph.innerText = newP.value;
        divDivider.appendChild(title);
        divDivider.appendChild(paragraph)
        adderDiv.prepend(divDivider)
        alert("Submitted to beginning of 3rd image");
        hideForm()
        return true;
    } else {
        alert("Please fill in both title + body")
        return false;
    }
}