document.addEventListener('DOMContentLoaded', function() {
    const fileInput = document.getElementById('fileInput');
    const imagePreview = document.getElementById('preview-img');
    const hide = document.querySelectorAll(".hide");
    const maxSize = 1 * 1024 * 1024;

    const eventNameInput = document.getElementById('e-name');
    const orgNameInput = document.getElementById('org-name');
    const websiteUrlInput = document.getElementById('website-url');
    const eventDescInput = document.getElementById('e-desc');
    const startDateInput = document.getElementById('start-date');
    const endDateInput = document.getElementById('end-date');

    const previewLogoImg = document.getElementById('preview-logo-img');
    const previewEventName = document.getElementById('preview-event-name');
    const previewOrgName = document.getElementById('preview-org-name');
    const previewWebsiteUrl = document.getElementById('preview-website-url');
    const previewEventDesc = document.getElementById('preview-event-desc');
    const previewStartDate = document.getElementById('preview-start-date');
    const previewEndDate = document.getElementById('preview-end-date');
    const previewContent = document.getElementById('preview-content');

    fileInput.addEventListener('change', function() {
        const file = this.files[0];

        if (file && file.size <= maxSize) {
            const reader = new FileReader();

            reader.onload = function(e) {
                imagePreview.src = e.target.result;
                previewLogoImg.src = e.target.result;
                imagePreview.style.display = 'block';
                previewLogoImg.style.display = 'block';
                hide.forEach(el => el.style.display = 'none');
                previewContent.style.display = 'block';
            };

            reader.readAsDataURL(file);
        } else {
            alert('File size exceeds 1 MB. Please choose a smaller file.');
            this.value = '';
        }
    });

    function updatePreview() {
        previewEventName.textContent = eventNameInput.value || "Event Name";
        previewOrgName.textContent = orgNameInput.value || "Organisation Name";
        previewWebsiteUrl.textContent = websiteUrlInput.value || "Website URL";
        previewEventDesc.textContent = eventDescInput.value || "Event Description";
        previewStartDate.textContent = "Registration Starts: " + (startDateInput.value ? new Date(startDateInput.value).toLocaleString() : "Not Set");
        previewEndDate.textContent = "Registration Ends: " + (endDateInput.value ? new Date(endDateInput.value).toLocaleString() : "Not Set");

        if (eventNameInput.value || orgNameInput.value || websiteUrlInput.value || eventDescInput.value || startDateInput.value || endDateInput.value) {
            previewContent.style.display = 'block';
        } else {
            previewContent.style.display = 'none';
        }
    }

    eventNameInput.addEventListener('input', updatePreview);
    orgNameInput.addEventListener('input', updatePreview);
    websiteUrlInput.addEventListener('input', updatePreview);
    eventDescInput.addEventListener('input', updatePreview);
    startDateInput.addEventListener('input', updatePreview);
    endDateInput.addEventListener('input', updatePreview);

    // Initial call to hide preview if no data
    updatePreview();
});

const submit= document.querySelector(".submit");
const btn=document.querySelector(".footer-button");
btn.addEventListener("click",()=>{
    const details=document.querySelector(".create-section");
    const preview=document.querySelector(".preview");
    
    details.style.display="none";
    preview.style.display="block";
    btn.style.display="none";
    submit.style.display="block";
})
submit.addEventListener("click",()=>{
    alert("Your event is uploaded");
    window.location.href="index.html";
})