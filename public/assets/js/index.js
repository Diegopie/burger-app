$('#submit').on('submit', function(event) {
    event.preventDefault();
    let newBurg = {
        burgerName: $('#text').val().trim()
    };
    console.log('promise: '+newBurg);
    $.ajax('/api/burg', {
        type: 'POST',
        data: newBurg
    })
    .then(function(){
        console.log(newBurg);
        location.reload()
    });
});

// console.log($('#submit')[0].children[0]);