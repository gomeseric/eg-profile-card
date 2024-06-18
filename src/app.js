import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should show the cover image
        background: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlicmFyeSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D", // this is the image's url that will be used as a background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "left", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastName: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); // print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `
  <div class="relative m-auto mt-8 flex h-[450px] w-[350px] flex-col rounded-xl bg-white shadow">
  <div class="h-1/2 bg-red-100">
  <img src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlicmFyeSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D">
  </div>

  <div class="h-1/2">
    <div class="flex flex-row font-serif text-xl justify-center text-gray-800 pt-20">${variables.name || "Name"} 
    ${variables.lastName || "Unknow"}</div>

    <div class="flex flex-row underline text-gray-400 font-serif justify-center">${variables.role || "Role"}</div>
    <div class="flex flex-row underline text-gray-400 font-serif justify-center">${variables.city || "City"}</div>
    <div class="flex flex-row underline text-gray-400 font-serif justify-center">${variables.country || "Country"}</div>
  </div>

  <div class="absolute left-0 right-0 top-[35%] flex flex-row justify-center">
    <img src="${
      variables.avatarURL
    }" class="h-32 w-32 rounded-full border-8 border-white" />
  </div>
</div>

    <div class="absolute left-full top-10 ml-px flex flex-col gap-[1px]">
      ${
        variables.twitter 
        ? `<a href="https://twitter.com/${variables.twitter}" class="rounded bg-cyan-500 p-1.5 text-white"><i class="fa-brands fa-twitter"></i></a>`
        : ""
      }
      ${
        variables.github
        ? `<a href="https://github.com/${variables.github}" class="rounded bg-cyan-500 p-1.5 text-white"><i class="fa-brands fa-github"></i></a>`
        : ""
      }  
      ${
        variables.linkedin
        ? `<a href="https://linkedin.com/school/${variables.linkedin}" class="rounded bg-cyan-500 p-1.5 text-white"><i class="fa-brands fa-linkedin"></i></a>`
        : ""
      }
      ${
        variables.instagram
        ? `<a href="https://instagram.com/${4geeksacademy}" class="rounded bg-cyan-500 p-1.5 text-white"><i class="fa-brands fa-instagram"></i></a>`
        : ""
      }
    </div>

</div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should show the cover image
    includeCover: true,
    // this is the image's url that will be used as a background for the profile cover
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    // this is the url for the profile avatar
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastName: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); // render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new values
    });
  });
};
