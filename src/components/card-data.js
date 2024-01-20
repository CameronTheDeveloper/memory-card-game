const apiKey = "client_id=DuRXDS10VCH_SxhpAsE3VUNPhkk57SvrOAahsmsv2ds";
const apiLink = "https://api.unsplash.com/search/photos";

const fetchCardData = async (theme = "tiger", setCardData, setLoading, setError) => {
  try {
    const response = await fetch(
      `${apiLink}?query=${theme}&per_page=12&${apiKey}`,
      { mode: "cors" },
    );
    if (!response.ok){
      throw new Error(
        `An HTTP error occured: The status is ${response.status}`
      );
    }
    const data = await response.json();
    setCardData(data.results);
  } catch (error) {
    setError(error);
  } finally {
    setLoading(false);
  }
};

export { fetchCardData };
