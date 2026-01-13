// File Size Calculator functionality
document.addEventListener('DOMContentLoaded', function() {
    const fileSizeInput = document.getElementById('fileSize');
    const sizeUnitSelect = document.getElementById('sizeUnit');
    const calculateBtn = document.getElementById('calculateBtn');
    const resultsSection = document.getElementById('results');
    const continueBtn = document.getElementById('continueBtn');
    const countdownElement = document.getElementById('countdown');
    
    let countdownInterval;
    let countdownValue = 5;
    
    // Calculate button click handler
    calculateBtn.addEventListener('click', function() {
        const fileSize = parseFloat(fileSizeInput.value);
        
        if (isNaN(fileSize) || fileSize <= 0) {
            alert('Please enter a valid file size');
            return;
        }
        
        // Perform calculations
        const sizeInMB = sizeUnitSelect.value === 'GB' ? fileSize * 1024 : fileSize;
        const sizeInGB = sizeUnitSelect.value === 'MB' ? fileSize / 1024 : fileSize;
        const sizeInKB = sizeInMB * 1024;
        
        // Display results
        document.getElementById('sizeMB').textContent = sizeInMB.toFixed(2) + ' MB';
        document.getElementById('sizeGB').textContent = sizeInGB.toFixed(2) + ' GB';
        document.getElementById('sizeKB').textContent = sizeInKB.toFixed(2) + ' KB';
        
        // Calculate download times
        const download5mbps = calculateDownloadTime(sizeInMB, 5);
        const download10mbps = calculateDownloadTime(sizeInMB, 10);
        const download20mbps = calculateDownloadTime(sizeInMB, 20);
        
        document.getElementById('download5mbps').textContent = download5mbps;
        document.getElementById('download10mbps').textContent = download10mbps;
        document.getElementById('download20mbps').textContent = download20mbps;
        
        // Display storage tips
        displayStorageTips(sizeInMB);
        
        // Show results
        resultsSection.style.display = 'block';
        
        // Start countdown for advanced tool
        startCountdown();
    });
    
    // Continue button click handler
    continueBtn.addEventListener('click', function() {
        // Redirect to Monetag direct link
        window.location.href = 'https://otieu.com/4/10456705';
    });
    
    // Calculate download time
    function calculateDownloadTime(sizeMB, speedMbps) {
        // Convert MB to megabits (1 MB = 8 megabits)
        const sizeMegabits = sizeMB * 8;
        // Calculate time in seconds
        const timeSeconds = sizeMegabits / speedMbps;
        
        if (timeSeconds < 60) {
            return timeSeconds.toFixed(1) + ' seconds';
        } else if (timeSeconds < 3600) {
            const minutes = Math.floor(timeSeconds / 60);
            const seconds = Math.floor(timeSeconds % 60);
            return `${minutes} min ${seconds} sec`;
        } else {
            const hours = Math.floor(timeSeconds / 3600);
            const minutes = Math.floor((timeSeconds % 3600) / 60);
            return `${hours} hr ${minutes} min`;
        }
    }
    
    // Display storage tips
    function displayStorageTips(sizeMB) {
        const tipsContainer = document.getElementById('storageTips');
        let tips = [];
        
        if (sizeMB < 100) {
            tips.push('✓ Perfect for email attachments');
            tips.push('✓ Quick to upload and download');
            tips.push('✓ Minimal storage space required');
        } else if (sizeMB < 500) {
            tips.push('✓ Suitable for cloud storage');
            tips.push('✓ Reasonable download time');
            tips.push('✓ Consider compression for faster transfer');
        } else if (sizeMB < 1024) {
            tips.push('⚠ Large file size detected');
            tips.push('✓ Use stable internet connection for download');
            tips.push('✓ Consider file compression if possible');
        } else {
            tips.push('⚠ Very large file size');
            tips.push('✓ Ensure sufficient storage space');
            tips.push('✓ Use download manager for reliability');
            tips.push('✓ Consider splitting into smaller parts');
        }
        
        tipsContainer.innerHTML = tips.map(tip => `<p>${tip}</p>`).join('');
    }
    
    // Start countdown timer
    function startCountdown() {
        // Reset countdown
        countdownValue = 5;
        continueBtn.disabled = true;
        
        // Clear any existing interval
        if (countdownInterval) {
            clearInterval(countdownInterval);
        }
        
        // Update countdown display
        countdownElement.textContent = countdownValue;
        
        // Start countdown
        countdownInterval = setInterval(function() {
            countdownValue--;
            countdownElement.textContent = countdownValue;
            
            if (countdownValue <= 0) {
                clearInterval(countdownInterval);
                continueBtn.disabled = false;
                countdownElement.style.display = 'none';
                document.querySelector('.countdown-text').style.display = 'none';
            }
        }, 1000);
    }
});