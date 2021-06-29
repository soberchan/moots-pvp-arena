const max_points = 50;
var points = 0;

function composeCost(n){
    if(Math.ceil(n/3) < 2)
        return n;
    else
       return n + composeCost(n-3);
}

$(function(){
    $('form').change(function(){
        var attrvalues = [];            
        $('input[type^=range]').each(function(){
            var cost = composeCost(parseInt($(this).val()));
            attrvalues.push(cost);
        });
        points = attrvalues.reduce(function(a, b){
            return a + b;
        })
        $('#points').html(max_points-points);
        $('#total_cost').val(points);
        if (points > max_points)
            $('#points').css('color', 'red');
        else
            $('#points').css('color', 'black');
        return false;
    });
    $('form').submit(function(){
        const input = $('#total_cost');
        const points = parseInt(input.val());
        if (points > max_points){
            input.setCustomValidity('Must be equal or greater than zero.')
        }else{
            input.setCustomValidity('');
        }
        input.reportValidity();
    })
});
     