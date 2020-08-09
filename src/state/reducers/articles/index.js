import uniqid from 'uniqid';

const initialState = [
  {
    id: uniqid(),
    date: Date.now(),
    title: 'Lorem ipsum dolor sit amet',
    description:
      'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat',
    image:
      'https://material-ui.com/static/images/cards/contemplative-reptile.jpg',
  },
  {
    id: uniqid(),
    date: Date.now() + 100,
    title: 'Lorem ipsum dolor sit amet',
    description:
      'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat',
  },
];

const articles = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_ARTICLE':
      return state.concat({
        id: uniqid(),
        date: Date.now(),
        title: payload.title,
        description: payload.description,
        image: payload.image,
      });
    case 'EDIT_ARTICLE':
      return state.reduce(
        (articles, article) =>
          article.id === payload.id
            ? articles.concat({
                id: article.id,
                date: article.date,
                title: payload.title,
                description: payload.description,
                image: payload.image,
              })
            : articles.concat(article),
        []
      );
    case 'DELETE_ARTICLE':
      return state.filter(article => article.id !== payload.id);
    default:
      return state;
  }
};

export default articles;
