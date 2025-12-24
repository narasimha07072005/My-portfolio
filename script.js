(function () {
    'use strict'

    // Scroll to top on page load (fixes refresh staying at old scroll)
    window.addEventListener("load", function () {
        window.scrollTo(0, 0);
    });

    // Bootstrap form validation
    const forms = document.querySelectorAll('.needs-validation');

    Array.from(forms).forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                // If form is invalid, prevent submission
                event.preventDefault();
                event.stopPropagation();
            }
            // Add Bootstrap validation styles
            form.classList.add('was-validated');
        }, false);
    });

})();