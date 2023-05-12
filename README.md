# Blinkist Coding Challenge

# Introduction
The objective of this application to mock out how A/B testing can be implemented on a Blog with many articles. The idea is to understand which format: text/ video animation series or Quotes that the user finds most interesting and hence result in a successful signup into the platform.
The code is a minimal attempt at a POC, using `javascript` , `html` and plain ol `css`.

# Assumptions
- The backend already takes care of the implementation details, which includes analysing the data coming from FE and feeds it to providers like Google Optimise.
- No frameworks have been used, the starting code and the packages have been preserved/ modified only to a certain extent.
- Emphasis has been given on the business ideas rather than production level implementation.
- The user completes the Sign Up flow once the button is clicked. This assumption therefore implies that we do not have a UI screen for the Sign up form.

# Getting Started
- Clone the git repository and checkout the master branch.
- Install the necessary dependencies from the rot of the folder by running `npm i` from the root of the folder.
- The dev server will be spun at the localhost port of `1234`

# Future Improvements
- Add unit test cases.
- Move to TypeScript.
- Deployment to a hosting service.
- Connection to a Google Optimise or a similar provider to analyse the performance of the variation to make an informed decision on the A/B testing results.
