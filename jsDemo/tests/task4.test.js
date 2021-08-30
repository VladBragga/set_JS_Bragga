import { definePalindrome } from '../src/task4.js';
import { checkValidFourthTask } from '../src/task4.js';

export const task4Test = (assert) => {
    describe('Testing 4th task', () => {

        // main function
        describe('Main function', () => {
            let validOpt = {
                opt_1: {
                    enter: 15678,
                    exit: 0
                },
                opt_2: {
                    enter: 12325,
                    exit: 232
                }
            };

            let invalidOpt = {
                enter: -5527,
                exit: 'invalid'
            };

            it(`Enter correct value "${validOpt.opt_1.enter}". Expect type of result "Number"`, () => {
                let result = definePalindrome(validOpt.opt_1.enter);
                assert.equal(typeof result, 'number');
            });

            it(`Enter incorrect value "${invalidOpt.enter}". Expect type of result "Object"`, () => {
                let result = definePalindrome(invalidOpt.enter);
                assert.equal(typeof result, 'object');
            });

            it(`Enter "${validOpt.opt_1.enter}". Expect that palindrome will be undefined`, () => {
                let result = definePalindrome(validOpt.opt_1.enter);
                assert.equal(result, validOpt.opt_1.exit);
            });

            it(`Enter "${validOpt.opt_2.enter}". Expect that palindrome will be defined`, () => {
                let result = definePalindrome(validOpt.opt_2.enter);
                assert.equal(result, validOpt.opt_2.exit);
            });
        });

        // validation function
        describe('Validation function', function(){
            let validOpt = {
                enter: 12345,
                exit: true
            };

            let invalidOpt = {
                invalid_1: {
                    enter: -12345,
                    exit: 'invalid'
                },
                invalid_2: {
                    enter: "x.o.1",
                    exit: 'invalid'
                },
                empty: {
                    enter: '',
                    exit: 'empty'
                }
            };

            it(`Enter "${validOpt.enter}". Should return true`, () => {
                let result = checkValidFourthTask(validOpt.enter);
                assert.equal(result, validOpt.exit);
            });

            for (let opt in invalidOpt) {
                it(`Enter "${invalidOpt[opt].enter}". Expect string with error description`,() =>{
                    let result = checkValidFourthTask(invalidOpt[opt].enter);
                    assert.equal(result.reason, invalidOpt[opt].exit);
                });
            }
        });
    });
}