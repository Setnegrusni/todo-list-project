//Contructor to create a new project
function project(title) {
    this.id = crypto.randomUUID();
    this.title = title;
}

//function that shows a project
function displayProject(myProject) {
    const projectSection = document.querySelector(".project-section");
    const newProjectArea = document.createElement("div");
    const projectNameDiv = document.createElement("div");
    const delButtonDiv = document.createElement("div");
    const projectName = document.createElement("p");
    const projectTitle = document.querySelector("#projectSelected");

    newProjectArea.classList.add("project");
    newProjectArea.setAttribute("data-id", myProject.id);

    projectNameDiv.addEventListener("click", (e) => {
        projectTitle.textContent = e.target.textContent;
    })

    projectName.classList.add("project-title");
    projectName.textContent = myProject.title;
    projectNameDiv.classList.add("proj-name");
    delButtonDiv.classList.add("del-button");

    projectSection.appendChild(newProjectArea);
    newProjectArea.appendChild(projectNameDiv);
    newProjectArea.appendChild(delButtonDiv);
    projectNameDiv.appendChild(projectName);
    //newProjectArea.appendChild(projectName);

    addProjectElements(myProject.id, myProject.title);
}

function addProjectElements(projectID, projectTitle) {
    const myProject = document.querySelector("[data-id='" + projectID + "'] > .del-button");
    const myDelButton = document.createElement("button");

    myDelButton.setAttribute("id", "deleteProject");
    myDelButton.textContent = "Delete";

    if (projectTitle != "Default") {
        myProject.appendChild(myDelButton);
    }
}

export { project, displayProject };