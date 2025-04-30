function openModal() {
    document.getElementById('calendarModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
    if (window.innerWidth <= 768) {
        document.querySelector('iframe').style.height = '70vh';
    }
}

function closeModal() {
    document.getElementById('calendarModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

window.onclick = function(event) {
    var modal = document.getElementById('calendarModal');
    if (event.target == modal) {
        closeModal();
    }
}

window.addEventListener('resize', function() {
    if (window.innerWidth <= 768) {
        document.querySelector('iframe').style.height = '70vh';
    } else {
        document.querySelector('iframe').style.height = '650px';
    }
});