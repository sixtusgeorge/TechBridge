
// http request class
const req = new XMLHttpRequest()

const getFacts = new Promise((resolve, reject) => {
req.open("GET" ,"https://catfact.ninja/facts?limit=15&max_lenght=60") 
req.send()
req.responseType = "json"
req.onload = () => resolve(req.response);
req.onerror = ()=> reject(req.statusText)
})

getFacts
.then(result => result.data)
.then(result=>console.log(result))
.catch(error=> console.log(error))


// const people = [
//     {
//       name: "John Doe",
//       image: 'file:///C:/Users/hp/Desktop/tech%20bridge%20project/image/171328_1728550569.webp',
//       occupation: "John Doe's profile picture",
//     },
//     {
//         name: "John Doe",
//         image: 'file:///C:/Users/hp/Desktop/tech%20bridge%20project/image/171328_1728550569.webp',
//         occupation: "John Doe's profile picture",
//       },
//       {
//         name: "John Doe",
//         image: 'file:///C:/Users/hp/Desktop/tech%20bridge%20project/image/171328_1728550569.webp',
//         occupation: "John Doe's profile picture",
//       },
//       {
//         name: "John Doe",
//         image: 'file:///C:/Users/hp/Desktop/tech%20bridge%20project/image/171328_1728550569.webp',
//         occupation: "John Doe's profile picture",
//       },
//       {
//         name: "John Doe",
//         image: './konga_health.webp',
//         occupation: "John Doe's profile picture",
//       }
//   ];
//   console.log(people)

//      let body = document.getElementById("body")
  
//   people.forEach(person => {
//     let card = document.createElement("div")
//     card.classList.add("card")
//     body.appendChild(card)

//     let image = document.createElement("img")
//     image.src = person.image
//     card.appendChild(image)

//     let name = document.createElement("h2")
//     name.textContent = person.name
//     card.appendChild(name)

//     let occupation = document.createElement("p")
//     occupation.textContent = person.occupation
//     card.appendChild(occupation)

//   });

//   console.log("body")
  