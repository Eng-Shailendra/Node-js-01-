// ? fs (File-management system) this module is comes with node 


// First import fs module form node environment
import fs from "node:fs";

//! CRUD operation

//! In synchronus manner
//? CREATE File with fs module
// fs.writeFileSync("./Demo.txt", "First file Created with help of fs module");
// console.log("CREATED")

//? Read File with fs module
// let read = fs.readFileSync("./Demo.txt",);
// console.log(read);  //? it return buffer file;
// let read = fs.readFileSync("./Demo.txt", "utf-8");
// console.log(read);
// console.log("READED");


//? Update file with fs module
// fs.appendFileSync("./Demo.txt", "\nHello world");
// console.log("UPDATED");

//? DELETE file with fs module
// fs.unlinkSync("./Demo.txt", "utf-8");
// console.log("DELETE");


//! ASYNCHRONUS manner crud operation


//? Creat file
fs.writeFile("./Demo.txt", "First file Created with help of fs module", () => {
    console.log("File is Created");
});

//? Read file
fs.readFile("./Demo.txt", "utf-8", () => {
    console.log("file is readed");
});

//? Update file 
fs.appendFile("./Demo.txt", "Async file is updated", () => {
    console.log("file is  updated ");
});

//? 
fs.unlink("./Demo.txt", () => {
    console.log("File is DELETE");
})