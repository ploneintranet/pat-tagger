(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define('pat-tagger',[
          'jquery',
          'pat-registry',
          'pat-parser'
        ], function ($, registry, Parser) {
            return factory($, registry, Parser);
        });
    } else {
        factory(root.jQuery, root.patterns, root.patterns.Parser);
    }
}(this, function($, registry, Parser) {
    var parser = new Parser("tagger");

    // Selector where tagger should place links
    parser.add_argument("target");
    // Selector of checklist items
    parser.add_argument("source");
    // Text to prepend to each link (examples: # or @ for tags or mentions)
    parser.add_argument("prepend", "");
    // Text to prepend to the list of links
    parser.add_argument("listprepend", "");
    // Selector of the selected item to use as text of the link
    parser.add_argument("description", "strong");

    var picker = {
        name: "tagger",
        trigger: ".pat-tagger",
        $els: [],
        init: function($el, opts) {
            var that = this;
            $el.each(function(){
                var options = parser.parse($(this), opts);
                $(this).on('submit', function(evt){
                    evt.preventDefault();
                    var links = [];
                    $(options.source + '.checked').map(function(i, el){
                        var value = $(el).find('input').val(),
                            description = $(el).find(options.description).html(),
                            href = $(el).find('a').attr('href') || '#',
                            link = '<a href="' + href +'" data-value-id="' + value + '">'+ options.prepend + description + '</a>';
                        links.push(link);
                    });
                    $(options.target).html(options.listprepend + links.join(' '));
                })
                that.loadState(options);
            });
        },
        loadState: function(options){
            $(options.target + ' a').each(function(i, link){
                $(options.source + ":has(input[value='" + link.dataset.valueId +"'])")
                    .addClass('checked')
                    .removeClass('unchecked')
                    .find("input[type='checkbox']")
                    .prop("checked", true);
            });
        }
    };
    registry.register(picker);
    return picker;
}));
