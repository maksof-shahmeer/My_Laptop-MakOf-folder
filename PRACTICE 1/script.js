console.log("checking");

// right angle triangle
let n = 8;
let string = "";
for (let index = 1; index < n; index++) {
    for (let ind = 0; ind < index ; ind++) {
        string += "*";
        
    }
    string += " ";
    string += "\n"
}
console.log(string);

// inverted trinalges and mirror triangle 
let n1 = 8;
let string2 = "";

for (let index = n1; index > 0; index--) {
    for (let ind = index; ind > 0 ; ind--) {
        string2 += "*";
        
    }
    string2 += " ";
    string2 += "\n"
}
console.log(string + string2);

let n3 = 8;
let string3 = "";

for (let index = n3-1 ; index >= 0 ; index--) {
    for (let ind = index; ind > 0; ind--) {
        string3 += " ";
    }

    for (let i = n3-1; i >= index ; i--) {
        string3 += "* ";
    }
    string3 += "\n";
}
console.log(string3);

// hollow payramid 

let n4 = 8;
let string4 = "";

for (let index = 0 ; index <= n4; index++) {
    for (let ind = index; ind <= n4; ind++) {
        string4 += " ";
    }

    for (let i = 0; i <= n4 ; i++) {
        if ( i == 0 || i == index || index == n4) {
            string4 += "*";
            string4 += " ";
            
        }
        else {
            string4 += " ";
            string4 += " "
        }
    }
    string4 += "\n";
}
console.log(string4);

