import axios from "axios";
import Cookies from "js-cookie";

export const loginService = async ({ email, password }) => {
    try {
        const res = await axios.post("https://reqres.in/api/login", {
            email: email,
            password: password,
        });
        Cookies.set("gemstoken", res.data.token, {
            expires: new Date(new Date().getTime() + 10 * 60 * 1000),
        });

        return { success: true, message: "Successful login" };
    } catch (error) {
        if (error?.response?.status == 400) {
            return { success: false, message: "Invalid login credentials" };
        }
        return { success: false, message: error.message };
    }
};
// export const signupService = async ({ email, password }) => {
//     try {
//         const res = await axios.post("https://reqres.in/api/register", {
//             email: email,
//             password: password,
//         });
//         Cookies.set("gemstoken", res.data.token, {
//             expires: new Date(new Date().getTime() + 10 * 60 * 1000),
//         });

//         return { success: true, message: "Successful login" };
//     } catch (error) {
//         if (error?.response?.status == 400) {
//             return { success: false, message: "Invalid login credentials" };
//         }
//         return { success: false, message: error.message };
//     }
// };
// export const signupService = async ({ email, password }) => {
//     try {
//         const response = await axios.post('https://reqres.in/api/register', {
//             email: email,
//             password: password,
//         });

//         // Check if the response structure from Reqres is as expected
//         if (response.data && response.data.token) {
//             Cookies.set('gemstoken', response.data.token, {
//                 expires: new Date(new Date().getTime() + 10 * 60 * 1000),
//             });

//             return { success: true, message: 'Successful signup' };
//         } else {
//             return { success: false, message: 'Invalid response from the server' };
//         }
//     } catch (error) {
//         if (error.response && error.response.status === 400) {
//             return { success: false, message: 'Invalid login credentials' };
//         } else {
//             return { success: false, message: error.message || 'Signup failed' };
//         }
//     }
// };
// export const SingupService = async ({ email, password }) => {
//     try {
//         const res = await axios.post("https://reqres.in/api/register", {
//             email: email,
//             password: password,
//         });
//         Cookies.set("gemstoken", res.data.token, {
//             expires: new Date(new Date().getTime() + 10 * 60 * 1000),
//         });

//         return { success: true, message: "Successful login" };
//     } catch (error) {
//         if (error?.response?.status == 400) {
//             return { success: false, message: "Invalid login credentials" };
//         }
//         return { success: false, message: error.message };
//     }
// };