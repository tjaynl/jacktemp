document.addEventListener('DOMContentLoaded', function() {
    const videoDialog = document.getElementById('videoDialog');
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const youtubeVideo = document.getElementById('youtubeVideo');
  
    // Save the original video URL
    const originalSrc = youtubeVideo.src;
  
    // Open the dialog when the button is clicked
    openModalBtn.addEventListener('click', function() {
        videoDialog.showModal(); // Opens the dialog
        youtubeVideo.src = originalSrc; // Reset the video src
        closeModalBtn.style.display = 'block'; // Show close button
    });
  
    // Close the dialog and stop the video
    closeModalBtn.addEventListener('click', function() {
        videoDialog.close(); // Closes the dialog
        youtubeVideo.src = ""; // Clears the video src to stop playback
        closeModalBtn.style.display = 'none'; // Hide close button
    });
  
    // Close the dialog when clicking outside the modal content and stop the video
    videoDialog.addEventListener('click', function(event) {
        if (event.target === videoDialog) {
            videoDialog.close();
            youtubeVideo.src = ""; // Clears the video src to stop playback
            closeModalBtn.style.display = 'none'; // Hide close button
        }
    });
  });