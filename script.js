// Page Turn

const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((e, index) =>{
    e.onclick = () => {
        const pageTurnId = e.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId)

        if (pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
            }, 500)
        }
        else {
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;
            }, 500)
        }
    }
})

// Multiple Text

var typed = new Typed(".multiple-text", {
    strings: ["Software Developer", "Front-End Developer", "Full-Stack Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

// Contact Me

const pages = document.querySelectorAll('.book-page.page-right');
const contactBtn = document.querySelector('.btn.contact-me')

contactBtn.onclick = () => {
    pages.forEach((page, index) => {
        setTimeout(() => {
            page.classList.add('turn');

            setTimeout(() => {
                page.style.zIndex = 20 + index;
            }, 500)
        }, (index + 1) * 200 + 100)
    })
}

// reverse page

let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex() {
    pageNumber--;
    if (pageNumber < 0) {
        pageNumber = totalPages - 1;
    }
}

// Profile btn

const profileBtn = document.querySelector('.back-profile');

profileBtn.onclick = () => {
    pages.forEach((_, index) => {
        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].classList.remove('turn');

            setTimeout(() => {
                reverseIndex();
                pages[pageNumber].style.zIndex = 10 + index;
            }, 500)
        }, (index + 1) * 200 + 100)
    })
}



const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');

// Cover right animation
setTimeout(() => {
    coverRight.classList.add('turn');
}, 2100)

setTimeout(() => {
    coverRight.style.zIndex = -1;
}, 2800)

// Cover left animation

setTimeout(() => {
    pageLeft.style.zIndex = 20;
}, 3200)

// All page right animation

pages.forEach((_, index) => {
    setTimeout(() => {
        reverseIndex();
        pages[pageNumber].classList.remove('turn');

        setTimeout(() => {
            
            reverseIndex();
            pages[pageNumber].style.zIndex = 10 + index;
        }, 500)
    }, (index + 1) * 200 + 2100)
})

function sendMail() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;

    let body = "Hello Praveen," + "<br/><br/> Name: " + name + "<br/> Email: " + email + "<br/> Subject: " + subject;

    Email.send({
        SecureToken: "11774570-75a6-4bcd-9d74-e0eec4e663be",
        To : 'praveenrajamani58@gmail.com',
        From : "praveen1.adx@gmail.com",
        Subject : "Mail From Portfolio",
        Body : body,
        Port: 587,
        TLS: { enable: true }
    }).then(
      message => {
        // Using SweetAlert for a customized popup
        Swal.fire({
            title: 'Email Sent!',
            icon: 'success',
            confirmButtonText: 'OK'
        }).then(() => {
            window.location.reload();
        });
    });
}