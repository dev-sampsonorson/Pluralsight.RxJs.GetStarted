import { TestScheduler } from 'rxjs/testing';

let scheduler = new TestScheduler((actual, expected) => {
    // perform deep equality test
});


scheduler.run(helpers => {
    // use methods on "helpers" object to test code

    // helpers.cold()
    // helpers.hot()
    // helpers.expectObservable()
    // helpers.expectSubscriptions()
    // helpers.flush()

});