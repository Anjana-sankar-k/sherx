document.addEventListener('DOMContentLoaded', () => {
    // Placeholder functionality
    const notifications = document.querySelectorAll('.notification-list li');
    notifications.forEach((notification) => {
        notification.addEventListener('click', () => {
            alert(`Notification: ${notification.textContent}`);
        });
    });
});
