const express = require('express')
const app = express()
const port = 8080
const routeProduct = require('./routes/products')
const routeStaff = require('./routes/staff')
const routeSupervisor = require('./routes/supervisors')
const routeVersion = require('./routes/versions')

app.use(express.urlencoded({ extended: false }))

app.use('/products', routeProduct)
app.use('/staffs', routeStaff)
app.use('/supervisors', routeSupervisor)
app.use('/versions', routeVersion)

app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`)
})