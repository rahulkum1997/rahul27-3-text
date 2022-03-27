// a=10;
// function text(){
//     var b=20;
//     console.log(a)
//     console.log(a)

// }
// text()


// a=10;
// function text(){
//     var b=20;
//     console.log(a)
//     console.log(a)

// }
// text()


var library = [{
    author:'Bill Gates',
    title:'The Road Ahead',
    readingStatus:'true'
},
{
    author:'Steve Jobs',
    title:'Walter Isaacson',
    readingStatus:'true'
},
{
    author:'Suzanne collins',
    title:'Mockingjay: The Final Book of The Hunger Games',
    readingStatus:'false'
}];

for(var i=0;i<library.length;i++){
    var book="'"+library[i].title+"'"+' by '+library[i].author+"'"+' it is '+library[i].readingStatus+".";
        console.log("'"+book);
}


