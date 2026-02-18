import "./styles.css";
import { project, displayProject } from "./project.js";
import toDo from "./todo.js";

//=================
//Global variables
//=================
const btNewProject = document.querySelector("#newProject");
const projectDialog = document.querySelector("#projectModal");
const tfProject = document.querySelector("#projectName");
const btAddProject = document.querySelector("#addingProject");
const btCloseModal = document.querySelector("#closeModal");

const btNewTodo = document.querySelector("#newTodo");

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
    projectDialog.showModal();
});

btCloseModal.addEventListener("click", (e) => {
    projectDialog.close();
});

btAddProject.addEventListener("click", (e) => {
    displayProject(new project(tfProject.value));
});