import { trackPageview, trackEvent } from "../../src/analytics-api";
let variantId = localStorage.getItem('variant') || 1;

const signupEle = document.querySelectorAll('[data-cta="signup"]');
signupEle.forEach(cta => {
    cta.addEventListener('click', function () {
        trackPageview({
            variantId,
            pageName: window.location.href
        })
        trackEvent(variantId)
    });
});
