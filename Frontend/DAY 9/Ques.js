let name1 = {
    firstname:"Shashwat",
    lastname: "Kapoor",
    printname: function (hometown) {
        console.log(this.firstname,this.lastname,"from",hometown);
    }
}
name1.printname("Lucknow");
let name2={
    firstname:"Vedant",
    lastname:"Kapoor"
}
//use of call function
name1.printname.call(name2,"Lucknow");
//use of apply function
name1.printname.apply(name2,["Lucknow"]);
//use of bind
let printmyname=name1.printname.bind(name2,"Lucknow");
printmyname();


