export class ItemArray {
    
    constructor(items) {
        this.items = items.slice();
    }

    getItems() {
        return this.items;
    }

    getItemById(someId) {
        this.items.forEach(item => {
            if (someId === item.id) {
                return item;
            }
        });
    }

    getItemAtRandom() {
        const randomIndex = Math.floor(Math.random() * this.items.length);
        return this.items[randomIndex];

    }

    increaseClick(item) {
        item.clicks ++;
    }

    increaseTimesShown(item) {
        item.timesShown++;
    }
}