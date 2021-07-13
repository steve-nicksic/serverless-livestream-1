var fetch = require("node-fetch")

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    let blobname = "baddabing1"
    
    var username = req.headers['username'];
    var download = ""
    var downloadpng = "https://" + blobname + ".blob.core.windows.net/images/" + username + ".png";
    var downloadjpeg = "https://" + blobname + ".blob.core.windows.net/images/" + username + ".jpeg";

    let pngresp = await fetch(downloadpng, {
        method: 'GET',
     })
     let pngdata = await pngresp;
     
     let jpgresp = await fetch(downloadjpeg, {
        method: 'GET',
     })
     let jpgdata = await jpgresp;

     if (pngdata.statusText == "The specified blob does not exist." && jpgdata.statusText == "The specified blob does not exist." ) {
        success = false;
        context.log("Does not exist: " + pngdata)
        context.log("Does not exist: " + jpgdata)
     } else if (pngdata.statusText != "The specified blob does not exist.") {
        success = true;
        download = downloadpng
        context.log("Does exist: " + pngdata)
     } else if (jpgdata.statusText != "The specified blob does not exist.") {
        success = true;
        download = downloadjpeg
        context.log("Does exist: " + jpgdata)
     }
     
     context.res = {
        body: {
                 "downloadUri" : download,
                 "success": success,
        }
  };
  context.log(download);
  context.done();
  
}