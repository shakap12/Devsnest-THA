var fs= require("fs");
//to create a folder
fs.mkdirSync("FIRST FOLDER");

//to create a file inside FIRST FOLDER
fs.writeFileSync("FIRST FOLDER/index.txt","File inside FIRST FOLDER");

//to update the text inside index.txt
fs.appendFileSync("FIRST FOLDER/index.txt","\nHello I am appended text");

// to read the data inside index.txt
fs.readFileSync("FIRST FOLDER/index.txt","utf-8");