( function(  $, window ){

    $.fn.fixTopHeader = function( options ) {
        var defaults = $.extend({
            header:'.panel-heading',
            bottom:'.panel-footer',
            active:'active',
            widthLimit: 475,
            fromBottom: 70
        }, options);

        var el = $(this);

        if(el.find(defaults.bottom).length === 1)
        {
            var _hdr = el.find(defaults.header);
            var _ftr = el.find(defaults.bottom);
            var _elPos = el.position();
            var _hdrPos = _hdr.position();
            var _ftrPos = _ftr.position();

            $(window).resize(function() {
                _elPos = el.position();
                _hdrPos = _hdr.position();
                _ftrPos = _ftr.position();

                var windowWidth = $(this).width();

                if ( windowWidth > defaults.widthLimit ) {
                    _hdr.removeClass(defaults.active);
                }
            });

            $(window).scroll(function() {
                var windowPos = $(this).scrollTop();
                var windowWidth = $(this).width();

                if ( windowWidth < defaults.widthLimit ) {
                    if (windowPos >= (_ftrPos.top - defaults.fromBottom)) {
                        _hdr.removeClass(defaults.active);
                    } else if (windowPos < _elPos.top) {
                        _hdr.removeClass(defaults.active);
                    } else if (windowPos >= _hdrPos.top) {
                        _hdr.addClass(defaults.active);
                    } else {
                        _hdr.removeClass(defaults.active);
                    }
                }
            });
            return this;
        }
    };

}( jQuery, window ));
