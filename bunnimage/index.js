function getImage(event){
    event.preventDefault() //keeps page from reloading/refreshing

    var bunniForm = document.getElementById("myform");
    //get image and filename uploaded by user via the form
    let nameInput = document.getElementById("username");
    let fileInput = document.getElementById("image");
    let file = fileInput.files[0];

    var payload = new FormData(bunniForm);
    console.log(payload);

    payload.append("file", file);
    $('#output').text("Thanks!");
    

    //to validate that name isn't null:
    if (document.getElementById("username").value !="") {

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

async function downloadImage() {
    let username = document.getElementById("downloadusername").value
    if (username != '') {

        try {
            let url = "https://baddabing.azurewebsites.net/api/bunnimage-download?code=qoa8KWjLzWabOJxaeU43ozi8w3yiI6sbqdHg0Ed750PyMacCqtaSyw=="
        console.log("Got file name, making GET request to download image")
        
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'username': username
            }
        })

        let data = await response.json();
        let imageUrl = data.downloadUri

        console.log("Made GET request successfully")

        window.open(imageUrl, "_self")
        } catch (error) {
            alert(error)
        }
        
    }else{
        alert("No name error.")
    }
}