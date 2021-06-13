const projectContainer = document.querySelector(".projectPage .project-block");

fetch("/api/users/profile")
  .then((res) => res.json())
  .then((data) => {
    const { projects } = data;
    displayProjects(projects);
  });

function displayProjects(data) {
    if(data.length > 0) {
        data.map((project) => {
          let output = "";
              output = `
                  <div class="projectCard">
                  <div class="header">
                      <span class="circle"></span>
                      <h2>${project.project_name}</h2>
                  </div>
                  <p>${project.project_description}</p>
                  </div> 
                  `;
          projectContainer.innerHTML += output;
        });
    } else {
        projectContainer.innerHTML = `<h2> There are no active projects on your profile yet. </h2>`
    }
}
