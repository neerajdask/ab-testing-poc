import "./styles.css";
import { trackPageview, trackEvent } from "./analytics-api.js";

let buttons = document.querySelectorAll('.variant-btn');
let signupEle = document.querySelectorAll('[data-cta="signup"]');
let variants = document.querySelectorAll('.articles');

const variantId = localStorage.getItem('variant') || 1;
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
        trackPageview(variantId)
        trackEvent(variantId)
    });
});

buttons.forEach(button => {
    button.addEventListener('click', function () {
        // update button state
        buttons.forEach(btn => btn.classList.remove('active'));
        variants.forEach(variant => variant.classList.remove('active-variant'));
        console.log('this.id', this.id)
        this.classList.add('active');
        variants[this.id - 1].classList.add('active-variant');
        // save for persistence
        updateVariant(this.id);
    });

});

const updateVariant = (id) => {
    localStorage.setItem("variant", id)
}
