var string = "";
var buttons = $("button");

buttons.click(function(){
    var btnClass = $(this).attr('class');
    buttonAnimation($(this));
    if (btnClass=="equalto"){
        string = eval(string).toString();
    }else if (btnClass=="ac"){
        string = "";   
    }else if (btnClass=="x"){
        string = string.slice(0, (string.length)-1);
    }else{
        string += $(this).text();
    }
    $('input').val(string);
}
)

function buttonAnimation(element){
    $(element).addClass('pressed');
    setTimeout(()=>{
        $(element).removeClass('pressed');
    }, 100);
}