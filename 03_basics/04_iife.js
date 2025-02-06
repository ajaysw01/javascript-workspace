//Immediately Invoked Function Expressions (IIFE)
//sometimes problems occurs due global scope pollution for that we use iif we have use ; at the end

// named IIFE
(function chai() {
    console.log("DB CONNECTED");
})();
// chai()

//unnamed iife
( (name) => {
    console.log(`second connection1 ${name}`);
    
})("postgres");

