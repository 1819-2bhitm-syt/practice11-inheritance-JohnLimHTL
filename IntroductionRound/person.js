function Person(firstName, lastName, gender, hobbies) {
    this.name = {
        first: firstName,
        last: lastName
    };
    this.gender = gender;
    this.hobbies = hobbies;
}

Person.prototype.sayHello = function () {
    console.log("Hello. My name is " + this.name.first + " " + this.name.last + ".");
};

Person.prototype.tellHobbies = function() {
    // Ausgabe falls hobbie
    if (this.hobbies.length == 1) {
        console.log("My only hobby is " + this.hobbies[0] + ".")
    }

    // Ausgabe falls keine hobbies
    if (this.hobbies.length == 0) {
        console.log("I have no hobbies.");
    }

    // Ausgabe wenn mehrere hobbies
    if (this.hobbies.length > 1) {
        console.log("My hobbies are:");
        for (i in this.hobbies) {
            console.log("- " + this.hobbies[i]);
        }
    }

    console.log("");
};

module.exports = Person;