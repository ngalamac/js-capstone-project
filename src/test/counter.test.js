import Counter from '../modules/item_counter.js';

const counter = new Counter();
const commentCountList = [];

describe('Test show and comment counters', () => {
  test('Test show counter', async () => {
    const shows = [
      'Under the Dome',
      'Person fo interest',
      'Bitten',
      'The Strain',
    ];
    shows.forEach(() => {
      counter.countShow();
    });
    expect(await counter.getShowCount()).toBe(4);
  });

  test('Test comment counter', async () => {
    const comments = [
      {
        item_id: 'Under the Dome',
        comments: [
          {
            creation_date: '2023-03-12',
            comment: 'I love this show.',
            username: 'Wac',
          },
          {
            creation_date: '2023-03-12',
            comment: 'I love this show.',
            username: 'Wac',
          },
          {
            creation_date: '2023-03-12',
            comment: 'I love this show.',
            username: 'Wac',
          },
        ],
      },
      {
        item_id: 'Bitten',
        comments: [
          {
            creation_date: '2023-03-12',
            comment: 'I love this show.',
            username: 'Wac',
          },
          {
            creation_date: '2023-03-12',
            comment: 'I love this show.',
            username: 'Wac',
          },
        ],
      },
      {
        item_id: 'Arrow',
        comments: [
          {
            creation_date: '2023-03-12',
            comment: 'I love this show.',
            username: 'Wac',
          },
          {
            creation_date: '2023-03-12',
            comment: 'I love this show.',
            username: 'Wac',
          },
          {
            creation_date: '2023-03-12',
            comment: 'I love this show.',
            username: 'Wac',
          },
        ],
      },
      {
        item_id: 'Glee',
        comments: [
          {
            creation_date: '2023-03-12',
            comment: 'I love this show.',
            username: 'Wac',
          },
        ],
      },
      {
        item_id: 'Homeland',
        comments: [],
      },
    ];

    comments.forEach((show) => {
      counter.clearCommentCounter();
      show.comments.forEach(() => {
        counter.countComment();
      });
      commentCountList.push(counter.getCommentCount());
    });
    expect(commentCountList).toEqual([3, 2, 3, 1, 0]);
  });
});
