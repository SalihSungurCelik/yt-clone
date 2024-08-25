import axios from "axios";

axios.defaults.baseURL = "https://yt-api.p.rapidapi.com"

const options = {
    params: { geo: "TR", lang: "tr" },
    headers: {
        'x-rapidapi-key': 'd7a41d3b70mshfd7e2063312d05fp19dc08jsnaf8e6e545dcc',
        'x-rapidapi-host': 'yt-api.p.rapidapi.com'
    }
};

// parametre olarak aldığı url'e api isteği atıp elde ettiği sonucu döndüren yardımcı fonk.
export const getData = async (path) => {
    try {
        const res = await axios.get(path, options)
        return res.data
    } catch (err) {
        console.log(err)
    }
}