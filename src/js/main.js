// Do some simple ES6-specific stuff that we know will get transpiled to ES5.
import work from './work';

function main() {
  work(() => {
    console.log('Callback called.');
  });
}

main();

