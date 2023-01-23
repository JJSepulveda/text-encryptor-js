const copyToClipboard = (elementId) => {
    // Get the text to copy
    const textToCopy = document.querySelector(`.${elementId}`).innerText;

    // Create a temporary textarea element to hold the text
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = textToCopy;

    // Add the textarea to the DOM
    document.body.appendChild(tempTextArea);

    // Highlight the text in the textarea
    tempTextArea.select();

    // Copy the highlighted text to the clipboard
    document.execCommand("copy");

    // Remove the textarea from the DOM
    document.body.removeChild(tempTextArea);
    alert("Text copied to clipboard!");
}

//copyToClipboard("result_section__p");
