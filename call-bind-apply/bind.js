/**
 * this keyword: every function gets this property automatically.
 */

/**
 * The bind() method creates a new function that, when called, has its
 * this keyword set to provided value.
 */

let person = {
    firstName : 'Poonam',
    lastName: 'Chauhan',
    getName: function() {
        let fullName = this.firstName +' '+this.lastName
        return fullName
    }
}

let nameOfPerson = function (like = 'coding') {
    console.log(this.getName() + ' is a developer and she likes '+like +'.');
}

let logPerson = nameOfPerson.bind(person)
logPerson()
logPerson('dancing')