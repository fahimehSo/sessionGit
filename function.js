////////تابعی بنویس که آرایه ای از اعداد را گرفته و میانگین آن ها را برگرداند/////////

function avg(numbers) {
    
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]; 
    }

    return sum / numbers.length;
}


const numbers = [10, 20, 30, 40, 50];
const average = avg(numbers);
console.log("average:", average);

///////تابعی که آرایه ای از اعداد را گرفته و بزرگ ترین عدد را پیدا کند (بدون استفاده از ).Math.ma//////
function findMax(numbers) {

    let max = numbers[0]; // 

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i]; 
        }
    }

    return max;
}

const numbers = [10, 25, 5, 40, 15];
const maxNumber = findMax(numbers);
console.log("maxnumber:", maxNumber);

//////تابعی که یک رشته بگیرد و معکوس آن را برگرداند بدون استفاده از ().re///////


function reverseString(str) {
    let reversed = ""; 
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]; 
    }
    console.log(reversed) ; 
}


reverseString("Hello fahimeh");

///تابعی بنویسید که یک آبجکت به عنوان ورودی دریافت کند و کلید ها و مقادیر آن را جا به جا کند به زبان جاوااسکریپت

function keyValue(obj) {
   
    let swappedObject = {};

    for (let key in obj) {
        swappedObject[obj[key]] = key;
    }

    return swappedObject; 
}


const mainObject = { a: 1, b: 2, c: 3 };
const swappedObject = keyValue(mainObject);

console.log(swappedObject); 

////• تابعی بنویسید که دو آبجکت به عنوان ورودی دریافت و آبجکت دوم را به طور کامل در آبجکت اول ادغام کند. (به صورت
ساده

function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}


const object1 = { a: 1, b: 2 };
const object2 = { b: 3, c: 4 };

const mergedObject = mergeObjects(object1, object2);
console.log(mergedObject); 




