import { ItemArray } from './item-array.js';
import { productData } from './api.js';

const items = new ItemArray(productData);
const workingItemArray = items.getItems();
console.log(workingItemArray);


const continueButon = document.getElementById('continue-button');
continueButon.addEventListener('click', event);

function event() {
    const newItem1 = items.getItemAtRandom();
    let newItem2 = items.getItemAtRandom();

    while (newItem2.id === newItem1.id) {
        console.log('second repeat: ' + newItem1.id, newItem2.id);
        newItem2 = items.getItemAtRandom();
    }

    let newItem3 = items.getItemAtRandom();

    while ((newItem3.id === newItem1.id) || (newItem3.id === newItem2.id)) {
        console.log('third repeat: ' + newItem1.id, newItem2.id, newItem3.id)
        newItem3 = items.getItemAtRandom();
    }

    console.log(`1 ${newItem1.id}, 2 ${newItem2.id}, 3 ${newItem3.id}`);
}