// * Click Listeners

// ** Create Btn, Create db Item
$('#submit').on('submit', function(event) {
    event.preventDefault();
    // Store User Text Field as An Object
    const userBurg = $('#text').val().trim()
            // console.log(userBurg.length);
    if (userBurg == "") {
        $('#msg').text('Please enter a burger')
        return;
    } else if (userBurg.length > 30) { 
        $('#msg').text('Your burger is too strong!')
        return;
    }
    const newBurg = {
        burgerName: userBurg
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
    const status = $(this).data('eat')
    if (status == 'eaten') {
        $.ajax('/api/burg/'+id, {
            type: 'DELETE'
        })
        .then();
    } else {
        const update = {
            isEaten: 1
        }
        $.ajax('/api/burg/'+id, {
            type: 'PUT',
            data: update
        })
        .then();
    }
    location.reload()
});

// console.log($('#submit')[0].children[0]);