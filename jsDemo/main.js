import { chessSize } from './src/task1.js';
import { envelopes } from './src/task2.js';
import { areaOfTriangle } from './src/task3.js';
import { definePalindrome } from './src/task4.js';

// TASK 1

const chessSizeRun = () => {
    let data = document.form1.elements; //получение

    //вызов функции
    let result = chessSize(data[0].value, data[1].value, data[2].value);

    if (!result.status) {
        console.log(result);
    } else {
        console.log(result);
    }
}
document.querySelector(".chess-btn").addEventListener('click', chessSizeRun);

// TASK 2
function envelopesRun() {
    const data = document.form2.elements; //получение

    const envelop1 = {
        width: data[0].value,
        height: data[1].value
    }
    const envelop2 = {
        width: data[2].value,
        height: data[3].value
    }
    //вызов функции
    const result = envelopes(envelop1, envelop2);

    if (!result.status) {
        console.log(result);
    } else {
        console.log(result);
    }
}
document.querySelector(".envelop-btn").addEventListener('click', envelopesRun);

// TASK 3
function runAreaOfTriangle() {
    let arrayOfTriangles = [];
    let triangles = document.querySelectorAll(".triangle");// get all the triangles

    for (let i = 0; i < triangles.length; i++) {
        let sidesOfTriangle = triangles[i].querySelectorAll("input");

        let triangle = {
            vertices: sidesOfTriangle[0].value,
            a: sidesOfTriangle[1].value,
            b: sidesOfTriangle[2].value,
            c: sidesOfTriangle[3].value,
        };

        arrayOfTriangles.push(triangle);
    }

    //run the main function with arrayOfTriangles as argument
    let result = areaOfTriangle(arrayOfTriangles);

    if (!result.status) {
        console.log(result);
    } else {
        console.log(result);
    }
}
document.querySelector(".triangle-btn").addEventListener('click', runAreaOfTriangle);

// add one more triangle
function addTriangle() {
    let len = document.querySelectorAll(".triangle").length; // length collection of triangles
    let triangles = document.getElementById('triangles'); // get div let triangles by id
    let triangle = document.createElement('div'); // create empty triangle

    triangle.className = "triangle d-flex";
    triangle.innerHTML = `<span>Triangle ${len+1}: </span>`+
        '<input type="text" class="form-control" placeholder="Name">'+
        '<input type="text" class="form-control" placeholder="side 1">'+
        '<input type="text" class="form-control" placeholder="side 2">'+
        '<input type="text" class="form-control" placeholder="side 3">'+
        '<button type="button" class="btn btn-danger btn-delete del-triangle-btn btn-sm mb-2 px-2">X</button>';
    triangles.appendChild(triangle);
    document.querySelector(".del-triangle-btn").addEventListener('click', delTriangle); // здесь вешаю лисен
}

document.querySelector(".triangle-add-btn").addEventListener('click', addTriangle);
// remove lest triangle
function delTriangle() {
    let triangles = document.querySelectorAll(".triangle");
    triangles[triangles.length-1].remove(triangles[triangles.length]); // del last elem of triangle's collection
}
/* =================================== */
// TASK 4
function runDefinePalindrome() {
    let value = document.form4.elements[0].value;//get value
    //run the main function
    let result = definePalindrome(value);

    if (!result.status) {
        console.log(result);
    } else {
        console.log(result);
    }
}
document.querySelector(".polynom-btn").addEventListener('click', runDefinePalindrome);