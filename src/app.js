import { ItemArray } from './item-array.js';
import { productData, productCounts } from './api.js';

let items = new ItemArray(productData);

let selections = 0;


const itemRadioTags = document.querySelectorAll('input');
const itemElement1 = document.getElementById('item-1');
const itemElement2 = document.getElementById('item-2');
const itemElement3 = document.getElementById('item-3');

const continueButon = document.getElementById('continue-button');
continueButon.addEventListener('click', event);

event();


function event() {
    if (selections === 25) {
        testComplete();
        return;
    }

    let threeItemArray = getThreeItems();

    itemElement1.src = threeItemArray[0].image;
    itemElement2.src = threeItemArray[1].image;
    itemElement3.src = threeItemArray[2].image;

    increaseTimesShown(threeItemArray[0].id);
    increaseTimesShown(threeItemArray[1].id);
    increaseTimesShown(threeItemArray[2].id);

    itemRadioTags.forEach((radioTag, i) => {
        if (i === 0) {
            radioTag.value = threeItemArray[0].id;
        } else if (i === 1) {
            radioTag.value = threeItemArray[1].id;
        } else if (i === 2) {
            radioTag.value = threeItemArray[2].id;
        }
    });

    //CHANGE ARGUEMENT TO SELCTED IMAGE
    increaseCountOfSelection(threeItemArray[0].id);

    items = new ItemArray(productData);
    items.removeItemById(threeItemArray[0].id);
    items.removeItemById(threeItemArray[1].id);
    items.removeItemById(threeItemArray[2].id);

    selections++;
}

function testComplete() {
    console.log(productCounts);
    itemElement1.style.display = 'none';
    itemElement2.style.display = 'none';
    itemElement3.style.display = 'none';
}

function getThreeItems() {
    const newItem1 = items.getItemAtRandom();

    let newItem2 = items.getItemAtRandom();
    while (newItem2.id === newItem1.id) {
        newItem2 = items.getItemAtRandom();
    }

    let newItem3 = items.getItemAtRandom();
    while ((newItem3.id === newItem1.id) || (newItem3.id === newItem2.id)) {
        newItem3 = items.getItemAtRandom();
    }

    const threeItemArray = [newItem1, newItem2, newItem3];
    return threeItemArray;
}

function increaseCountOfSelection(someArrayWithIndexAndId) {
    for (let i = 0; i < productCounts.length; i++) {
        if (productCounts[i].id === someArrayWithIndexAndId) {
            productCounts[i].count++;
        }
    }

}

function increaseTimesShown(itemShownId) { 
    for (let i = 0; i < productCounts.length; i++) {
        if (productCounts[i].id === itemShownId) {
            productCounts[i].shown++;
        }
    }
}