function getImage(event){
    event.preventDefault() //keeps page from reloading/refreshing

    //to validate that name isn't null:
    if (document.getElementById("name").value !="") {
        $('#output').text("Thanks!");
    } else {
        alert("No name error.")
    }

    // if (document.getElementById("name").value != "") {
        // gets value of 'name' id from the html page - 'if the value is not blank...'

        // $('#output').text(document.getElementById("name").value + "❤️");
            //jquery - 'get element with the id of output'
            // then 'set the text to value of 'name'(what user inputs) + a heart'
    // }

    // Other possibilities:
    // jQuery(".output").text(jQuery('#name').val() + "❤️❤️❤️❤️❤️")

    //document.getElementById("output").innerText = document.getElementById("name").value + "❤️"
}