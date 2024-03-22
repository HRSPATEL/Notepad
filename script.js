const textArea = document.getElementById('text-area');
const fontSizeControl = document.getElementById('font-size-control');
const fontSizeValue = document.getElementById('font-size-value');

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
    const lines = textArea.value.split('\n').length;
    const words = textArea.value.split(/[\n\s]+/).filter(function(word) {
        return word !== '';
    }).length;

    localStorage.setItem('notepadText', textArea.value);

    const lineCounter = document.getElementById('line-counter');
    const wordCounter = document.getElementById('word-counter');

    lineCounter.textContent = 'Lines: ' + lines;
    wordCounter.textContent = 'Words: ' + words;
});

// Change font size and save it to localStorage
fontSizeControl.addEventListener('input', function() {
    textArea.style.fontSize = this.value + 'px';
    localStorage.setItem('notepadFontSize', this.value);
    fontSizeValue.textContent = this.value; // Display the current font size
});

const downloadBtn = document.getElementById('download-btn');

downloadBtn.addEventListener('click', function() {
    const text = textArea.value;
    const blob = new Blob([text], {type: 'text/plain'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'notepad.txt';
    a.click();
});