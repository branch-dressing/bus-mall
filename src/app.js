import { ItemArray } from './item-array.js';
import { productData } from './api.js';

const holyItemArray = new ItemArray(productData);
let items = holyItemArray;

let selections = 0;

const itemRadioTags = document.querySelectorAll('input');
const itemElement1 = document.getElementById('item-1');
const itemElement2 = document.getElementById('item-2');
const itemElement3 = document.getElementById('item-3');

itemElement1.addEventListener('click', event);
itemElement2.addEventListener('click', event);
itemElement3.addEventListener('click', event);

event();


function event() {
    if (selections === 5) {
        testComplete();
        return;
    }
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
            console.log(radioTag)
        } else if (i === 1) {
            radioTag.value = newItem2.id;
        } else if (i === 2) {
            radioTag.value = newItem3.id;
        }
    });

    

    items = new ItemArray(productData);

    items.removeItemById(newItem1.id);
    items.removeItemById(newItem2.id);
    items.removeItemById(newItem3.id);

    selections++;
    console.log(selections);

}

function testComplete() {
    itemElement1.style.display = 'none';
    itemElement2.style.display = 'none';
    itemElement3.style.display = 'none';
}