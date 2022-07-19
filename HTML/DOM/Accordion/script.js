const accordion = document.getElementsByClassName('content-container');

for (let item of accordion) {
    item.addEventListener('click', function() {
        this.classList.toggle('active');
    });
}