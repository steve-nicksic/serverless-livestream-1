let multipart = require('parse-multipart');

module.exports = async function (context, req) {

    var boundary = multipart.getBoundary(req.headers['content-type']);

    // TODO: assign the body variable the correct value
    var body = req.body;

    // parse the body
    var parts = multipart.Parse(body, boundary);

    // save the images raw data in a variable
    var imageData = parts[0].data;

    var convertedResult = Buffer.from(imageData).toString('base64');

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: convertedResult
    };
}