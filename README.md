# CRA-JAM
A very opinionated starter Create React App (CRA) template with amazing libraries and tools including:

* React
* TypeScript
* Redux Toolkit
* Styled Components
* React Router
* Custom ESLint Rules

Let's cook a jam!

## Usage
`yarn create react-app your-project-name --template jam`

Or

`npx create-react-app your-project-name --template jam`

npx package runner tool installs the most recent stable version of CRA from npm. (npx comes out of the box with npm 5.2+)

`--template` parameter points to this template, note that `cra-template-` prefix will be omitted.

## Run Scripts
Inside the project directory run using npm or yarn:

* `start` - runs the app in the development mode. Open http://localhost:3000 to view it in the browser.

* `test` - launches the test runner in the interactive watch mode

* `build` - builds the app for production to the build folder

* `eject` - exposes content of react-script package

* `lint` - lints project files according to custom rules

* `fix` - fix lints issues according to style guide set

* `analyzer` - uses cra-bundle-analyzer to Analyzer Bundle (need to install `yarn add -D cra-bundle-analyzer`)