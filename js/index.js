const storyContainer = document.querySelector(".story-container");
const topStoriesContainer = document.querySelector(".top-stories-list");
const carousel1 = document.querySelector(".carousel_1");
const carousel2 = document.querySelector(".carousel_2");
const carousel3 = document.querySelector(".carousel_3");
const topStoriesHeading = document.querySelector(".top-stories-container h2");
const latestStoriesHeading = document.querySelector(
  ".latest-stories-container h2"
);
const horizontalLine = document.querySelector(".horizontal_line");
const arrow = document.querySelector(".arrow");
const topButton = document.querySelector(".top_button");
const carouselNav = document.querySelector(".carousel_nav");

const databaseUrl =
  "http://stiankornbakk.com/database/wp-json/wp/v2/posts?per_page=12";

async function executeApiCall() {
  try {
    const response = await fetch(databaseUrl);

    const results = await response.json();

    generateHeadlineStory(results);

    generateTopBlog(results);

    generateLatestBlogs(results);
  } catch {
    console.log("An error has occured");
    storyContainer.innerHTML = errorMessage("An error has occured");
  }
}

executeApiCall();

function generateHeadlineStory(results) {
  for (let i = 0; i < results.length; i++) {
    if (results[i].sticky === true) {
      storyContainer.innerHTML = "";

      storyContainer.innerHTML += `<a href="html/blog-specific.html?id=${results[i].id}">
                                      <div class="top-blog fade-in tablet-width">
                                        <div class="top-image-container">
                                          <img src="${results[i].featured_media_src_url}" id="top_image" alt="${results[i].acf.alt_text}">
                                        </div>
                                        <h1 id="top-story_h1">${results[i].title.rendered}</h1>
                                        <h2 id="top-story_h2">${results[i].acf.second_heading}</h2>
                                        <p id="top_date" class="date-p">${results[i].acf.date}</p>
                                      </div>
                                    </a>`;
    }
  }
  topStoriesHeading.style.display = "block";
  latestStoriesHeading.style.display = "block";
  horizontalLine.style.display = "block";
  topButton.style.display = "block";
  arrow.style.display = "block";
  carouselNav.style.display = "flex";
}

function generateTopBlog(results) {
  for (let i = 0; i < results.length; i++) {
    if (results[i].categories[0] === 24) {
      topStoriesContainer.innerHTML += `<a href="html/blog-specific.html?id=${results[i].id}">
                                          <div class="top-blogs fade-in">
                                            <img src="${results[i].featured_media_src_url}" class="home-page_image" alt="${results[i].acf.alt_text}">
                                            <h3>${results[i].title.rendered}</h3>
                                            <p class="date-p index-date-p">${results[i].acf.date}</p>
                                          </div>
                                        </a>`;
    }
  }
}

function generateLatestBlogs(results) {
  for (let i = 0; i < results.length; i++) {
    if (i <= 3) {
      carousel1.innerHTML += `<a href="html/blog-specific.html?id=${results[i].id}">
          <div class="latest-blogs fade-in">
            <img src="${results[i].featured_media_src_url}" class="home-page_image" alt="${results[i].acf.alt_text}">
            <h3>${results[i].title.rendered}</h3>
            <p class="date-p index-date-p">${results[i].acf.date}</p>
          </div>
        </a>`;
    }
  }

  for (let i = 4; i < results.length; i++) {
    if (i <= 7) {
      carousel2.innerHTML += `<a href="html/blog-specific.html?id=${results[i].id}">
        <div class="latest-blogs fade-in">
          <img src="${results[i].featured_media_src_url}" class="home-page_image" alt="${results[i].acf.alt_text}">
          <h3>${results[i].title.rendered}</h3>
          <p class="date-p index-date-p">${results[i].acf.date}</p>
        </div>
      </a>`;
    }
  }

  for (let i = 8; i < results.length; i++) {
    if (i <= 11) {
      carousel3.innerHTML += `<a href="html/blog-specific.html?id=${results[i].id}">
        <div class="latest-blogs fade-in">
          <img src="${results[i].featured_media_src_url}" class="home-page_image" alt="${results[i].acf.alt_text}">
          <h3>${results[i].title.rendered}</h3>
          <p class="date-p index-date-p">${results[i].acf.date}</p>
        </div>
      </a>`;
    }
  }

  let carouselSlideView = 0;
  const carouselSlides = document.querySelectorAll(".carousel-list");
  const nextButton = document.querySelector("#carousel_view-more");
  const previousButton = document.querySelector("#carousel_view-previous");

  nextButton.addEventListener("click", function () {
    transitionToNextSlideView();
  });

  previousButton.addEventListener("click", function () {
    transitionToPreviousSlideView();
  });

  function transitionToNextSlideView() {
    if (carouselSlideView === 2) {
      carouselSlideView = 0;
    } else {
      carouselSlideView++;
    }

    displayNewSlideView();
  }

  function transitionToPreviousSlideView() {
    if (carouselSlideView === 0) {
      carouselSlideView = 2;
    } else {
      carouselSlideView--;
    }

    displayNewSlideView();
  }

  function displayNewSlideView() {
    for (let displayedSlide of carouselSlides) {
      displayedSlide.classList.remove("active-carousel");
      displayedSlide.classList.add("inactive-carousel");
    }

    carouselSlides[carouselSlideView].classList.add("active-carousel");
  }
}
