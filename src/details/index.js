import { trackPageview, trackEvent } from "../../src/analytics-api";
import { getVariantId } from "../../src/utils";
let variantId = getVariantId();
// console.log('window.location.href', window.location.href)

const signupEle = document.querySelectorAll('[data-cta="signup"]');
console.log('signupEle', signupEle)

signupEle.forEach(cta => {
    cta.addEventListener('click', function () {
        trackPageview(variantId)
        trackEvent(variantId)
    });
});
