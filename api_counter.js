updateVisitCount();
function updateVisitCount() {
    fetch('https://fn2qro7sr4.execute-api.us-west-1.amazonaws.com/Dev/method', {method: 'POST'})
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.getElementById('count').innerHTML = data;
        })
    }
