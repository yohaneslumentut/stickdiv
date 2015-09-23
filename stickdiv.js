( function(  $, window ){

    $.fn.stickyDiv = function() {

        var el = $( this );
        var elWidth = el.parent().width();
        var stickyPos = el.position();
        var windWidth = $( window).width();
        var limit = 977;

        $( window ).resize(function() {
            stickyPos = el.position();
            elWidth = el.parent().width();
            windWidth = $( this ).width();
            el.width( elWidth );
        });

        $( window ).scroll(function() {

            var windowPos = $( this ).scrollTop();

            if ( windowPos >= stickyPos.top && windWidth >= limit ) {
                    el.addClass( 'active' );
                    el.width( elWidth );
            } else {
                el.removeClass( 'active' );
            }
        });

        return this;
    };

}( jQuery, window ));
