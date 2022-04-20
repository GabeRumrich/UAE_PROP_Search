import axios from 'axios';
export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
      'X-RapidAPI-Key': '1ccd9357camsh2637acf44245fedp1bc6f7jsnaac607946fb4',
    },
  });
  return data;
};
