
document.addEventListener('DOMContentLoaded', function () {
    const loadingOverlay = document.getElementById('loadingOverlay');
    const uploadForm = document.getElementById('uploadForm');
  
    // Add an event listener to the form to show the loading overlay
    uploadForm.addEventListener('submit', function () {
        loadingOverlay.style.display = 'flex';
    });
  });