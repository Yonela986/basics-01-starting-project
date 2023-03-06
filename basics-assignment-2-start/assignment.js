const task3Element = document.getElementById('task-3');

function assignmentOne(){
    // let message = "My first task";
    // alert("I have " + message);
    alert('Hi there! ');
}
//task3Element.addEventListener('click', assignmentOne)

function assignmentTwo(name){
    // let person = name;
    // alert(name);
    alert('Hi ' + name);
}

//assignmentOne();
assignmentTwo("Yonela");
task3Element.addEventListener('click', assignmentOne)


function combine(name1, name2, name3){
     const combinedText = name1 + name2 + name3;
     return combinedText;
    // const name = name1;
    // const surname = name2;
    // const city = name3;

    // let person = name + surname + city;

    // alert('My details are as follow : ' + person);
}

//task3Element.addEventListener('click', assignmentOne)

//assignmentThree('Yonela' + 'Futho' + 'CPT');
const combinedString = combine('Hi', 'there', '!');
alert(combinedString);