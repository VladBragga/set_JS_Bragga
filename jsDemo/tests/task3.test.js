import { areaOfTriangle } from '../src/task3.js';
import { checkValidThirdTask } from '../src/task3.js';
import { sortTriangle } from '../src/task3.js';
import { getAreas } from '../src/task3.js';

export const task3Test = (assert) => {
    describe('Testing 3rd task', () => {

        // main function
        describe('Main function', () => {
            let validOpt = {
                enter: [
                    {
                        vertices: 'CVB',
                        a: 2,
                        b: 2,
                        c: 2.2
                    },
                    {
                        vertices: 'QWE',
                        a: 3,
                        b: 3,
                        c: 3.3
                    }
                ],
                exit: ['QWE', 'CVB']
            };

            let invalidOpt = {
                enter: [
                    {
                        vertices: 'RTY',
                        a: "",
                        b: 2,
                        c: 2.2
                    },
                    {
                        vertices: 'FGH',
                        a: 3,
                        b: 3,
                        c: 3.3
                    }
                ],
                exit: {}
            };

            it('Enter correct value. Expect type of result "Array"', () => {
                let result = areaOfTriangle(validOpt.enter);
                assert(Array.isArray(result));
            });

            it('Enter incorrect value. Expect type of result "Object"', () => {
                let result = areaOfTriangle(invalidOpt.enter);
                assert.equal(typeof result, 'object');
            });

            it(`Enter correct value. Expect result array with sorted names`, () => {
                let result = areaOfTriangle(validOpt.enter);
                assert.deepEqual(result, validOpt.exit);
            });
        });

        // validation function
        describe('Validation function', () => {
            let validOpt = {
                enter: [
                    {
                        vertices: 'ABC',
                        a: 2,
                        b: 2,
                        c: 2.2
                    },
                    {
                        vertices: 'ERT',
                        a: 3,
                        b: 3,
                        c: 3.3
                    }
                ],
                exit: true
            };

            let invalidOpt = {
                invalid_1: {
                    enter: [
                        {
                            vertices: 'ABC',
                            a: -2,
                            b: 2,
                            c: 2.2
                        },
                        {
                            vertices: 'ERT',
                            a: 3,
                            b: 3,
                            c: 3.3
                        }
                    ],
                    exit: 'invalid'
                },
                invalid_2: {
                    enter: [
                        {
                            vertices: 'RTY',
                            a: "a",
                            b: 2,
                            c: 2.2
                        },
                        {
                            vertices: 'QWR',
                            a: 3,
                            b: 3,
                            c: 3.3
                        }
                    ],
                    exit: 'invalid'
                },
                empty: {
                    enter: [
                        {
                            vertices: 'VBN',
                            a: "",
                            b: 2,
                            c: 2.2
                        },
                        {
                            vertices: 'ZXC',
                            a: 3,
                            b: 3,
                            c: 3.3
                        }
                    ],
                    exit: 'empty'
                }
            };

            it(`Enter correct value. Should return true`, function(){
                let result = checkValidThirdTask(validOpt.enter);
                assert.equal(result, validOpt.exit);
            });

            for (let opt in invalidOpt) {
                it(`Enter incorrect value. Expect string with error description`, function () {
                    let result = checkValidThirdTask(invalidOpt[opt].enter);
                    assert.equal(result.reason, invalidOpt[opt].exit);
                });
            }

        });

        // function return array with areas
        describe('Function counts areas ', () => {
            let validOpt = {
                enter: [
                    {
                        vertices: 'QZX',
                        a: 2,
                        b: 2,
                        c: 2.2
                    },
                    {
                        vertices: 'CFV',
                        a: 3,
                        b: 3,
                        c: 3.3
                    }
                ],
                exit: [ 1.7320508075688772, 3.897114317029974 ]
            };

            let invalidOpt = {
                enter: [
                    {
                        vertices: 'YUI',
                        a: 5,
                        b: 2,
                        c: 2.2
                    },
                    {
                        vertices: 'TEJ',
                        a: 3,
                        b: 3,
                        c: 3.3
                    }
                ],
                exit: 'incorrectSides'
            };

            it(`Enter correct value. Expect array with areas`, function(){
                let result = getAreas(validOpt.enter);
                assert.deepEqual(result, validOpt.exit);
            });

            it(`Enter incorrect value. Expect string with error description`, function() {
                let result = getAreas(invalidOpt.enter);
                assert.equal(result.reason, invalidOpt.exit);
            });

        });

// function return sorted array
describe('Function sorts object in array', function() {
        let validOpt = {
            opt_1: {
                arg_1: [
                    {
                        vertices: 'QWE',
                        a: 2,
                        b: 2,
                        c: 2.2
                    },
                    {
                        vertices: 'ABC',
                        a: 3,
                        b: 3,
                        c: 3.3
                    }
                ],
                arg_2: [ 1.7320508075688772, 3.897114317029974 ],
                exit: [
                    {
                        vertices: 'ABC',
                        a: 3,
                        b: 3,
                        c: 3.3
                    },
                    {
                        vertices: 'QWE',
                        a: 2,
                        b: 2,
                        c: 2.2
                    }
                   
                ]
            },
            opt_2: {
                arg_1: [
                    {
                        vertices: 'WER',
                        a: 3,
                        b: 4,
                        c: 5
                    },
                    {
                        vertices: 'ACD',
                        a: 7,
                        b: 5,
                        c: 6
                    }
                ],
                arg_2: [6, 14.696938456699069],
                exit: [
                    {
                        vertices: 'ACD',
                        a: 7,
                        b: 5,
                        c: 6
                    },
                    {
                        vertices: 'WER',
                        a: 3,
                        b: 4,
                        c: 5
                    }
                ]
            }
        };

        for (let opt in validOpt) {
            it(`Enter correct value. Expect sorted array`, function () {
                let result = sortTriangle(validOpt[opt].arg_1, validOpt[opt].arg_2);
                assert.deepEqual(result, validOpt[opt].exit);
            });
        }
    });
    });
}
