// Mobile menu toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

// Modal Controls
function openBookingModal() {
    document.getElementById('booking-modal').classList.remove('hidden');
}

function closeBookingModal() {
    document.getElementById('booking-modal').classList.add('hidden');
}

// 原代碼有 openMembershipModal，但頁面沒有該modal，補上空函數防止報錯
function openMembershipModal(){
    alert("會員模組尚未實作");
}

function handleBooking(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const branch = document.getElementById('branch').value;
    const date = document.getElementById('date').value;
    const guests = document.getElementById('guests').value;

    document.getElementById('success-msg').innerText = `感謝 ${name} 先生/小姐！您已成功預訂 ${branch} (${date}，${guests})。我們將盡快與您聯繫。`;
    
    closeBookingModal();
    document.getElementById('success-modal').classList.remove('hidden');
    event.target.reset();
}

function closeSuccessModal() {
    document.getElementById('success-modal').classList.add('hidden');
}

// Set minimum date for booking to today
document.addEventListener('DOMContentLoaded', () => {
    const today = new Date().toISOString().split('T')[0];
    const dateInput = document.getElementById('date');
    if(dateInput) {
        dateInput.min = today;
        dateInput.value = today;
    }
});
