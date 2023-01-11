console.log("I'm ready!");


// Iteration 1: Names and Input

const hacker1 = 'Raquel';
console.log(`The drivers name is ${hacker1}`);

const hacker2 = 'Rodrigo';
console.log(`The navigator's name is ${hacker2}`);



// Iteration 2: Conditionals

const hackerLength = 3;
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}

else if (hacker1.length < hacker2.length) {
console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}

else {
console.log(`Wow, you both have equally long names,  ${hacker1.length} characters!`);
}


// Iteration 3: Loops


/*

3.1. Option 1: 

console.log (hacker1.toUpperCase().split("").join(" "));


Option 2: */

let hacker1Capital = '';

for (let j = 0; j < hacker1.length; j++){
  hacker1Capital += hacker1[j].toUpperCase() + " ";
}

console.log(hacker1Capital);

 

/* 3.2 */

/* option 1 :
console.log(hacker2.split("").reverse().join(""));



option 2: */

let reverseHacker2 = '';

for (let i = hacker2.length - 1; i >= 0; i--) {
  reverseHacker2 += hacker2[i];
}

console.log(reverseHacker2);

/* 3.3 */


let a = hacker1[0];
let b = hacker2[0];

for (let k = 0; k < 1; k++) {
  if (a > b) {
console.log("The driver's name goes first.");
}
  else if (a < b) {
console.log("Yo, the navigator goes first definitely.");
}
  else {
console.log("What?! You both have the same name?");
}
}



//  BONUS 1 
//part 1

const longText = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id magna est. Ut semper consequat leo non tempus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi neque tellus, eleifend auctor lectus ut, pharetra porta nisl. Donec metus nunc, maximus vitae tincidunt tempor, sodales in enim. Integer vulputate enim nec condimentum tempor. Quisque in odio sit amet nisi pretium rhoncus quis ut lacus. Quisque efficitur, eros at condimentum lacinia, neque tellus posuere purus, non congue mauris enim et risus. Integer molestie elit eget consequat lobortis.

Suspendisse eget malesuada ex. Sed tincidunt ligula et nisi volutpat pretium. Suspendisse mattis, neque vel posuere luctus, nulla elit sagittis felis, et mattis diam purus eu ligula. Duis pulvinar gravida dolor, a ornare tellus hendrerit quis. Mauris sit amet varius diam. Nunc id cursus ligula. Fusce hendrerit rutrum est, vel placerat tellus tempus at. Nulla purus ligula, euismod faucibus suscipit eget, tempor quis ipsum. Nam a viverra justo. Ut nec turpis eget sem venenatis hendrerit. Nam in diam facilisis, luctus lectus non, vulputate turpis. Vivamus hendrerit egestas tortor, et rutrum sapien dictum quis. Morbi consequat mauris sed consectetur finibus. Donec vel massa id dui suscipit bibendum. Integer nibh erat, molestie non interdum in, mattis non nibh.

Donec maximus odio a arcu tristique lacinia id semper massa. Suspendisse rhoncus arcu eu magna suscipit lacinia. Nullam sit amet lacus consectetur, dignissim dolor vitae, semper eros. Aliquam porta non justo eu pretium. Integer tincidunt laoreet velit nec efficitur. Nullam ultricies eleifend erat eu gravida. Proin placerat nibh et eros pharetra tincidunt ac ut odio. Vestibulum pharetra libero quis eros pretium facilisis eget a arcu. Phasellus imperdiet et turpis vitae suscipit.`;


//part 2 - not ready yet- it's counting characters

let countWords = 0;

for (let m=0; m < longText.length; m++) {
  const word = longText[m];
  countWords++;
} 
console.log(countWords);



//part3

let count = 0;

for (let l = 0; l < longText.length; l++) {
  const twoChars = longText[l] + longText [l + 1];

  if (twoChars === "et") {
    count++;
  }

}
console.log (count);