
class Person {
   constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName) {
        if (typeof newFirstName === "string" && newFirstName.length >= 0) {
            this._firstName = newFirstName;
        } else {
            return `first name must a non-empty string!`;
        }
    }

    set lastName(newLastName) {
        if (typeof newLastName === "string" && newLastName.length >= 0) {
            this._lastName = newLastName;
        } else {
            return `last name must be a non-empty string`;
        }
    }

    set age(newAge) {
        if (typeof newAge === "number" && newAge > 0) {
            this._age = newAge;
        } else {
            return `Age must be a negative number`
        }
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }
    
    get fullName() {
        return this._firstName + " " + this._lastName;
    }

    get age() {
        return this._age;
    }
}

person = new Person("Sponge", "bob", 45);
console.log(person.age);
console.log(person.fullName);