
var data={ fname:"Jayanth", lname: "Thoppil", age:22};

//shallow copy
var copy_data= data;
console.log('Shallow copy');
console.log(data);
console.log(copy_data);

copy_data.age =20

//after changing the age in copy_data it will change in both copy_data aswell as original data
console.log(data);
console.log(copy_data);



var data1={ fname:"Jayanth", lname: "Thoppil", age:22};

//deep copy
var copy_data1={ fname:data1.fname, lname:data1.lname, age:data1.age};

console.log('Deep copy');
console.log(data1);
console.log(copy_data1);

copy_data1.age =20

//after changing the age in copy_data1 it will only change in copy_data not in original data
console.log(data1);
console.log(copy_data1);
