import express from 'express'
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//   res.send('Server is Ready')
// })

app.get('/api/jokes',(req,res)=>{
    const jokes=[
  {
    "id": 1,
    "title": "Programmer Joke",
    "content": "Why do programmers prefer dark mode? Because light attracts bugs!"
  },
  {
    "id": 2,
    "title": "Math Joke",
    "content": "Why was the equal sign so humble? Because it knew it wasn’t less than or greater than anyone else!"
  },
  {
    "id": 3,
    "title": "Computer Joke",
    "content": "Why did the computer catch a cold? It left its Windows open!"
  },
  {
    "id": 4,
    "title": "AI Joke",
    "content": "Why did the AI cross the road? To optimize the chicken’s path!"
  },
  {
    "id": 5,
    "title": "Developer Joke",
    "content": "Why was the JavaScript developer sad? Because he didn’t know how to ‘null’ his feelings."
  }
]
res.send(jokes)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
