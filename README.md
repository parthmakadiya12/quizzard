### Quizzard

- This is a simple react application for quiz. It's developed with react(TS), redux and few other interesting things.

- We have 3 screens

  - Quiz list page
  - Quiz details page
  - Create question page (TODO)

- Features

  - Vote
  - mobile first responsive design
  - 2 theme (dark/light)
  - Test coverage 100% (excluding config files)

- Technologies/Frameworks

  - React (framework/library)
  - Javascript
  - CSS (styled-components)
  - cypress for e2e test

- Deployment

  - Currently I deployed it on surge with help of github actions. Ideally for production system we can use nginx and serve the static sites from there.

- Locally Setup
  - Install the dependencies by `yarn`/`npm`
  - Run the project by running `yarn start`
  - Create build by running `yarn build`
  - run tests by running `yarn test`
  - run cypress test by running `yarn cy:run` (with UI `yarn cy:open`)
