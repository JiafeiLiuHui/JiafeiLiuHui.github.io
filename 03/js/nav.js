$(function () {
    $("[name='choose']").change(function () {
        var value=$(this).val();
        location.href=value;
    })
})