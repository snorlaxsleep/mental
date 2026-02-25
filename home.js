
      const hamburgerMenu = document.getElementById("hamburgerMenu");
      const sidebarNav = document.getElementById("sidebarNav");
      const sidebarOverlay = document.getElementById("sidebarOverlay");
      const sidebarLinks = document.querySelectorAll(".sidebar-menu-link");

      function toggleSidebar() {
        hamburgerMenu.classList.toggle("active");
        sidebarNav.classList.toggle("active");
        sidebarOverlay.classList.toggle("active");
        document.body.style.overflow = sidebarNav.classList.contains("active")
          ? "hidden"
          : "";
      }

      function closeSidebar() {
        hamburgerMenu.classList.remove("active");
        sidebarNav.classList.remove("active");
        sidebarOverlay.classList.remove("active");
        document.body.style.overflow = "";
      }

      hamburgerMenu.addEventListener("click", toggleSidebar);
      sidebarOverlay.addEventListener("click", closeSidebar);

      sidebarLinks.forEach((link) => {
        link.addEventListener("click", function () {
          sidebarLinks.forEach((l) => l.classList.remove("active"));
          this.classList.add("active");
          setTimeout(closeSidebar, 300);
        });
      });

      window.addEventListener("scroll", function () {
        const navbar = document.getElementById("navbar");
        if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      });
      // Navbar scroll effect
      window.addEventListener("scroll", function () {
        const navbar = document.getElementById("navbar");
        if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      });

      // Smooth scrolling
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute("href"));
          if (target) {
            target.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        });
      });

      // Intersection Observer for animations
      const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      };

      const observer = new IntersectionObserver(function (entries) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animation = "fadeInUp 0.8s ease forwards";
          }
        });
      }, observerOptions);

      // Observe elements
      document
        .querySelectorAll(".article-card, .access-card, .quote-card")
        .forEach((card) => {
          card.style.opacity = "0";
          observer.observe(card);
        });

      window.addEventListener("scroll", function () {
        const navbar = document.getElementById("navbar");
        if (window.scrollY > 30) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      });

      // Chat Bubble Animation Controller
      let animationTimeout;

      function startChatAnimation() {
        const bubbles = document.querySelectorAll(".chat-bubble");
        const character = document.querySelector(".cute-character");

        // Reset all animations
        bubbles.forEach((bubble) => {
          bubble.classList.remove("animate");
          bubble.style.opacity = "0";
        });
        character.classList.remove("animate");
        character.style.opacity = "0";

        // Start animations with delays
        setTimeout(() => {
          bubbles[0].classList.add("animate");
        }, 300);

        setTimeout(() => {
          bubbles[1].classList.add("animate");
        }, 1000);

        setTimeout(() => {
          bubbles[2].classList.add("animate");
        }, 1700);

        setTimeout(() => {
          character.classList.add("animate");
        }, 2200);
      }

      function restartChatAnimation() {
        startChatAnimation();
        // Restart every 8 seconds
        if (animationTimeout) {
          clearTimeout(animationTimeout);
        }
        animationTimeout = setTimeout(restartChatAnimation, 8000);
      }

      // Intersection Observer for chat section
      const chatObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              restartChatAnimation();
            } else {
              if (animationTimeout) {
                clearTimeout(animationTimeout);
              }
            }
          });
        },
        { threshold: 0.3 },
      );

      const chatSection = document.querySelector("#chat-section");
      if (chatSection) {
        chatObserver.observe(chatSection);
      }