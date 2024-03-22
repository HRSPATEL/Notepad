const textArea = document.getElementById('text-area');
const fontSizeControl = document.getElementById('font-size-control');

// Load saved text and font size from localStorage
window.onload = function() {
    const savedText = localStorage.getItem('notepadText');
    const savedFontSize = localStorage.getItem('notepadFontSize');
    if (savedText) {
        textArea.value = savedText;
    }
    if (savedFontSize) {
        textArea.style.fontSize = savedFontSize + 'px';
        fontSizeControl.value = savedFontSize;
    }
};

// Save text to localStorage on input
textArea.addEventListener('input', function() {
    localStorage.setItem('notepadText', textArea.value);
});

// Change font size and save it to localStorage
fontSizeControl.addEventListener('input', function() {
    textArea.style.fontSize = this.value + 'px';
    localStorage.setItem('notepadFontSize', this.value);
});