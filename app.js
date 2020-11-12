const express = require("express")
const app = express()

app.get("/", (req, res) => {
    const name = req.query.name;

    if (name ==='' || name === undefined) {
        res.send(`<h1>Hola desconocido!</h1>`)
    }else {
    res.send(`<h1>Hola ${name} !`)
    }
})

app.listen(3000, ()=>console.log("Listening on port 3000"))