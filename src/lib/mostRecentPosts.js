export function mostRecentPosts(allPosts, field, sliceNumber) {
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(a.fields[field]) - new Date(b.fields[field])
  );
  const sortedSlicedPosts = sortedPosts.slice(sliceNumber);
  console.log(sortedSlicedPosts);
  return sortedSlicedPosts;
}
