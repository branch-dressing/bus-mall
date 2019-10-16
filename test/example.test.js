// IMPORT MODULES under test here:
// import example from '../src/example.js';

const test = QUnit.test;

test('This test will pass until joel writes a real test that really tests something, but he did not focus on this aspect at all, and instead did other aspects of the assignment and then went to eat lunch...', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const joelIsHungry = true;

    //Act 
    // Call the function you're testing and set the result to a const
    function whatShouldJoelDo() {
        if (joelIsHungry === true){
            return 'go to lunch';
        } else {
            return 'keep working';
        }
    }

    const results = whatShouldJoelDo();

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(results, 'go to lunch');
});
