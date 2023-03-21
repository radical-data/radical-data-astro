function findCommonElements(arr1, arr2) {
  return arr1.some((item) => arr2.includes(item));
}

export function getRelatedPosts(allPosts, currentPost, size) {
  // random selection function
  const randomLot = (array, num) => {
    let newArray = [];

    while (newArray.length < num && array.length > 0) {
      const randomIndex = Math.floor(Math.random() * array.length);
      newArray.push(array[randomIndex]);
      array.splice(randomIndex, 1);
    }

    return newArray;
  };

  const relatedPosts = allPosts.filter(
    (post) =>
      post.id !== currentPost.id &&
      findCommonElements(post.fields.Tags, currentPost.fields.Tags)
  );

  return randomLot(relatedPosts, size); // random selection
}
