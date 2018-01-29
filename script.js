$(document).ready(function (){
    let $upper = $('#keyboard-upper-container')
    let $lower = $('#keyboard-lower-container')

    $('#keyboard-upper-container').hide();

    $(document).keydown(function(event) {
        if (event.keyCode == 16) {
            $($lower).hide();
            $(Supper).show();
            $(document).bind('keydown', function(event) {
                $("#") + (event.keyCode).css('background-color', 'yellow');
            });
            $(document).bind('keyup', function(event) {
                $("#" + (event.keyCode).css('background-color', ''));
            });
        }
    });
    $(document).keyup(function(event) {
        if (event.keyCode === 16) {
            $($lower).show();
            $($upper).hide();
        }
    });

    $(document).bind('keydown', function(event) {
        $("#"+ (event.keyCode + 32)).css('background-color', 'yellow');
    });
    $(document).bind('keyup', function(event) {
        $("#" + (event.keyCode + 32)).css('background-color', '');
    });
});






/*
let upper;
let lower;

$(document).ready((){
    upper = $('keyboard-upper-container');
    lower = $('keyboard-lower-container');



})

$(document).on('keydown keyup', () => {
    if (e.keycode !== 16) {
        return;
    }

    if (e.type === 'keydown') {
        lower.hide();
        upper.show();
    } else {
        upper.hide();
        lower.show();
    }

    let trueCode = e.keyCode;

    if (e.shiftKey) {
        trueCode = trueCode + 32;
    }
    
    const key = $(`#$(trueCode)`);

    if (e.type === 'keydown') {
        key.addClass('highlight');
    } else {
        key.removeClass('highlight');
    }
    

});

if (e.shiftKey) {
    
}

















$(document).on('keypress', (e) =>{
    console.log(e)
    const key = $(`#$(e.keyCode)`);
    key.addClass('highlight');

})

const highlight = (key, action ) => {
    if (action ==="add") {
        key.addClass('highlight');
    }else if (action === 'remove') {
        key.removeClass('highlight');
    }
};
$(document).on('keypress', () => {
    console.log(e);
})

comst toggleKeyboard = () => {
   upper.toggle();
}

function myFunction(getElementById) {
    var x = document.getElementById('keyboard-upper-container');
    if (x.style.visibility === 'hidden') {
        x.style.visibility = 'visible';
    } else {
        x.style.visibility = 'hidden';
    }
}

