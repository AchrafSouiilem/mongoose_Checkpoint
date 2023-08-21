const express = require("express")
const connectDB = require("./connectDB")
require("dotenv").config({path: "./config/.env"})
const queries = require("./queries")

connectDB()
// queries.createAndSavePerson()
// queries.CreateManyPeople()
// queries.SearchByName("Achraf")
// queries.SearchByFood("Spicy Food")
// queries.SearchByID("64e2460b9fe36d0eb8da7bae")
// queries.ClassicUpdate("64e2460b9fe36d0eb8da7bae")
// queries.FindAndUpdateAge("Mahmoud")
// queries.SearchByIDAndRemove("64e2460a9fe36d0eb8da7bac")
// queries.DeleteManyPeople("Mahmoud")
queries.ChainSearch()

const app = express()
const PORT = process.env.PORT




app.listen(PORT, (error) => {
    error ? console.log(error)
          : console.log(`server is runinig on ${PORT}`)
})

