function getImage(){

    if (document.getElementById("name").value != "") {
        // gets value of 'name' id from the html page - 'if the value is not blank...'

        $('#output').text(document.getElementById("name").value + "❤️");
            //jquery - 'get element with the id of output'
            // then 'set the text to value of 'name'(what user inputs) + a heart'
    }

    // Other possibilities:
    // jQuery(".output").text(jQuery('#name').val() + "❤️❤️❤️❤️❤️")

    //document.getElementById("output").innerText = document.getElementById("name").value + "❤️"
}