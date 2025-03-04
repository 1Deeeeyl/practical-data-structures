const { readFileSync } = require('fs');

const data = readFileSync('./users.json');

const users = JSON.parse(data)
// console.log(users[1].id); testing json



const problem1 =  () =>{Array.from(new Set(users.map(obj => obj.id)))
 .map(id => {
    const sorted = users.find(obj => obj.id === id)
   return console.log(sorted)
 })
}
 
// problem1()


const problem2 =  () =>{Array.from(new Set(users.map(obj => obj.id)))
    .map(id => {
       const sorted = users.find(obj => obj.id === id)
       const obj = sorted.friends
       const friends = users.filter((item) => !obj.includes(item.id));

            
      
       return console.log(friends)
    })
   }

// problem2()
