const fetch = require('node-fetch')

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

async function getCat(){
    let resp = await fetch("https://cataas.com/cat/cute/says/Bitcamp", {
        method: 'GET'
    });

    let data = await resp.arrayBuffer()
    
    var base64data = Buffer.from(data).toString('base64')

    return base64data;
}

let catpic1 = await getCat()
let catpic2 = await getCat()

async function getNames() {
    var names = ["Shreya", "Emily", "Fifi", "Beau", "Evelyn", "Julia", "Daniel", "Fardeen"]
    var random_value = Math.floor(names.length * Math.random())
    var resultname = names[random_value]

    return resultname 
}

let name1 = getNames()
let name2 = getNames()

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: {
            cat1: catpic1,
            cat2: catpic2,
            names: [name1, name2]
        }
    };
}