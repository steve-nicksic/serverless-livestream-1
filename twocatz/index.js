const fetch = require('node-fetch')

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

async function getCat(name){
    let endpoint = "data:image/png;base64,https://cataas.com/cat/cute/says/" + name;
    let resp = await fetch(endpoint, {
        method: 'GET'
    });

    let data = await resp.arrayBuffer();
    
    var base64data = Buffer.from(data).toString('base64')

    return base64data;
}

// let catpic1 = await getCat()
// let catpic2 = await getCat()

// function getNames() {
//     var names = ["Shreya", "Emily", "Fifi", "Beau", "Evelyn", "Julia", "Daniel", "Fardeen"];
//     var random_value = Math.floor(names.length * Math.random());
//     var resultname = names[random_value];

//     return resultname;
// }

// let name1 = getNames();
// let name2 = getNames();

let name1 = req.query.name1
let name2 = req.query.name2
let name3 = req.query.name3
let name4 = req.query.name4

let catpic1 = await getCat(name1)
let catpic2 = await getCat(name2)
let catpic3 = await getCat(name3)
let catpic4 = await getCat(name4)

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: {
            cat1: catpic1,
            cat2: catpic2,
            cat3: catpic3,
            cat4: catpic4
        }
    };
}