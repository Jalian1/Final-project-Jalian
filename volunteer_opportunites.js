document.addEventListener('DOMContentLoaded', () => {
    // Simulated volunteer opportunities data (as if fetched from an API)
    const data = {
      opportunities: [
        {
          title: "Food Bank Volunteer",
          description: "Help sort and package food for families in need at the local food bank.",
          location: "Charleston, SC",
          url: "https://www.lowcountryfoodbank.org/volunteer"
        },
        {
          title: "Community Clean-Up",
          description: "Join our team for a neighborhood clean-up event. Grab a trash bag and make a difference!",
          location: "Columbia, SC",
          url: "https://www.communitycleanup.org/volunteer"
        },
        {
          title: "Shelter Assistant",
          description: "Support at-risk youth by providing mentorship and assisting in daily shelter activities.",
          location: "Greenville, SC",
          url: "https://www.greenvilleyouthshelter.org/volunteer"
        },
        {
          title: "Charity Run Organizer",
          description: "Volunteer to help organize a charity run for a good cause. Assist with registration and race logistics.",
          location: "Charleston, SC",
          url: "https://www.charlestonrunforacause.org/volunteer"
        }
      ]
    };
  
    // Select the container where the data will be displayed
    const container = document.getElementById("volunteer-opportunities-container");
  
    // Check if we have volunteer opportunities data
    if (data && data.opportunities && data.opportunities.length > 0) {
      container.innerHTML = ""; // Clear the loading text
  
      // Create a list of volunteer opportunities
      const list = document.createElement("ul");
  
      data.opportunities.forEach(opportunity => {
        const listItem = document.createElement("li");
        listItem.classList.add("volunteer-opportunity");
  
        const title = document.createElement("h3");
        title.textContent = opportunity.title;
        listItem.appendChild(title);
  
        const description = document.createElement("p");
        description.textContent = opportunity.description;
        listItem.appendChild(description);
  
        const location = document.createElement("p");
        location.textContent = `Location: ${opportunity.location}`;
        listItem.appendChild(location);
  
        const link = document.createElement("a");
        link.href = opportunity.url;
        link.textContent = "More Info";
        listItem.appendChild(link);
  
        list.appendChild(listItem);
      });
  
      container.appendChild(list);
    } else {
      container.innerHTML = "<p>No volunteer opportunities found at the moment.</p>";
    }
  });
  