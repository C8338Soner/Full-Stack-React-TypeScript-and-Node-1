
const fetch = require('node-fetch');// ı gave this err "File is a CommonJS module; it may be converted to an ES module." and the source of issue is node-fetch package must be install like this" npm install node-fetch@2" 

(async function getData() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto/");
    if(response.ok) {
        const result = await response.json();
        console.log(result);
    } else {
        console.log("Failed to get anything");
    }
})();
