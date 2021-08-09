### Quizzard

- This is a simple react application for quiz. It's developed with react(TS), redux and few other interesting things.

- We have 3 screens

  - Quiz list page
  - Quiz details page
  - Create question page

- Features

  - Vote
  - Create question
  - Mobile first responsive design
  - 2 theme (dark/light)
  - Test coverage 100% (excluding config files)
  - Cypress e2e test
  - CI-CD Pipeline (with Github Actions)
  - Deployment on surge

- Technologies/Frameworks

  - React (framework/library)
  - Javascript
  - CSS (styled-components)
  - cypress for e2e test

- Deployment

  - Currently I deployed it on surge with help of github actions. Ideally for production system we can use nginx and serve the static sites from there.

- For Future

  - [ ] Improve validation
  - [ ] Better error messages
  - [ ] Improve type checking (we still have any)
  - [ ] Refactor at some places
  - [ ] change hosting with nginx and own server

- Locally Setup
  - Install the dependencies by `yarn`/`npm`
  - Run the project by running `yarn start`
  - Create build by running `yarn build`
  - run tests by running `yarn test`
  - run cypress test by running `yarn cy:run` (with UI `yarn cy:open`)
