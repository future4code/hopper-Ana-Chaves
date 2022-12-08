import app from "./app"
import createProduct from "./endpoints/createProduct"
import createPurchases from "./endpoints/createPurchases"
import createUser from './endpoints/createUser'
import getAllProduct from "./endpoints/getAllProducts"
import getAllPurchses from "./endpoints/getAllPurchases"
import getAllUser from "./endpoints/getALLUser"

app.post('/users', createUser)
app.get('/users', getAllUser)
app.post('/products', createProduct)
app.get('/products', getAllProduct)
app.post('/purcheses', createPurchases)
app.get('/users/:userId/purchases', getAllPurchses)