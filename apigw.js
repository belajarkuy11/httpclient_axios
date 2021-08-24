let express = require('express')
let axios = require('axios')
let app = express()

app.use(express.json())

app.post('/payment', (req, res) => {
    let data = req.body
    console.log(data)
    if(data.member == 1) {
        data.amount -= (data.amount * 0.2)
    }

    axios.post('http://localhost:8080/posting', data)
      .then(function (response) {
//        console.log(response);
        res.send(response.data)
      })
      .catch(function (error) {
        console.log(error);
      })
})

app.listen(3000, () => {
    console.log('listen 3000!!')
})