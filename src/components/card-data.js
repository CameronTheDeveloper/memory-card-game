let cardDataAr = [];
const apiKey = 'client_id=DuRXDS10VCH_SxhpAsE3VUNPhkk57SvrOAahsmsv2ds';
const apiLink = 'https://api.unsplash.com/search/photos';

const getCardDataAr = () => {
    return cardDataAr;
};

const fetchCardData = async (theme = 'tiger') => {
    try {
        const response = await fetch(`${apiLink}?query=${theme}&per_page=12&${apiKey}`, { mode: 'cors' });
        const data = await response.json();
        cardDataAr.push(data.results);
        return cardDataAr;
    } catch (error) {
        console.log(error);
    }
};

export { getCardDataAr, fetchCardData };