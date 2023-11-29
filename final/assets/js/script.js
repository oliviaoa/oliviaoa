document.addEventListener('DOMContentLoaded', function() {
    var timeElement = document.getElementById('time');
    var dateElement = document.getElementById('date');

    function updateClock() {
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var formattedTime = zeroBefore(hours) + ":" + zeroBefore(minutes);
        if (timeElement) {
            timeElement.textContent = formattedTime;
        }
    }

    function updateDate() {
        var currentDate = new Date();
        var daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
        var dayOfWeek = daysOfWeek[currentDate.getDay()];
        var formattedDate = dayOfWeek + ", " + getMonthName(currentDate.getMonth()) + " " + currentDate.getDate();
        if (dateElement) {
            dateElement.textContent = formattedDate;
        }
    }

    function zeroBefore(number) {
        return number < 10 ? "0" + number : number;
    }

    function getMonthName(monthIndex) {
        var months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
        return months[monthIndex];
    }

    if (timeElement && dateElement) {
        updateClock(); 
        updateDate(); 
        setInterval(updateClock, 1000); 
    }

    var addButton = document.getElementById('todo-add-btn');
    var inputField = document.getElementById('todo-input');
    var todoList = document.getElementById('todo-list');

    if (addButton && inputField && todoList) {
        addButton.addEventListener('click', function() {
            var task = inputField.value.trim();
            if (task !== '') {
                var listItem = document.createElement('li');
                listItem.textContent = task;
                listItem.addEventListener('click', function() {
                    todoList.removeChild(this);
                });
                todoList.appendChild(listItem);
                inputField.value = '';
            }
        });
    }
});
