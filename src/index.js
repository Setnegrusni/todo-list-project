import "./styles.css";

//Global variables
const btNewProject = document.querySelector("#new-project");

//Page start
firstLoad();

//Functions
function firstLoad() {
    const defaultProject = new project("All ToDo's");

    displayProject(defaultProject);
    displayProject(new project("Prueba"));
}

function displayProject(myProject) {
    const projectSection = document.querySelector(".project-section");
    const newProjectArea = document.createElement("div");
    const projectName = document.createElement("p");
    const projectTitle = document.querySelector("#project-name");

    newProjectArea.classList.add("project");
    newProjectArea.setAttribute("data-id", myProject.id);

    newProjectArea.addEventListener("click", (e) => {
        projectTitle.textContent = e.target.textContent;
    })

    projectName.classList.add("project-title");
    projectName.textContent = myProject.title;

    projectSection.appendChild(newProjectArea);
    newProjectArea.appendChild(projectName);
}

//Contructor to create a new project
function project(title) {
    this.id = crypto.randomUUID();
    this.title = title;
}

//constructor to create a new ToDo
function toDo(title, description, dueDate, priority) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
}

//Event listeners

btNewProject.addEventListener("click", (e) => {
    //console.log("Helloooo");
})