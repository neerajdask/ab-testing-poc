import "./styles.css";
import { trackPageview, trackEvent } from "./analytics-api.js";

let buttons = document.querySelectorAll('.variant-btn');
let signupEle = document.querySelectorAll('[data-cta="signup"]');
let variants = document.querySelectorAll('.articles');

const variantId = localStorage.getItem('variant') || 1;

// Flush out the active class and set it back again based on local storage value.
buttons.forEach((btn, index) => {
    btn.classList.remove('active')
    if (variantId - 1 === index) {
        btn.classList.add('active');
    }
});

variants.forEach((variant, index) => {
    variant.classList.remove('active-variant')
    if (variantId - 1 === index) {
        variant.classList.add('active-variant');
    }
});

signupEle.forEach(cta => {
    cta.addEventListener('click', function () {
        trackPageview({
            variantId: localStorage.getItem('variant') || 1,
            pageName: window.location.href,
        })
        trackEvent(localStorage.getItem('variant') || 1)
    });
});

buttons.forEach(button => {
    button.addEventListener('click', function () {
        // update button state
        buttons.forEach(btn => btn.classList.remove('active'));
        variants.forEach(variant => variant.classList.remove('active-variant'));
        this.classList.add('active');
        variants[this.id - 1].classList.add('active-variant');
        // save for persistence
        updateVariant(this.id);
    });

});

// synchronize the variant value for subsequent changes
const updateVariant = (id) => {
    localStorage.setItem("variant", id)
}
