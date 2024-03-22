const notepad = document.getElementById('notepad');

// Load saved text from localStorage
window.onload = function() {
    const savedText = localStorage.getItem('notepadText');
    if (savedText) {
        notepad.value = savedText;
    }
};

// Save text to localStorage on input
notepad.addEventListener('input', function() {
    localStorage.setItem('notepadText', notepad.value);
});
