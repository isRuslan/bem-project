modules.define('i-bem__dom', function(provide, DOM) {

    DOM.decl('b-interview', {
        onSetMod: {
            'js' : {
                'inited' : function() {
                    this.bindTo(this.elem('question'), 'click', function(event) {
                        console.log(event.currentTarget.nextSibling, this.elem('answer')[0]);
                        this.toggleMod(event.currentTarget.nextSibling, 'state', 'show', '');
                    });
                }
            }
        }
    });

    provide(DOM);

});