
function sortOut() {
    let input = document.getElementById('array').value
    let arr = input.split(' ')
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (parseInt(arr[j]) > parseInt(arr[i])) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;

            }
        }
    }
    document.write(`
        <h1 class ="print1">${arr}</h1>
</div>`)


}

