import "./styles.css";
import { trackPageview, trackEvent } from "./analytics-api.js";
import { getVariantId } from "./utils";

let variantId = getVariantId();
let buttons = document.querySelectorAll('.variant-btn');
let signupEle = document.querySelectorAll('[data-cta="signup"]');
let variants = document.querySelectorAll('.articles');

signupEle.forEach(cta => {
    cta.addEventListener('click', function () {
        const variantId = getVariantId();
        trackPageview(variantId)
        trackEvent(variantId)
    });
});

buttons.forEach(button => {
    buttons.forEach(btn => {
        if (btn.id === variantId) {
            btn.classList.add('active');
        }
    });

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

const updateVariant = (id) => {
    localStorage.setItem("variant", id)
}
