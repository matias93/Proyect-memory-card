import axios from 'axios';

const API_MODYO = 'https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=20';

export const getAnimalCards = async () => {
    try {
        const response = await axios.get(API_MODYO);
        const animalImages = response.data.entries.map(entry => entry.fields.image.url);
        return animalImages;
    } catch (error) {
        console.error('Error fetching cards images:', error);
        return [];
    }
};

export default getAnimalCards;

