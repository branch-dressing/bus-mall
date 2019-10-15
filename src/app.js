import { ItemArray } from './item-array.js';
import { productData } from './api.js';

const itemArray = new ItemArray(productData);
let items = itemArray;

//const workingItemArray = items.getItems();

const itemRadioTags = document.querySelectorAll('input');
const itemElement1 = document.getElementById('item-1');
const itemElement2 = document.getElementById('item-2');
const itemElement3 = document.getElementById('item-3');

event();


const continueButon = document.getElementById('continue-button');
continueButon.addEventListener('click', event);

function event() {
    console.log(items);
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

    items.increaseTimesShown(newItem1);
    items.increaseTimesShown(newItem2);
    items.increaseTimesShown(newItem3);

    itemRadioTags.forEach((radioTag, i) => {
        if (i === 0) {
            radioTag.value = newItem1.id;
        } else if (i === 1) {
            radioTag.value = newItem2.id;
        } else if (i === 2) {
            radioTag.value = newItem3.id;
        }
    });

    items = new ItemArray(productData);
    console.log(items);
    items.removeItemById(newItem1.id);
    items.removeItemById(newItem2.id);
    items.removeItemById(newItem3.id);
    console.log(items);

}