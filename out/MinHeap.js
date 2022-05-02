"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinHeap = void 0;
var MinHeap = /** @class */ (function () {
    function MinHeap() {
        this.items = [];
    }
    MinHeap.prototype.add = function (item) {
        this.items.push(item);
        this.heapifyUp(this.items.length - 1);
    };
    MinHeap.prototype.extractMin = function () {
        if (this.count > 0) {
            var item = this.items[0];
            this.items[0] = this.items.pop();
            this.heapifyDown(0);
            return item;
        }
        return Infinity;
    };
    Object.defineProperty(MinHeap.prototype, "count", {
        get: function () {
            return this.items.length;
        },
        enumerable: false,
        configurable: true
    });
    MinHeap.prototype.heapifyUp = function (index) {
        var parent = this.parent(index);
        if (parent >= 0 && this.items[parent] > this.items[index]) {
            this.swap(this.items, parent, index);
            this.heapifyUp(parent);
        }
    };
    MinHeap.prototype.heapifyDown = function (index) {
        var smallest = index;
        var leftChild = this.letChild(index);
        var rightChild = this.rightChild(index);
        if (leftChild < this.count && this.items[leftChild] < this.items[index]) {
            smallest = leftChild;
        }
        if (rightChild < this.count &&
            this.items[rightChild] < this.items[smallest]) {
            smallest = rightChild;
        }
        if (smallest != index) {
            this.swap(this.items, index, smallest);
            this.heapifyDown(smallest);
        }
    };
    MinHeap.prototype.parent = function (index) {
        if (index < 0)
            return -1;
        return Math.floor((index - 1) / 2);
    };
    MinHeap.prototype.letChild = function (index) {
        if (index > 0) {
            return Math.floor((2 * index + 1) / 2);
        }
        return undefined;
    };
    MinHeap.prototype.rightChild = function (index) {
        if (index > 0) {
            return Math.floor((2 * index + 2) / 2);
        }
        return undefined;
    };
    MinHeap.prototype.swap = function (arr, i, j) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    };
    return MinHeap;
}());
exports.MinHeap = MinHeap;
//# sourceMappingURL=MinHeap.js.map