import { app } from "./app";
import { getAllOrder } from "./endpoints/getAllOrder";
import { getAllUserName } from "./endpoints/getAllUsers_Name";
import { getAllUserType } from "./endpoints/getAllUsers_Type";


app.get("/user", getAllUserName)
app.get("/user/:type", getAllUserType)
app.get("/user", getAllOrder , getAllUserName, getAllUserType)