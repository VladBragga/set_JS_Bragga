import { task1Test } from './task1.test.js';
import { task2Test } from './task2.test.js';
import { task3Test } from './task3.test.js';
import { task4Test } from './task4.test.js';


export const firstTest = () => {
    mocha.setup('bdd');
    const assert = chai.assert;
    mocha.run();
    task1Test(assert);
}
export const secondTest = () => {
    const assert = chai.assert;
    task2Test(assert);
}
export const thirdTask = () => {
    const assert = chai.assert;
    task3Test(assert);
}
export const fourthTask = () => {
    const assert = chai.assert;
    task4Test(assert);
}


