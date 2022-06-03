import axios from 'axios';

const url="http://localhost:8000/candidate";

export const getallUsers = async (id) => {
    id = id || '';
    return await axios.get(`${url}/${id}`);
}
export const editUser = async (id, candidate) => {
    console.log(id,candidate)
    await axios.put(`${url}/${id}`,candidate);
}
