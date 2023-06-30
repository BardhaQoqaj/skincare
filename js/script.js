document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    const interval = 4000; // Interval in milliseconds (4 seconds)
  
    let slideIndex = 0;
    showSlide(slideIndex);
  
    function showSlide(index) {
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[index].style.display = "block";
    }
  
    function slideNext() {
      slideIndex++;
      if (slideIndex >= slides.length) {
        slideIndex = 0;
      }
      showSlide(slideIndex);
    }
  
    setInterval(slideNext, interval);
  });

  $(document).ready(function() {
    $('.dropdown-toggle').click(function(e) {
      e.preventDefault();
      $(this).next('.dropdown-menu').slideToggle('fast');
    });
  });

  const thumbnails = document.querySelectorAll('.thumbnail');

thumbnails.forEach((thumbnail) => {
  const video = thumbnail.querySelector('.video');

  thumbnail.addEventListener('mouseenter', () => {
    video.play();
  });

  thumbnail.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
  });
});