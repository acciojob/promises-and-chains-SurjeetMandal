document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let age = document.getElementById('age').value;
    let name = document.getElementById('name').value;

    if (!age || !name) {
        alert('Both age and name are required!');
        return;
    }

function checkAge(age, name) {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            setTimeout(() => {
                resolve("Welcome, " + name + ". You can vote.");
            }, 4000);
        } else {
            reject("Oh sorry " + name + ". You aren't old enough.");
        }
    });
}
    checkAge(age, name).then(data1 => alert(data1)).catch(data2 => alert(data2));
});
