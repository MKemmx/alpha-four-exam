document.addEventListener("DOMContentLoaded", function () {
  // Initialize Slider
  new Splide(".splide", {
    type: "loop",
    pagination: true,
    arrows: true,
    omitEnd: true,
    gap: "2em",
    perPage: 1,
    breakpoints: {
      1280: {
        width: "1100px",
      },
      1200: {
        width: "1000px",
      },
      1100: {
        width: "85%",
      },
      1000: {
        width: "90%",
      },
      600: {
        width: "85%",
      },
    },
  }).mount();

  const faqItems = document.querySelectorAll(".faq_items li");
  faqItems.forEach((faqItem) => {
    const faqItemCon = faqItem.firstElementChild;
    const faqBtn = faqItemCon.querySelector(".faq_btn");
    const faqPara = faqItemCon.querySelector(".faq_para");
    faqBtn.addEventListener("click", () => {
      faqBtn.classList.toggle("active");
      faqPara.classList.toggle("hidden");
      faqBtn.innerHTML = "";
      if (faqBtn.classList.contains("active")) {
        faqBtn.innerHTML = `
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.5 12.3789C4.5 11.8266 4.94772 11.3789 5.5 11.3789H19.5C20.0523 11.3789 20.5 11.8266 20.5 12.3789C20.5 12.9312 20.0523 13.3789 19.5 13.3789H5.5C4.94772 13.3789 4.5 12.9312 4.5 12.3789Z"
              fill="#1254FF"
            />
          </svg>`;
      } else {
        faqBtn.innerHTML = `
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.5 11.3789H13.5V5.37891C13.5 5.11369 13.3946 4.85934 13.2071 4.6718C13.0196 4.48426 12.7652 4.37891 12.5 4.37891C12.2348 4.37891 11.9804 4.48426 11.7929 4.6718C11.6054 4.85934 11.5 5.11369 11.5 5.37891V11.3789H5.5C5.23478 11.3789 4.98043 11.4843 4.79289 11.6718C4.60536 11.8593 4.5 12.1137 4.5 12.3789C4.5 12.6441 4.60536 12.8985 4.79289 13.086C4.98043 13.2735 5.23478 13.3789 5.5 13.3789H11.5V19.3789C11.5 19.6441 11.6054 19.8985 11.7929 20.086C11.9804 20.2736 12.2348 20.3789 12.5 20.3789C12.7652 20.3789 13.0196 20.2736 13.2071 20.086C13.3946 19.8985 13.5 19.6441 13.5 19.3789V13.3789H19.5C19.7652 13.3789 20.0196 13.2735 20.2071 13.086C20.3946 12.8985 20.5 12.6441 20.5 12.3789C20.5 12.1137 20.3946 11.8593 20.2071 11.6718C20.0196 11.4843 19.7652 11.3789 19.5 11.3789Z"
              fill="#58648A"
            />
          </svg>
          `;
      }
    });
  });

  const backDrop = document.getElementById("backdrop");
  const closeBtn = document.getElementById("close_btn");
  const hamburgerMenu = document.getElementById("hamburger_menu");
  const mobileMenu = document.getElementById("mobile_menu");

  const toggleMenu = () => {
    mobileMenu.classList.toggle("top-[15vh]");
    mobileMenu.classList.toggle("-top-[100vh]");
    backDrop.classList.toggle("hidden");
  };

  backDrop.addEventListener("click", toggleMenu);
  hamburgerMenu.addEventListener("click", toggleMenu);
  closeBtn.addEventListener("click", toggleMenu);
});
