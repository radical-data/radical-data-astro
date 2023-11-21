export function mostRecentPosts(allPosts, field, sliceNumber) {
  if (!Array.isArray(allPosts) || allPosts.length === 0) {
    console.error('Invalid or empty posts array');
    return [];
  }

  const sortedPosts = allPosts.sort(
    (a, b) => new Date(a.fields[field]) - new Date(b.fields[field])
  );

  const sortedSlicedPosts = sortedPosts.slice(sliceNumber);
  console.log(sortedSlicedPosts);
  return sortedSlicedPosts;
}
