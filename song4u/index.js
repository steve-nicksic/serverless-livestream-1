const querystring = require('querystring');
const fetch = require('node-fetch')

module.exports = async function (context, req) {
    //user messages number, message is saved as req.body
    context.log(req.body);

    const queryObject = querystring.parse(req.body);

    const url = queryObject.MediaUrl0;
    let resp = await fetch(url, {
        method: 'GET'
    })

    let data = await resp.arrayBuffer() //data holds image we just downloaded

    let age_data = await analyzeImage(data);

    let age = age_data[0].faceAttributes.age;

    let generation = determine_generation(age);

    context.log(generation);

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: generation
    };
}

function determine_generation(age) {
    let generation;
    if(age > 5 && age < 25) {
    generation = "GenZ";
    } else if(age > 24 && age < 41){
        generation = "GenY";
    } else if(age > 40 && age < 57){
        generation = "GenX";
    } else if(age > 56 && age < 76){
        generation = "BabyBoomers";
    }else {
        generation = "Unknown";
    }
    return generation;
}

async function analyzeImage(img) {
    const subscriptionKey = process.env.SUBSCRIPTIONKEY;
    const uriBase = process.env.ENDPOINT + '/face/v1.0/detect';

    let params = new URLSearchParams({
        'returnFaceId': 'true',
        'returnFaceAttributes': 'age'
    })

    let resp = await fetch(uriBase + '?' + params.toString(),{
        method: 'POST',
        body: img,
        // img is the parameter inputted
        headers: {
            'Content-Type' : 'application/octet-stream',
            'Ocp-Apim-Subscription-Key': subscriptionKey
        }
    })

    let data = await resp.json();
    return data;
}