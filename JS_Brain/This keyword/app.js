'user strict'
var person = {
    "firstName" :"oanhpv",
    "getFirstName" : function(){
        return "hello :" + person.firstName ; // always person object.
    },
    "address" : {
        "state" : "HaNam",
        "Village" : "YenTrack"
    },

    "isStateFunction" : function (state) {
        return (this.address.state === state);
    }
};
console.log(person.isStateFunction("HaNam"));
console.log(person.isStateFunction("HaNoi"));

console.log(person.getFirstName());
var person2 = person;
person = {};
console.log(person2.getFirstName());  // hello undefined
