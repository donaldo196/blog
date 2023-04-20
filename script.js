// Array to hold blog posts
let blogPosts = [];

// Function to add a new blog post
function addBlogPost(title, content, author) {
  let post = {
    title: title,
    content: content,
    author: author,
    likes: 0,
    shares: 0
  };
  blogPosts.push(post);
}

// Function to delete a blog post by index
function deleteBlogPost(index) {
  blogPosts.splice(index, 1);
}

// Function to like a blog post by index
function likeBlogPost(index) {
  blogPosts[index].likes++;
}

// Function to share a blog post by index
function shareBlogPost(index) {
  blogPosts[index].shares++;
}

// Example usage
addBlogPost("My Third Blog Post", "Lorem ipsum dolor sit amet...", "Jane Doe");
console.log(blogPosts);

likeBlogPost(0);
likeBlogPost(0);
shareBlogPost(0);
console.log(blogPosts);

deleteBlogPost(0);
console.log(blogPosts);
