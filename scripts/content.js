// Function to highlight superscript elements
function highlightSuperscripts() {
    // Select all <sup> elements
    const supElements = document.querySelectorAll('sup');

    // Highlight each <sup> element
    for (let elem of supElements) {
        elem.style.color = 'blue';
        elem.style.backgroundColor = 'yellow'; // Added background color to highlight
    }

    // Select all elements with CSS style `vertical-align: super;`
    const styledSuperscripts = Array.from(document.querySelectorAll('*')).filter(elem => {
        const computedStyle = window.getComputedStyle(elem);
        return computedStyle.verticalAlign === 'super';
    });

    // Highlight each styled superscript element
    for (let elem of styledSuperscripts) {
        elem.style.color = 'blue';
        elem.style.backgroundColor = 'yellow'; // Added background color to enhance highlighting
    }
}

// Run the highlight function
highlightSuperscripts();
