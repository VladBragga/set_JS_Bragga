
import { envelopes } from '../src/task2.js';
import { checkValidSecondTask } from '../src/task2.js';

export const task2Test = (assert) => {
    describe('Testing 2nd task', function() {

        describe('Main function', function() {
            const validOpt = {
                opt_1: {
                    enter: [
                        {   width:5,
                            height:5 },
                        
                        {   width:5,
                            height:5 }
                    ],
                    exit: 0
                },
                opt_2: {
                    enter: [
                        {   width:3,
                            height:5 },
                        
                        {   width:6,
                            height:10 }
                    ],
                    exit: 1
                },
                opt_3: {
                    enter: [
                        {
                            width:10,
                            height:10 },
                        {
                            width:5,
                            height:5 }
                    ],
                    exit: 2
                }
            };

            const invalidOpt = {
                enter: [
                    {
                        width:-1,
                        height:1
                    },
                    {
                        width:-2.5,
                        height:2
                    }
                ],
                exit: 'invalid'
            };

            it('Enter correct value. Expect type of result "Number"', function() {
                let result = envelopes(validOpt.opt_1.enter[0], validOpt.opt_1.enter[1]);
                assert.equal(typeof result, 'number');
            });

            it('Enter incorrect value. Expect type of result "Object" (invalid input)', function() {
                let result = envelopes(invalidOpt.enter[0], invalidOpt.enter[1]);
                assert.equal(typeof result, 'object');
            });

            for (let opt in validOpt) {
                it(`Enter correct value. Expect result ${validOpt[opt].exit}`, function () {
                    let result = envelopes(validOpt[opt].enter[0], validOpt[opt].enter[1]);
                    assert.equal(result, validOpt[opt].exit);
                });
            }
        });

        // validation function
        describe('Check valid input', function(){
            let validOpt = {
                enter: [
                    {
                        width:1,
                        height:1 },
                    {
                        width:2,
                        height:2 }
                ],
                exit: true
            };

            let invalidOpt = {
                invalid_1: {
                    enter: [
                        {
                            width:-1,
                            height:1 },
                        {
                            width:2,
                            height:2 }
                    ],
                    exit: 'invalid'
                },
                invalid_2: {
                    enter: [
                        {
                            width:-1,
                            height:1 },
                        {
                            width:2,
                            height:2 }
                    ],
                    exit: 'invalid'
                },
                empty: {
                    enter: [
                        {
                            width:"",
                            height:1 },
                        {
                            width:2,
                            height:2  }
                    ],
                    exit: 'empty'
                }
            };

            const w1 = validOpt.enter[0].width,
                w2 = validOpt.enter[1].width,
                h1 = validOpt.enter[0].height,
                h2 = validOpt.enter[1].height;

            it(`Enter [${w1}, ${h1}], [${w2}, ${h2}]. Should return true`, function(){
                let result = checkValidSecondTask(validOpt.enter[0], validOpt.enter[1]);
                assert.equal(result, validOpt.exit);
            });

            for (let opt in invalidOpt) {
                let w1 = invalidOpt[opt].enter[0].width,
                    w2 = invalidOpt[opt].enter[1].width,
                    h1 = invalidOpt[opt].enter[0].height,
                    h2 = invalidOpt[opt].enter[1].height;

                it(`Enter [${w1}, ${h1}], [${w2}, ${h2}]. Expect string with error description`, function(){
                    let result = checkValidSecondTask(invalidOpt[opt].enter[0], invalidOpt[opt].enter[1]);
                    assert.equal(result.reason, invalidOpt[opt].exit);
                });
            }
        });

    });
}