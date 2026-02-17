//Contructor to create a new project
function project(title) {
    this.id = crypto.randomUUID();
    this.title = title;
}

//function that shows a project
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

export { project, displayProject };