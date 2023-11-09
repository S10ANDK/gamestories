const queryString = document.location.search;

const parameters = new URLSearchParams(queryString);

const id = parameters.get("id");

const url = "https://stiankornbakk.com/databases/wp-json/wp/v2/posts/" + id;

const titleContainer = document.querySelector(".title-container");

const blogContainer = document.querySelector(".specific-blog-container");

async function fetchBlog() {
  try {
    const response = await fetch(url);
    const details = await response.json();

    titleContainer.innerHTML = `${details.title.rendered}`;

    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", details.acf.description);

    blogContainer.innerHTML = "";

    blogContainer.innerHTML += `<div class="specific-blog-container text fade-in">
                                    <h1 class="tablet-width">${details.title.rendered}</h1>
                                    <p class="date-p">${details.acf.date}</p>
                                    <div class="specific-image-container">
                                      <img src="${details.featured_media_src_url}" class="specific_image" alt="${details.acf.alt_text}">
                                    </div>
                                    <div class="modal">
                                      <div class="modal-image-container">
                                        <img src="${details.featured_media_src_url}" class="specific-modal_image" alt="${details.acf.alt_text}">
                                      </div>
                                    </div>                           
                                    <p class="text">${details.content.rendered}</p>
                                </div>`;
  } catch {
    console.log("An error has occured");
    blogContainer.innerHTML = errorMessage("An error has occured");
  }
  const modal = document.querySelector(".modal");
  const modalBox = document.querySelector(".modal-image-container");
  const featuredImage = document.querySelector(".specific_image");
  const header = document.querySelector("header");

  featuredImage.onclick = function () {
    header.style.zIndex = "0";
    modal.style.display = "block";
  };

  window.onclick = function (exit) {
    if (exit.target == modalBox) {
      header.style.zIndex = "2";
      modal.style.display = "none";
    }
  };
}

fetchBlog();
