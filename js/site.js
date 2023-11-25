document.addEventListener("DOMContentLoaded", function () {
  const projects = [
    {
      name: "Typing Tutor",
      technology: "Java",
      description:
        "A typing tutor application to improve typing speed and accuracy.",
    },
    {
      name: "Sorting Algorithm Visualizer",
      technology: "JavaScript",
      description:
        "Visualizes various sorting algorithms to aid in understanding their operations.",
    },
    {
      name: "Ecommerce Website",
      technology: "Node.js, MongoDB, Express",
      description:
        "A fully functional ecommerce website allowing users to browse and purchase products.",
    },
    {
      name: "Multi-class Classification",
      technology: "Python, Scikit-Learn",
      description:
        "Implemented a machine learning model for multi-class classification tasks.",
    },
    // Add more projects as needed
  ];

  const projectsList = document.getElementById("projects-list");
  const filterInput = document.getElementById("filter-input");

  // Initial projects display
  displayProjects(projects);

  // Event listener for filtering projects
  filterInput.addEventListener("input", function () {
    const filteredProjects = projects.filter((project) =>
      project.technology.toLowerCase().includes(filterInput.value.toLowerCase())
    );
    displayProjects(filteredProjects);
  });

  // Function to display projects in the projects list
  function displayProjects(projects) {
    projectsList.innerHTML = "";
    projects.forEach((project) => {
      const projectItem = document.createElement("li");
      projectItem.innerHTML = `<strong>${project.name}</strong> - ${project.technology}<br>${project.description}`;
      projectsList.appendChild(projectItem);
    });
  }
});
