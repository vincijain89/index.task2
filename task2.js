<script>
    document.getElementById("contactForm").onsubmit = function(event) {
        let email = document.getElementById("email").value;
        if (!validateEmail(email)) {
            alert("Invalid email format");
            event.preventDefault();
        }
    };

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
</script>
