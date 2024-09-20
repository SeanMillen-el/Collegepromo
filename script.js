const teamMembers = [
  {
    img: "imgs/Colleges/college of Engineering.jpg",
    name: "Newark College of Engineering",
  },

  {
    img: "imgs/Colleges/College of science and liberal arts.jpg",
    name: "Jordan Hu College of Science and Liberal Arts",
  },

  {
    img: "imgs/Colleges/college of architecture.jpg",
    name: "J. Robert and Barbara A. Hillier College of Architecture and Design",
  },
  {
    img: "imgs/Colleges/College of compting.jpg",
    name: "Ying Wu College of Computing",
  },
  {
    img: "imgs/Colleges/college of management.jpg",
    name: "Martin Tuchman School of Management",
  },
  {
    img: "imgs/Colleges/Honors college.jpg",
    name: "Albert Dorman Honors College",
  },
];
function generateTeamCards() {
  const teamCardsContainer = document.getElementById("teamCards");
  teamMembers.forEach((member) => {
    const card = document.createElement("div");
    card.classList.add("col-md-4");

    // Define background color based on position
    let backgroundColor;

    if (member.position === "outside") {
      backgroundColor = "#0128C8";
    } else if (member.position === "middle") {
      backgroundColor = "white";
    } else if (member.position === "opposite") {
      backgroundColor = "#00AEFF";
    } else if (member.position === "setter") {
      backgroundColor = "#C80101";
    } else if (member.position === "libero") {
      backgroundColor = "silver";
    }

    card.style.backgroundColor = backgroundColor;

    // Apply border color to the card-header
    let borderColor;
    switch (member.position) {
      case "outside":
        borderColor = "#0128C8";
        break;
      case "middle":
        borderColor = "white";
        break;
      case "opposite":
        borderColor = "#00AEFF";
        break;
      case "setter":
        borderColor = "#C80101";
        break;
      case "libero":
        borderColor = "silver";
        break;
      default:
        borderColor = "black";
    }
    card.innerHTML = `
            <div class="card h-100">
                <div class="card-header text-center" style="border-color: ${borderColor};">${
      member.name
    }</div>
                <div class="card-body">
                    <img class="img-fluid" src="${member.img}">
                    <p><strong>Position:</strong> ${member.position}</p>
                    <p><strong>Skills:</strong> ${member.skills.join(", ")}</p>
                    <p><strong>Strengths:</strong> ${member.strengths}</p>
                    <p><strong>Weaknesses:</strong> ${member.weaknesses}</p>
                    <p><strong>Biography:</strong> ${member.biography}</p>
                </div>
            </div>
        `;

    teamCardsContainer.appendChild(card);
  });
}

window.onload = generateTeamCards();
