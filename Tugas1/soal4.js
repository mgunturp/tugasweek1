let data = {
    id: 1,
    name:"Leanne Graham",
    username:"Bret",
    email:"Sincere@april.biz",
    address:
    {
    street:"Kulas Light",
    suite:"Apt. 556",
    city:"Gwenborough",
    zipcode:"92998-3874",
    },
    phone:"1-770-736-8031 x56442",
    website:"hildegard.org",
    }

let newData={
    ...data,
    name:"Guntur",
    email:"falconrry123@gmail.com",
    hobby:["gaming","coding"]
}
console.log(newData);
      
      
const { address: { street, city } } = data;

console.log("Street:", street);
console.log("City:", city);
