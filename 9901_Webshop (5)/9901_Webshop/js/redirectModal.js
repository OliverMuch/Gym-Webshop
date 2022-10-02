
$(document).ready(function () {

    if (window.location.href.indexOf('#productModal') > -1) {
        var url = window.location.href;
        var id = url.split('#')[2].split('%20')[2];
        changeModal(id);
    }
});


$(document).on('hide.bs.modal', '#productModal', function () {
    window.open(window.location.href.split('#')[0], "_self");
});