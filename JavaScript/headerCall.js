fetch('/Elements/header.html')
.then(Response => Response.text())
.then(data => {
    document.getElementById('header').innerHTML = data;
});