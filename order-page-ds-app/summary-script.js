document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('name').textContent = localStorage.getItem('name');
    document.getElementById('street').textContent = localStorage.getItem('street');
    document.getElementById('phone').textContent = localStorage.getItem('phone');
    document.getElementById('email').textContent = localStorage.getItem('email');
    document.getElementById('deliveryDay').textContent = localStorage.getItem('deliveryDay');
});