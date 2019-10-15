export class ItemArray {
    
    constructor(items) {
        this.items = items.slice();
    }

    removeItemById(someId) {
        this.items.forEach(item => {
            if (someId === item.id) {
                this.items.splice(someId, 1);
            }
        });
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