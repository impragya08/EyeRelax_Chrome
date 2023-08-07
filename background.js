chrome.runtime.onInstalled.addListener(() => {
  setReminderAlarm();
});

// Function to set the reminder alarm
function setReminderAlarm() {
  chrome.alarms.create('eyeStrainReminder', { periodInMinutes: 20 });
}

// Function to show the reminder badge
function showReminderBadge() {
  chrome.action.setBadgeText({ text: '!' });
  chrome.action.setBadgeBackgroundColor({ color: '#FF0000' });
  
  // Display a desktop notification
  chrome.notifications.create({
    type: 'basic',
    iconUrl: 'hidden.png', 
    title: 'Eye Strain Reminder',
    message: 'Take a break and rest your eyes!',
    priority: 2,
  });
}

// Function to clear the reminder badge
function clearReminderBadge() {
  chrome.action.setBadgeText({ text: '' });
}

// Add event listener to the alarm to show the reminder
chrome.alarms.onAlarm.addListener(function (alarm) {
  if (alarm.name === 'eyeStrainReminder') {
    showReminderBadge();
  }
});

// Add event listener for the extension icon click to clear the badge
chrome.action.onClicked.addListener(function () {
  clearReminderBadge();
});
