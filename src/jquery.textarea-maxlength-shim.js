if (!("maxLength" in document.createElement("textarea"))) {
    $("textarea[maxlength]").each(function () {
        var $el = $(this).on("keydown keyup focus blur paste cut", function (event) {
            var keyCode = event.which,
                that = this,
                limit = Math.abs(parseInt($el.attr("maxlength"), 10)) || -1;
            if (keyCode === 13 || keyCode >= 33) {
                if (that.value.length >= limit) {
                    that.value = that.value.substr(0, limit - 1);
                    event.preventDefault();
                }
            }
        });
    });
}
