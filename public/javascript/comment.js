async function commentFormHandler(event) {
    event.preventDefault();
  
    const commentItem = document.querySelector('textarea[name="comment-body"]').value.trim();
  
    const PostItem = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    if (commentItem) {
        const response = await fetch('/api/comments', {
          method: 'POST',
          body: JSON.stringify({
            PostItem,
            commentItem
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
      
        if (response.ok) {
          document.location.reload();
        } else {
          alert(response.statusText);
        }
      }
  }
  
  document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);