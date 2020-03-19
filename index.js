//   Create a function called repeat which takes two arguments:
// The first argument should be an arbitrary function, fn
// The second argument should be a number, n
// repeat should loop n times
// Each iteration of the loop, it should call fn



function hello() {
    return 'Hello World';

}
//console.log(hello());
// function goodbye(){
//   return 'Goodbye World';
// }
// goodbye();

function repeat(n, fn) {
    for (let i = 1; i <= n; i++) {
        return fn(hello[i]);
    }}

    repeat(3, hello);
