/**
 * The call() method calls a function with a given this value 
 * and arguments provided individually.
 */

let person = {
    firstName : 'Poonam',
    lastName: 'Chauhan',
    getName: function() {
        let fullName = this.firstName +' '+this.lastName
        return fullName
    }
}

let nameOfPerson = function(snack,hobby) {
    console.log(this.getName() + ' loves ' + snack + ' and ' + hobby + '.');
}

nameOfPerson.call(person,'pasta','algorithms')


/**
 * The apply() method calls a function with a given this value 
 * and arguments provided as an array.
 */

nameOfPerson.apply(person,['dosa','algorithms'])

