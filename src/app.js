import { ItemArray } from './item-array.js';
import { productData, productCounts } from './api.js';

let items = new ItemArray(productData);
let selections = 0;
let itemSelection;
let ids = [];
let countData = [];
let shownData = [];

const itemRadioTags = document.querySelectorAll('input');
const itemElement1 = document.getElementById('item-1');
const itemElement2 = document.getElementById('item-2');
const itemElement3 = document.getElementById('item-3');

const continueButon = document.getElementById('continue-button');
continueButon.addEventListener('click', event);

event();

function event() {
    if (selections !== 0) {
        itemSelection = document.querySelector('input:checked').value;
        increaseSelection(itemSelection);
    }

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

    for (let i = 0; i < itemRadioTags.length; i++) {
        itemRadioTags[i].value = threeItemArray[i].id;
    }

    items = new ItemArray(productData);
    items.removeItemById(threeItemArray[0].id);
    items.removeItemById(threeItemArray[1].id);
    items.removeItemById(threeItemArray[2].id);

    selections++;
}

function testComplete() {
    for (let i = 0; i < productCounts.length; i++) {
        ids.push(productCounts[i].id + ' clikced');
        ids.push(productCounts[i].id + ' shown');
        countData.push(productCounts[i].count);
        countData.push(productCounts[i].shown);
    }
    let productSection = document.getElementById('hide-me');
    productSection.style.display = 'none';
    createChart();

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

function increaseSelection(itemId) {
    for (let i = 0; i < productCounts.length; i++) {
        if (productCounts[i].id === itemId) {
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

function createChart() {
    const ctx = document.getElementById('chart').getContext('2d');

    const count = countData;
    const shown = shownData;
    const labels = ids;
    const labelColors = ['red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue'];

    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Clicks',
                data: count,
                backgroundColor: labelColors
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
}