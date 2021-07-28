let fs = require("fs");

fs.readFileSync("Does/Not/Exist", handlefile)

function handlefile(error, file) {
    if (error) {
        return console.error("Uh oh there was an error");
    } else {
        console.log("No error, here's your file!");
        console.log(file);
    }
}