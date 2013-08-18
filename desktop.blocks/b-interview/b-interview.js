modules.define('i-bem__dom', function(provide, DOM) {

    DOM.decl('b-interview', {
        onSetMod: {
            'js' : {
                'inited' : function() {
                    this.bindTo(this.elem('question'), 'click', function(event) {
                        var aa = jQuery(event.currentTarget.nextSibling);
                        console.log(aa, this.elem('answer'));
                        this.toggleMod(this.elem('answer'), 'state', 'show', '');
                    });
                }
            }
        }
    });

    provide(DOM);

});