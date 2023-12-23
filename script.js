//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function () {
        // Get the body element
        var bodyElement = document.body;

        // Check if the body is empty (has no child nodes)
        if (bodyElement.childNodes.length === 0) {
            // Create a new text node with the message
            var textNode = document.createTextNode('DOM load success');

            // Append the text node to the body
            bodyElement.appendChild(textNode);
        }
    });