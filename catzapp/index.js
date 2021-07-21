function y1k3s() {
    let name = document.getElementById("catname").value;
    let endpoint = "https://cataas.com/cat/says/" + name;
    if(name != '') {
        document.getElementById("image").src = endpoint //call to API
    }
}