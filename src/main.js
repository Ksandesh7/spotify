import './style.css'

document.addEventListener('DOMContentLoaded', ()=> {
  if(localStorage.getItem('AccessToken')) window.location.href = 'dashboard/dashboard.html';
  else window.location.href = 'login/login.html';
}) 
