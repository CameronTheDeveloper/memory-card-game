let cardDataAr = [];
const apiKey = 'client_id=DuRXDS10VCH_SxhpAsE3VUNPhkk57SvrOAahsmsv2ds';
const apiLink = 'https://api.unsplash.com/search/photos';

const getCardDataAr = () => {
    return cardDataAr;
};

const fetchCardData = (theme = 'tiger') => {
    fetch(`${apiLink}?query=${theme}&per_page=12&${apiKey}`, { mode: 'cors' })
        .then(response => {
            return response.json();
        })
        .then(data => {
            cardDataAr.push(data.results);
        })
        .catch(error => console.log(error));
};

export { getCardDataAr, fetchCardData };