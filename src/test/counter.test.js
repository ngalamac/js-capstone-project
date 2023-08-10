import DOMManipulator from '../modules/dom.js';
import  APILoader from '../modules/api_loader.js';

const loader = new APILoader();
const dom = new DOMManipulator();

describe('Test show and comment counters', () => {
    test('Test show counter', async () => {
        const shows = ['Under the Dome', 'Person fo interest', 'Bitten', 'The Strain'];
        expect(await dom.showCounter(shows)).toBe(4);
    });

    test('Test comment counter', async () => {
        const comment = jest.spyOn(dom, 'getComment').mockImplementation(() => {
            const comments =  [
                {
                    "creation_date": "2023-03-12",
                    "comment": "I love this show.",
                    "username": "Wac"
                },
                {
                    "creation_date": "2023-03-12",
                    "comment": "I love this show.",
                    "username": "Wac"
                },
                {
                    "creation_date": "2023-03-12",
                    "comment": "I love this show.",
                    "username": "Wac"
                }
            ];
            return comments.length;
        });
        expect(await dom.commentCounter('Under the Dome')).toBe(3);
    })
});