# cucumber-ts-starter
Starter project to write and debug cucumber-js features in TypeScript language.

## After cloning the repo

* run the command `yarn install`.

## To execute the tests locally

* run the command `yarn test`.

## To debug a scenario in Visual Studio Code

* tag the scenario with `@only` and `@debug`
* set the breakpoints in the typescript code
* Start debugging

## To run only specific scenarios

* tag the scenario(s) with `@only`

## To ignore a scenario

* tag the scenario with `@ignore`

## To check for typescript and linting errors

* run the command `yarn run build`.

## To view the html report of the last run

* run the command `yarn run report`.

## To create a new step

* first write the Given/When/Then sentence:
  ```gherkin
  Given I push "foo" on "bar"
  ```

* tag the scenario with `@only`

* run the npm script:
  ```sh
  npm run snippets
  ```

* the script will report the missing step(s): you just need to copy and paste them in the step definitions file:

  ```sh
  Given('I push {string} on {string}', async function (string, string2) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });
  ```

## To use a custom option on the CLI

* add your custom option to the CLI that starts cucumber:
```sh
./node_modules/.bin/cucumber-js features/**/*.feature --foo=bar
```
* use it at runtime:
```js
if (this.cliArgs.foo === 'bar') {
  // custom code for option --foo=bar
}
```

## To use a custom World Objet

* cutomize the given Custom World Object : [custom-world](world/custom-world.ts)