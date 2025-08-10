// Dark mode toggle
document.getElementById('toggle-theme').addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const btn = document.getElementById('toggle-theme');
  btn.textContent = document.body.classList.contains('dark') ? 'Light Mode' : 'Dark Mode';
});

// Read more alert
function readMore() {
  alert("Thanks for clicking! More content coming soon...");
}

// Search filter
document.getElementById('search').addEventListener('input', function () {
  const searchText = this.value.toLowerCase();
  const posts = document.querySelectorAll('.post');

  posts.forEach(post => {
    const content = post.textContent.toLowerCase();
    post.style.display = content.includes(searchText) ? '' : 'none';
  });
});
