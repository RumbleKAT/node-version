const obj = {
    name: "John",
    age: 30,
    address: {
        city: "New York"
    }
};

console.log(obj.address?.city ?? 'City not found'); // Using optional chaining and nullish coalescing
