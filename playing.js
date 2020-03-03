const obj = [{
        name: "el",
        age: 12
    },
    {
        name: "mehdi",
        age: 13
    },
    {
        name: "taj",
        age: 13
    }
];

//problem: we hve to insert name as input 
var name = 'element.name';



function Fill(element) {
    return [element.name, element.age];
}

console.log(Fill(name));
//main/test
obj.forEach(element => {

    console.log(Fill(element));
});
// console.log(obj[0].name);