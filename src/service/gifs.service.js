

function gifService ({keyword}) {
    const API_GIPHY = `https://api.giphy.com/v1/gifs/search?api_key=bqzciU36VHWaXRJRiaPhJOnkrDpJXeT5&q=${keyword}}&limit=25&offset=0&rating=g&lang=en`;
    return fetch(API_GIPHY)
            .then(res => res.json())
            .then(response => {
                const data = response
                return data;
            })
            .catch(error => console.log(error))
}

export default gifService;