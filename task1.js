document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.getAttribute('data-value');
            if (value === 'AC') {
                display.innerText = '';
            } else if (value === '=') {
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = 'Error';
                }
            } 
            else {
                display.innerText += value;
            }
        });
    });
});
