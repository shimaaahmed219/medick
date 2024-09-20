document.addEventListener('DOMContentLoaded', function () {
    const themeIcon = document.getElementById('theme-icon');
    const htmlElement = document.documentElement;

    // Dark mode handling
    if (localStorage.getItem('theme') === 'dark') {
        htmlElement.classList.add('dark');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    }

    themeIcon.addEventListener('click', function () {
        if (htmlElement.classList.contains('dark')) {
            htmlElement.classList.remove('dark');
            themeIcon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'light');
        } else {
            htmlElement.classList.add('dark');
            themeIcon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'dark');
        }
    });

    // Active link handling
    const navItems = document.querySelectorAll('#nav-items li a');
    const currentPath = window.location.pathname.split('/').pop();
    navItems.forEach((item) => {
        const pathLink = item.getAttribute('href');
        if (currentPath === pathLink) {
            item.classList.add('active');
        }
    });
});

// fexid navbar

  window.addEventListener("scroll", function() {
    const navbar = document.querySelector("nav");
   
    if (window.scrollY > 100) {
      navbar.classList.add("fixed", "top-0", "left-0","w-full", "bg-footer", "z-50");
    
    } else {
      navbar.classList.remove("fixed", "top-0", "left-0","w-full","bg-footer", "z-50");
    }
  });


// Counter Function
function startCounter(id, targetNum, duration) {
    const element = document.getElementById(id);
    let start = 0;
    const increment = targetNum / (duration / 70);

    const count = setInterval(() => {
        start += increment;
        element.textContent = Math.ceil(start);
        if (start >= targetNum) {
            element.textContent = targetNum;
            clearInterval(count);
        }
    }, 10);
}

// Check if element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

// Handle scroll event
function handleScroll() {
    const counterSection = document.querySelector('.count');

    if (isInViewport(counterSection)) {
        startCounter("doctors", 1100, 5000);
        startCounter("programs", 1020, 5000);
        startCounter("clients", 912, 5000);
        startCounter("meets", 80, 5000);
    }
}

window.addEventListener('scroll', handleScroll);
let currentSlide = 0;
function moveSlide(index) {
    const slider = document.getElementById('slider');
    currentSlide = index;
    const offset = -index * 100;
    slider.style.transform = `translateX(${offset}%)`;  // استخدام backticks هنا
  
    updateDots();
  }
  
  function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
      if (index === currentSlide) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }
  
  // بدء السلايدر عند النقطة الأولى
  moveSlide(0);

  const menuBtn = document.getElementById('menu-btn');
  const mobileNav = document.getElementById('mobile-nav');

  menuBtn.addEventListener('click', () => {
    // Toggle between 0px and 400px height
    if (mobileNav.style.height === "0px" || mobileNav.style.height === "") {
      mobileNav.style.height = "300px";
     
    } else {
      mobileNav.style.height = "0px"; // إخفاء القائمة
    }
  });