import axios from "axios";

const baseUrl = 'https://app-todo-.up.railway.app/api/';
const userUrl = baseUrl + 'users/login';

export const getDataUser = async () => {
  return await axios.post(userUrl, {
        email: 'alvaro.unlp@gmail.com',
        password: 'ale123'
    })
}