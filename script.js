function convertTime() {
    const localTime = document.getElementById('localTime').value;
    const localTimeZone = document.getElementById('localTimeZone').value;
    const resultDiv = document.getElementById('result');
    
    // Assuming the time is in UTC for simplicity
    const date = new Date(`1970-01-01T${localTime}:00Z`);

    // Example converting to a few time zones
    const estTime = new Date(date).toLocaleTimeString('en-US', {timeZone: "America/New_York", hour: '2-digit', minute:'2-digit', hour12: false});
    const pstTime = new Date(date).toLocaleTimeString('en-US', {timeZone: "America/Los_Angeles", hour: '2-digit', minute:'2-digit', hour12: false});

    // Display result
    resultDiv.innerHTML = `Time in EST: ${estTime}<br>Time in PST: ${pstTime}`;
}
