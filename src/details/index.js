import { trackPageview, trackEvent } from "../../src/analytics-api";
let variantId = localStorage.getItem('variant') || 1;

const signupEle = document.querySelectorAll('[data-cta="signup"]');

/**
 * Attach event listeners to all elements that lead to Signup
 */
signupEle.forEach(cta => {
    cta.addEventListener('click', function () {
        trackPageview({
            variantId,
            pageName: window.location.href,
        })
        // We can separate out the entry point through which the click happened, by separating out the elements. This might help us understand where the ambient button placement is.
        trackEvent(variantId)
    });
});
