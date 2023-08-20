## circle-reassure-danger-test

Repository with simple app with reassure example, with danger and circleci
on each PR, circleci runs tests, linter and performance tests and danger publish the results on the PR - example [here](https://github.com/marcinkornek/circle-reassure-danger-test/pull/2#issuecomment-1682810009)

### Running the example app:
* Install dependencies:
```bash
$ yarn
```

* Run the app on iOS:
``` bash
$ npx expo run:ios
```

* Run the app on Android:
``` bash
$ npx expo run:android
```

### Running the tests/linters:
* Run the tests with jest and [React Native Testing Library](https://callstack.github.io/react-native-testing-library/)
``` bash
$ yarn test
```

* Run the performance tests - this runs [reassure](https://github.com/callstack/reassure) tests):
``` bash
$ yarn perf-test
```

* Run the linter:
``` bash
$ yarn lint
```

* Run the typescript check:
``` bash
$ yarn typecheck
```
