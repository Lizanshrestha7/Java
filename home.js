window.addEventListener('scroll', function() {
    var text = document.querySelector('.text');
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;
    var threshold = windowHeight * 0.5; // Adjust the threshold as needed

    // If scrolling down or up past the threshold, add the animation class to the text
    if (scrollPosition > threshold || scrollPosition < threshold) {
        text.classList.add('slide-animation');
    } else {
        // If scrolling back up above the threshold, remove and then re-add the animation class to retrigger the animation
        text.classList.remove('slide-animation');
        setTimeout(function() {
            text.classList.add('slide-animation');
        }, 0); // Delay added to ensure the removal and re-addition of the class are processed separately
    }
});
