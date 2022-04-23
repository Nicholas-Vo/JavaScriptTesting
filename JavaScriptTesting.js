console.log("test");

let person = {"name": "nick"};

// A JavaScript class is not an object!
// It is a template for JavaScript objects.
class Adult {
    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
}

const adult = new Adult();

console.log("Person: " + person.name)

function getOlder() {

}