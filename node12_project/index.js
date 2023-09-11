const obj = {
    name: "John",
    age: 30,
    address: {
        city: "New York"
    }
};

console.log(obj.address ? obj.address.city : 'City not found'); // Old way of handling optional properties
