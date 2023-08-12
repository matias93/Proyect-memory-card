import responseData from '../mock/api-mock';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { getAnimalCards } from './getAnimalCards';

const mock = new MockAdapter(axios);

describe('getAnimalCards', () => {
    it('fetches successfully data from an API', async () => {
        mock.onGet('https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=20').reply(200, responseData);

        const result = await getAnimalCards();

        expect(result).toEqual(responseData.entries.map(entry => entry.fields.image.url));
    });

    it('fetches erroneously data from an API', async () => {
        mock.onGet('https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=20').reply(500);

        try {
            await getAnimalCards();
        } catch (error) {
            expect(error.message).toBe('Network Error');
        }
    });
});
