let a = prompt('1-sonni kiriting')
let b = prompt('2-sonni kiriting')
let c = prompt('3-sonni kiriting')

// if (a > b && a < c || a > c && a < b )  {
//     alert('orta soni ' + a)
// } else if (b > a && b < c || b < a && b > c) {
//     alert('orta soni ' + b) 
// } else if(c > a && c < b || c < a && c > b) {
//     alert('orta soni ' + c)
// } else  {
//     alert ('xatolik yuz berdi')
// }



if (b > a && a > c || c < a && a < b )  {
    alert('orta soningiz ' + a)
    if (a % 2 == 0) {
        alert(' juft')
    } else if (a % 2 == 1) {
        alert(' toq')
    }
} else if (a > b && b > c || c > b && b > a) {
    alert('orta soningiz ' + b) 
    if (b % 2 == 0) {
        alert(' juft')
    } else if (a % 2 == 1) {
        alert(' toq')
    }
} else if(a > c && c > b || a < c && c < b) {
    alert('orta soningiz ' + c)
    if (c % 2 == 0) {
        alert(' juft')
    } else if (a % 2 == 1) {
        alert(' toq')
    }
} else  {
    alert ('xatolik yuz berdi')
}

