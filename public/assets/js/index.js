// * Click Listeners

// ** Create Btn, Create db Item
$('#submit').on('submit', function(event) {
    event.preventDefault();
    // Store User Text Field as An Object
    let newBurg = {
        burgerName: $('#text').val().trim()
    };
            // console.log('promise: '+newBurg);
    // Send DATA to Server
    $.post('/api/burg', newBurg)
    .then(() => {
                // console.log(newBurg);
        // Reload Page to Display New Item
        location.reload()
    });
});

$('.btn').on('click', function(event){
    // console.log(this.attributes[1]);
    const id = $(this).data('id');
    const update = {
        isEaten: 1
    }
    $.ajax('/api/burg/'+id, {
        type: 'PUT',
        data: update
    })
    .then( ()=> location.reload() )
})

// console.log($('#submit')[0].children[0]);