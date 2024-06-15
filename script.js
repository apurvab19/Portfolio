
const observer = new IntersectionObserver ((entries) => {
    entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
        entry.target.classList.add('show');
    } else {
        entry.target.classList.remove('show');
    }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

function toggleMenu(){
    const menu =document.querySelector(".menu-links");
    const icon =document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    var form = event.target;

    fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            alert("Email sent successfully!");
            form.reset();
        } else {
            alert("Failed to send email.");
        }
    }).catch(error => {
        alert("There was an error sending your email.");
    });
});

