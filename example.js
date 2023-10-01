// JavaScript code for handling comments
const commentForm = document.getElementById("comment-form");
const commentsContainer = document.getElementById("comments");

commentForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const comment = document.getElementById("comment").value;

    const commentElement = document.createElement("div");
    commentElement.classList.add("comment");

    commentElement.innerHTML = `
        <h3>${name}</h3>
        <p>${comment}</p>
        <button class="delete">Delete</button>
    `;

    commentsContainer.appendChild(commentElement);

    // Clear the form inputs
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("comment").value = "";

    // Attach event listener to the delete button
    const deleteButton = commentElement.querySelector(".delete");
    deleteButton.addEventListener("click", function () {
        commentElement.remove();
    });
});
