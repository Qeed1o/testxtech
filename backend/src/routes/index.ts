import RegisterUserAction from "../Actions/RegisterUserAction"
import GetUsersAction from "../Actions/GetUsersAction"
import GetUserAction from "../Actions/GetUserAction"
export default [
    {
        method: "GET",
        path: "/",
        action: GetUsersAction
    },
    {
        method: "GET",
        path: "/user/:id",
        action: GetUserAction,
    },
    {
        method: "POST",
        path: "/register",
        action: RegisterUserAction
    }
]