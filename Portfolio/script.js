// Smooth scrolling navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Project filter
const projectFilter = () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projects = document.querySelectorAll(".project");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");
      projects.forEach((project) => {
        if (filter === "all" || project.classList.contains(filter)) {
          project.style.display = "block";
        } else {
          project.style.display = "none";
        }
      });
    });
  });
};

// Skills progress bars
const animateSkillBars = () => {
  const skillBars = document.querySelectorAll(".skill-bar");
  skillBars.forEach((bar) => {
    const skill = bar.getAttribute("data-skill");
    bar.style.width = `${skill}%`;
  });
};

const observeSkills = () => {
  const skillsSection = document.getElementById("skills");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateSkillBars();
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(skillsSection);
};

// Interactive timeline
const createTimeline = () => {
  // Implementation depends on the specific timeline library you choose
  // This is a placeholder for the concept
  console.log("Timeline functionality to be implemented");
};

// Dynamic type effect
const typeEffect = (element, text, speed = 100) => {
  let i = 0;
  const timer = setInterval(() => {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
};

// Image gallery
const createImageGallery = () => {
  const images = document.querySelectorAll(".project img");
  images.forEach((img) => {
    img.addEventListener("click", () => {
      const lightbox = document.createElement("div");
      lightbox.id = "lightbox";
      document.body.appendChild(lightbox);

      const bigImage = document.createElement("img");
      bigImage.src = img.src;
      lightbox.appendChild(bigImage);

      lightbox.addEventListener("click", (e) => {
        if (e.target !== e.currentTarget) return;
        lightbox.remove();
      });
    });
  });
};

// Animated counters
const animateCounters = () => {
  const counters = document.querySelectorAll(".counter");
  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target");
    const increment = target / 200;
    let current = 0;
    const updateCounter = () => {
      if (current < target) {
        current += increment;
        counter.innerText = Math.ceil(current);
        setTimeout(updateCounter, 1);
      } else {
        counter.innerText = target;
      }
    };
    updateCounter();
  });
};

// Form validation
const validateForm = () => {
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields");
    } else if (!isValidEmail(email)) {
      alert("Please enter a valid email address");
    } else {
      alert("Form submitted successfully!");
      form.reset();
    }
  });
};

const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// Parallax scrolling
const parallaxEffect = () => {
  window.addEventListener("scroll", () => {
    const parallaxElements = document.querySelectorAll(".parallax");
    parallaxElements.forEach((element) => {
      const speed = element.getAttribute("data-speed");
      element.style.transform = `translateY(${window.scrollY * speed}px)`;
    });
  });
};

// Initialize all functions
document.addEventListener("DOMContentLoaded", () => {
  projectFilter();
  observeSkills();
  animateSkillBars();
  createTimeline();
  typeEffect(document.querySelector("#home h1"), "Luke Ford", 150);
  createImageGallery();
  animateCounters();
  validateForm();
  parallaxEffect();
});
