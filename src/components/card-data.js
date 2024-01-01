let cardDataAr = [];
const apiKey = 'client_id=DuRXDS10VCH_SxhpAsE3VUNPhkk57SvrOAahsmsv2ds';
const apiLink = 'https://api.unsplash.com/photos/';

const getCardDataAr = () => {
    return cardDataAr;
};

const fetchCardData = (theme = 'random') => {
    let photoUrl = '';

    fetch(`${apiLink}${theme}/?${apiKey}`, { mode: 'cors' })
        .then(response => {
            return response.json();
        })
        .then(data => {
            photoUrl = data.urls.small;
        })
        .catch(error => console.log(error));
};

export { getCardDataAr, fetchCardData };