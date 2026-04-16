function findCommonElements(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return false;
  }

  return arr1.some((item) => arr2.includes(item));
}

export function getRelatedPosts(allPosts, currentPost, size) {
  if (!Array.isArray(allPosts) || !currentPost?.id) {
    return [];
  }

  // random selection function
  const randomLot = (array, num) => {
    const pool = Array.isArray(array) ? [...array] : [];
    const newArray = [];

    while (newArray.length < num && pool.length > 0) {
      const randomIndex = Math.floor(Math.random() * pool.length);
      newArray.push(pool[randomIndex]);
      pool.splice(randomIndex, 1);
    }

    return newArray;
  };

  const relatedPosts = allPosts.filter(
    (post) => {
      const postTags = post?.fields?.Tags ?? [];
      const currentPostTags = currentPost?.fields?.Tags ?? [];

      return (
        post.id !== currentPost.id &&
        findCommonElements(postTags, currentPostTags)
      );
    }
  );

  return randomLot(relatedPosts, size); // random selection
}
