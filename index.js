document.addEventListener("DOMContentLoaded", function () {
    let coll = document.querySelectorAll(".collapsible");

    coll.forEach(button => {
        button.addEventListener("click", function () {
            let content = this.nextElementSibling;

            // Toggle active class
            this.classList.toggle("active");

            // Check if content is already expanded
            if (content.style.maxHeight) {
                content.style.maxHeight = null; // Collapse it
            } else {
                content.style.maxHeight = content.scrollHeight + "px"; // Expand it
            }
        });
    });
});

function showSideBar() {
    const sidebar = document.querySelector(".sidebar")

    sidebar.style.display ='flex'
    sidebar.style.right ='0'
}
function closeSideBar() {
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display ='none'
}