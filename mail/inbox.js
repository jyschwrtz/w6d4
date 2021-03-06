const messageStore = require("./message_store.js");
class Inbox {
  constructor() {
    
  }
  render() {
    const messages = messageStore.getInboxMessages()
    const ul = document.createElement('UL');
    ul.className = "messages";
    messages.forEach((message) => {
      const renderedMessage = this.renderMessage(message);
      ul.appendChild(renderedMessage);
    });
    // ul.innerHTML = "An Inbox Message";
    return ul;
  }
  
  renderMessage(message) {
    const li = document.createElement('LI');
    li.className = "message";
    li.innerHTML = `
      <span>from: ${message.from}</span><br/>
      <span>subject: ${message.subject}</span><br/>
      <span>Body: ${message.body}</span>
    `
    return li;
  }
}
module.exports = Inbox;