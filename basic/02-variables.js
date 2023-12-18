const acctInfo = [{
    id: 2569,
    email: "test@example.com",
    password: "Test123",
}]

const username = "test1"
let city = "Waterloo"
var country = "Canada"

// acctInfo[0].email = "test2@example.com"

console.table([acctInfo[0], username, city, country])

/*  
    My advice is not use var
    Because of issue in block of scope
    
*/
