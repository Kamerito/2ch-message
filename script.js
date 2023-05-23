document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('post-form');
    const authorInput = document.getElementById('author-input');
    const messageInput = document.getElementById('message-input');
    const messagesDiv = document.getElementById('messages');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const author = authorInput.value;
      const message = messageInput.value;
  
      if (author && message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.innerHTML = `
          <div class="author">${author}</div>
          <div class="message-body">${message}</div>
        `;
  
        messagesDiv.appendChild(messageElement);
  
        // 投稿後に入力欄をクリアする
        authorInput.value = '';
        messageInput.value = '';
      }
    });
  });
  
