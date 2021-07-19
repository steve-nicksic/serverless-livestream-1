function getImage(event){
    event.preventDefault() //keeps page from reloading/refreshing

    var bunniForm = document.getElementById("myform");
    //get image and filename uploaded by user via the form
    let nameInput = document.getElementById("username");
    let fileInput = document.getElementById("image");

    var payload = new FormData(bunniForm);
    console.log(payload);

    const file = fileInput.files[0];
    payload.append("file", file);
    $('#output').text("Thanks!");
    

    //to validate that name isn't null:
    if (document.getElementById("name").value !="") {

        try {
            let url = "https://baddabing.azurewebsites.net/api/bunnimage-upload?code=pHIOnA9AwG6iv0VfVaSVvFFgTTiUuyp4SqoaCRdwFJ2pyxbtD68LTA=="
            $('#output').text("Thanks!");
            console.log("Image was uploaded, making POST request to Azure function")


            //Create request to AZURE function
            const response = fetch(url, {
                method: 'POST',
                headers: {
                    'codename': nameInput.value
                },
                body: payload
            });

            $('#output').text("Your image has been stored successfully!");
        } catch (error) {
            $('#output').text(error)
        }
        

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

    //Create request to AZURE function
    
}