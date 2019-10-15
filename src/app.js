import { ItemArray } from './item-array.js';
import { productData } from './api.js';

const items = new ItemArray(productData);
//const workingItemArray = items.getItems();

const itemElement1 = document.getElementById('item-1');
const itemElement2 = document.getElementById('item-2');
const itemElement3 = document.getElementById('item-3');


const continueButon = document.getElementById('continue-button');
continueButon.addEventListener('click', event);

function event() {
    const newItem1 = items.getItemAtRandom();
    let newItem2 = items.getItemAtRandom();

    while (newItem2.id === newItem1.id) {
        newItem2 = items.getItemAtRandom();
    }

    let newItem3 = items.getItemAtRandom();

    while ((newItem3.id === newItem1.id) || (newItem3.id === newItem2.id)) {
        newItem3 = items.getItemAtRandom();
    }

    itemElement1.src = newItem1.image;
    itemElement2.src = newItem2.image;
    itemElement3.src = newItem3.image;

}