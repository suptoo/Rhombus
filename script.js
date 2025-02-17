// This file contains the JavaScript code for the Rhombus website.
// Add your interactive features and dynamic content updates here.

document.addEventListener('DOMContentLoaded', () => {
    console.log('Rhombus website loaded successfully!');
    
    const form = document.getElementById('videoRequestForm');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', event => {
        event.preventDefault();

        const textInput = document.getElementById('textInput').value.trim();

        if (textInput) {
            resultDiv.className = 'result-message';
            resultDiv.textContent = 'Generating video...';

            // Simulate video generation with a 3 second delay.
            setTimeout(() => {
                // Here you can replace "dummy-video.mp4" with your actual video file.
                resultDiv.innerHTML = `<video controls autoplay style="max-width:100%;">
                    <source src="dummy-video.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>`;
                resultDiv.className = 'result-message result-success';
            }, 3000);
        } else {
            resultDiv.className = 'result-message';
            resultDiv.textContent = '';
        }
    });
});