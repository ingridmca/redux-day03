export const selectFeedPosts = (reduxState) => {
  const sortCallback = (postFirst, postSecond) => {
    const titleFirst = postFirst.title;
    const titleSecond = postSecond.title;
    console.log(titleFirst.localeCompare(titleSecond));
    return titleFirst.localeCompare(titleSecond) >= 0 ? 1 : -1;
  };
  const orderedPosts = reduxState.feed.feedposts.sort(sortCallback);
  console.log(orderedPosts);
  return orderedPosts;
};
