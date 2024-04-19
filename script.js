function convertTime() {
    const localTime = document.getElementById('localTime').value;
    const resultDiv = document.getElementById('result');

    function isDST(date) {
        const jan = new Date(date.getFullYear(), 0, 1).getTimezoneOffset();
        const jul = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
        return Math.max(jan, jul) !== date.getTimezoneOffset();
    }

    const currentDate = new Date();
    const dstActive = isDST(currentDate);
    const offset = dstActive ? "-04:00" : "-05:00"; // EDT or EST
    const easternDate = new Date(`1970-01-01T${localTime}:00${offset}`);

    const options = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    };

    const pstTime = easternDate.toLocaleTimeString('en-US', {...options, timeZone: "America/Los_Angeles"});
    const centralTime = easternDate.toLocaleTimeString('en-US', {...options, timeZone: "America/Chicago"});
    const chinaTime = easternDate.toLocaleTimeString('en-US', {...options, timeZone: "Asia/Shanghai"});

    resultDiv.innerHTML = `Time in Pacific Time: ${pstTime}<br>
                           Time in Central Time: ${centralTime}<br>
                           Time in China Standard Time: ${chinaTime}`;
}