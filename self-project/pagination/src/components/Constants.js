const url = "https://jsonplaceholder.typicode.com/posts";
const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postPerPage;
const currentPosts = posts.slice(indexOfFirstPosts, indexOfLastPosts);

export {url, indexOfFirstPost, indexOfLastPost, currentPosts}