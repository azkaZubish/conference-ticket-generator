document.addEventListener('DOMContentLoaded', () => {
   const data = JSON.parse(localStorage.getItem('ticketData'));
   if(!data) return;

   const nameHead = document.querySelector('.user-name-head');
   const name = document.querySelector('.user-name');
   if(name) name.textContent = data.name;
   if(nameHead) nameHead.textContent = data.name;

   const gmail = document.querySelector('.user-email');
   if(gmail) gmail.textContent = data.gmail;

   const avatar = document.querySelector('.user-avatar');
   if(avatar) avatar.textContent = data.avatar;

   const gitname = document.querySelector('.git-name');
   if(gitname) gitname.textContent = data.gitname;

   const ticketNo = document.querySelector('.ticket-right');
   ticketNo.textContent = data.ticketNo; 
});