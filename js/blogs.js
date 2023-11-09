const blogsContainer = document.querySelector(".blog-list");
const buttonContainer = document.querySelector(".view-more-button-container");
const viewMoreButton = document.querySelector("#view-more_button");
const loaderContainer = document.querySelector(".loader-container");
const arrow = document.querySelector(".arrow");
const topButton = document.querySelector(".top_button");
const pageHeading = document.querySelector(".page-heading");

const databaseUrl =
  "https://stiankornbakk.com/databases/wp-json/wp/v2/posts?per_page=12";

async function executeApiCall() {
  try {
    const response = await fetch(databaseUrl);

    const results = await response.json();

    generateBlogs(results);
  } catch {
    console.log("An error has occured");
    loaderContainer.innerHTML = errorMessage("An error has occured");
  }
}

executeApiCall();

function generateBlogs(results) {
  for (let i = 0; i < results.length; i++) {
    loaderContainer.innerHTML = "";
    if (i <= 9) {
      blogsContainer.innerHTML += `<a href="../html/blog-specific.html?id=${results[i].id}">
                                      <div class="blog-container">
                                        <img src="${results[i].featured_media_src_url}" class="blog_image" alt="${results[i].acf.alt_text}">
                                        <h2 class="blog-h2">${results[i].title.rendered}</h2>
                                        <h3 class="blog-h3">${results[i].acf.second_heading}</h3>
                                        <p class="date-p">${results[i].acf.date}</p>
                                      </div>
                                    </a>`;
      pageHeading.style.display = "block";
      buttonContainer.style.display = "block";
      arrow.style.display = "block";
      topButton.style.display = "block";
    }
  }

  viewMoreButton.onclick = function () {
    for (let i = 10; i < results.length; i++) {
      blogsContainer.innerHTML += `<a href="../html/blog-specific.html?id=${results[i].id}">
                                      <div class="blog-container fade-in">
                                        <img src="${results[i].featured_media_src_url}" class="blog_image" alt="${results[i].acf.alt_text}">
                                        <h2 class="blog-h2">${results[i].title.rendered}</h2>
                                        <h3 class="blog-h3">${results[i].acf.second_heading}</h3>
                                        <p class="date-p">${results[i].acf.date}</p>
                                      </div>
                                    </a>`;
    }
    buttonContainer.style.display = "none";
  };
}
