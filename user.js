const user = {
    name: 'Elena',
    age: 25
}

const user2 = {
    name: 'Ihor'
}


// module.exports = user;

module.exports = {
    user: user,
    sayHello() {
        console.log('Hello');
    }
}