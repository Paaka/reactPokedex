export const setPage = pageNumber => {
  return {
    type: 'SET_PAGE',
    payload: {
      pageNumber,
    },
  };
};
