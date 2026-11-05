import "./less/style.less";

const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

menuToggle.addEventListener('click', function () {
    mainNav.classList.toggle('open');

    const spans = menuToggle.querySelectorAll('span');
    if (mainNav.classList.contains('open')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

mainNav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
        mainNav.classList.remove('open');
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});



const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
        // Actualizar boton activo
        filterBtns.forEach(function (b) {
            b.classList.remove('active');
        });
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        projectCards.forEach(function (card) {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
});



var header = document.querySelector('.site-header');

window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.4)';
    } else {
        header.style.boxShadow = 'none';
    }
});



var observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animacion a las tarjetas de proyecto
document.querySelectorAll('.project-card').forEach(function (card) {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Aplicar animacion a bio-card y skills-card
document.querySelectorAll('.bio-card, .skills-card').forEach(function (card) {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

const contactForm = document.getElementById('contactForm');
const txtNombreDiv = document.getElementById('txtNombreDiv');
const txtNombre = document.getElementById('txtNombre');
const txtCorreoDiv = document.getElementById('txtCorreoDiv');
const txtCorreo = document.getElementById('txtCorreoElectronico');
const txtMensajeDiv = document.getElementById('txtMensajeDiv');
const txtMensaje = document.getElementById('txtMensaje');

const mostrarError = function (campo, div, texto) {
    campo.classList.add('error');
    var mensajeError = div.querySelector('.error-text');
    if (!mensajeError) {
        mensajeError = document.createElement('p');
        mensajeError.className = 'error-text';
        div.appendChild(mensajeError);
    }
    mensajeError.textContent = texto;
};

const quitarError = function (campo, div) {
    campo.classList.remove('error');
    var mensajeError = div.querySelector('.error-text');
    if (mensajeError) {
        mensajeError.remove();
    }
};

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    var mensajeExito = contactForm.querySelector('.exito-text');
    if (mensajeExito) {
        mensajeExito.remove();
    }

    var valido = true;

    if (txtNombre.value.trim() === '') {
        mostrarError(txtNombre, txtNombreDiv, 'El nombre es obligatorio');
        valido = false;
    } else {
        quitarError(txtNombre, txtNombreDiv);
    }

    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(txtCorreo.value.trim())) {
        mostrarError(txtCorreo, txtCorreoDiv, 'Ingresá un correo válido');
        valido = false;
    } else {
        quitarError(txtCorreo, txtCorreoDiv);
    }

    if (txtMensaje.value.trim() === '') {
        mostrarError(txtMensaje, txtMensajeDiv, 'El mensaje es obligatorio');
        valido = false;
    } else {
        quitarError(txtMensaje, txtMensajeDiv);
    }

    if (valido) {
        contactForm.reset();
        var confirmacion = document.createElement('p');
        confirmacion.className = 'exito-text';
        confirmacion.textContent = 'Mensaje enviado correctamente';
        contactForm.insertBefore(confirmacion, contactForm.firstChild);
    }
});

txtNombre.addEventListener('input', function () {
    quitarError(txtNombre, txtNombreDiv);
});

txtCorreo.addEventListener('input', function () {
    quitarError(txtCorreo, txtCorreoDiv);
});

txtMensaje.addEventListener('input', function () {
    quitarError(txtMensaje, txtMensajeDiv);
});

const caruselTrack = document.querySelector('#caruselPrincipal .track');
const caruselSlides = document.querySelectorAll('#caruselPrincipal .slide');
const btnAnterior = document.querySelector('#caruselPrincipal .btnleft');
const btnSiguiente = document.querySelector('#caruselPrincipal .btnright');
var indiceSlide = 0;

btnAnterior.addEventListener('click', function () {
    if (indiceSlide > 0) {
        indiceSlide = indiceSlide - 1;
        caruselTrack.style.transform = 'translateX(-' + (indiceSlide * 100) + '%)';
    }
});

btnSiguiente.addEventListener('click', function () {
    if (indiceSlide < caruselSlides.length - 1) {
        indiceSlide = indiceSlide + 1;
        caruselTrack.style.transform = 'translateX(-' + (indiceSlide * 100) + '%)';
    }
});

document.querySelectorAll('.formulario').forEach(function (card) {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});
