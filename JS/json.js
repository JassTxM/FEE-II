//1. Student Records System
// let students = {
//  "101": { name: "Ravi", age: 21, marks: { math: 85, science: 90 } },
//  "102": { name: "Anita", age: 20, marks: { math: 92, science: 88 } },
//  "103": { name: "Suresh", age: 22, marks: { math: 76, science: 80 } }
// };
//  let high = 0,name = '',sci = 0;
// for(let i=101;i<=103;i++){
//     console.log(students[i].name);
//     if(students[i].marks.math > high){
//         high = students[i].marks.math;
//         name = students[i].name;
// }
//     sci += students[i].marks.science;
// }
// console.log("Highest Maths Marks:",name,high);
// let avg = sci/3;
// console.log("Average Science Marks:",avg);



//2. Employee Management System
// let data = `{
//  "employees": [
//  {"id": 1, "name": "Neha", "salary": 50000, "department": "HR"},
//  {"id": 2, "name": "Amit", "salary": 60000, "department": "IT"},
//  {"id": 3, "name": "Pooja", "salary": 75000, "department": "Finance"}
// ]}`;
// let new_data = JSON.parse(data);
// console.log("Parsed Object:");
// console.log(new_data.employees);
// for(let i=0;i<=2;i++){
//     console.log(new_data.employees[i].name);
//  if(new_data.employees[i].department === 'IT'){
//         new_data.employees[i].salary = new_data.employees[i].salary + new_data.employees[i].salary * 0.10;
//         console.log("Updated Salary:",new_data.employees[i].salary);
//     }
// }



//3. E-Commerce Product Catalog
// let products = [
//  { id: 1, name: "Laptop", price: 45000, stock: 10 },
//  { id: 2, name: "Phone", price: 20000, stock: 5 },
//  { id: 3, name: "Tablet", price: 25000, stock: 0 }
// ];
// let exp = 0,name = '';
// for(let i = 0;i<=2;i++){
//     console.log(products[i].name);
//     if(products[i].price>exp){
//         exp = products[i].price;
//         name = products[i].name;
//     }
//     }
// let str = JSON.stringify(products);
// console.log("Most Expensive Products is",name,"with price",exp);
// console.log(str);



//4. Nested JSON with Orders
// let orders = `{
//  "orderId": 101,
//  "customer": "Rohit",
//  "items": [
//  {"name": "Shoes", "price": 2000, "qty": 2},
//  {"name": "T-shirt", "price": 800, "qty": 3}
//  ]
// }`;
// let bill = 0;
// let ord = JSON.parse(orders);
// for( let i= 0;i<=1;i++){
//     bill += ord.items[i].price;
// }
// ord.items.push({"name":"Cap","price":300,"qty":1});
// console.log(bill);
// console.log(ord.items); 

