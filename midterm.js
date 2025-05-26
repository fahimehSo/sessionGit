///////سوال یک /////////


const checkNumbers = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {
      return "آرایه شامل عناصر غیر عددی است!";
    }
  }
  return "تمام عناصر آرایه عدد هستند.";
};

console.log(checkNumbers([1, 2, "fahimeh"])); 


///////سوال دو ////////

const students = [
    { name: "Ali", grade: 16 },
    { name: "sara", grade: 18 },
    { name: "reza", grade: 19 }
];

for (let i = 0; i < students.length; i++) {
    if (students[i].grade > 17) {
        console.log(students[i].name);
    }
}
}

/////سوال سه /////

const calculator = {
    name: "math",
    
    sum: function(a, b) {
        return a + b;
    },
    
    subtract: function(a, b) {
        return a - b;
    }
};

console.log(calculator.name); 
console.log(calculator.sum(5, 15)); 
console.log(calculator.subtract(10, 4)); 

/////سوال چهار //////

function summ(n) {
    if (n === 1) { 
        return 1;
    }
    return n + summ(n - 1); 
}

console.log(summ(5)); 
