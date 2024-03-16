// Toggle & Responsive Navigation
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navLists = document.querySelector("nav");

  burger.addEventListener("click", () => {
    // Toggle nav list and burger class
    navLists.classList.toggle("nav-active");
    burger.classList.toggle("toggle-burger");
  });
};

navSlide();


document.addEventListener('DOMContentLoaded', function () {
  // Mengatur animasi zoom in saat halaman dimuat
  var heroSection = document.getElementById('hero');
  heroSection.classList.add('zoom-in');
});


// Clear form before unload
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};


//slider
$(document).ready(function () {
  $('.slider').slick({
    slidesToShow: 3, // Menampilkan hanya 3 gambar pada satu waktu
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});


// JavaScript to toggle audio element visibility
document.addEventListener('DOMContentLoaded', function () {
  var showAudioButtons = document.querySelectorAll('.show-audio-btn');

  showAudioButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var audioElement = this.parentNode.querySelector('audio');
      audioElement.style.display = 'block'; // Show audio element
      this.style.display = 'none'; // Hide show audio button
    });
  });
});
