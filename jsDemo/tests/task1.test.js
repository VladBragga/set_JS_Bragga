import { chessSize } from '../src/task1.js';
import { checkValidFirstTask } from '../src/task1.js';

export const task1Test = (assert) => {
    describe('Testing 1st task', function() {

        // main function
        describe('Check response', function() {
            const validOpt = {
                enter: [4, 1, '#'],
                exit: '# # # # \n'
            };

            const invalidOpt = {
                enter: [-2, 4, '#'],
                exit: 'invalid'
            };

            it(`Enter ${validOpt.enter}. Expect type of result "String"`, function() {
                let result = chessSize(validOpt.enter[0], validOpt.enter[1], validOpt.enter[2]);
                assert.equal(typeof result, 'string');
            });

            it(`Enter ${validOpt.enter}. Expect type of result "Object" (invalid)`, function() {
                let result = chessSize(invalidOpt.enter[0], invalidOpt.enter[1], invalidOpt.enter[2]);
                assert.equal(typeof result, 'object');
            });

            it(`Enter ${validOpt.enter}. Expect string with symbols`, function() {
                let result = chessSize(validOpt.enter[0], validOpt.enter[1], validOpt.enter[2]);
                assert.equal(result, '# # \n');
            });
        });

        // validation function
        describe('Check valid input', function(){
            const validOpt = {
                enter: [6, 4, "#"],
                exit: true
            };

            const invalidOpt = {
                invalid_1: {
                    enter: [-12, 5, '#'],
                    exit: 'invalid'
                },
                invalid_2: {
                    enter: ['t', 2, '@'],
                    exit: 'invalid'
                },
                invalid_3: {
                    enter: ['t', 's', '$'],
                    exit: 'invalid'
                },
                empty_1: {
                    enter: [4, 2],
                    exit: 'empty'
                },
                empty_2: {
                    enter: [],
                    exit: 'empty'
                }

            };

            it (`Enter "${validOpt.enter}". Should return - true`, function() {
                let result = checkValidFirstTask(validOpt.enter[0], validOpt.enter[1], validOpt.enter[2]);
                assert.equal(result, validOpt.exit);
            });

            for (let opt in invalidOpt) {
                it(`Enter "${invalidOpt[opt].enter}". Expect message about wrong input`, function(){
                    let result = checkValidFirstTask(invalidOpt[opt].enter[0], invalidOpt[opt].enter[1], 
                        invalidOpt[opt].enter[2], invalidOpt[opt].enter[3],invalidOpt[opt].enter[4], );
                    assert.equal(result.reason, invalidOpt[opt].exit);
                });
            }
        });
    });
}