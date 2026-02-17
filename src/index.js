import "./styles.css";
import { project, displayProject } from "./project.js";
import toDo from "./todo.js";

//=================
//Global variables
//=================
const btNewProject = document.querySelector("#new-project");
const projectDialog = document.querySelector("#project-modal");
const btAddProject = document.querySelector("#new-project");
const btCloseModal = document.querySelector("#close-modal");

const btNewTodo = document.querySelector("#new-todo");

//Page start
firstLoad();

//==========
//Functions
//==========

//Función que incializa la página
function firstLoad() {
    const defaultProject = new project("Default");

    displayProject(defaultProject);
    displayProject(new project("Prueba"));
}

//================
//Event listeners
//================

btNewProject.addEventListener("click", (e) => {
    //console.log("Helloooo");
    projectDialog.showModal();
});

btCloseModal.addEventListener("click", (e) => {
    projectDialog.close();
});