define([
    'skylark-langx/langx',
    "../../_addon",
    '../../util',
    "../../code_ground"
], function (langx,Addon,util,CodeGround) {
    'use strict';
    
    class AddonMarkdown  extends Addon{
        //constructor(coder, options) 

        _init() {
            super._init();

            var coder = this.coder,
                options = this.options;

            var priority = 20;
            if (typeof window.marked === 'undefined') {
                return;
            }
            window.marked.setOptions(options);
            coder.$container.querySelector('a[data-codeg-type="html"]').innerHTML = 'Markdown';
            coder.on('change', this.change.bind(this), priority);
        }
        change(e) {
            var params = e.data;
            if (params.type === 'html') {
                try {
                    params.content = window.marked(params.content);
                } catch (err) {
                    return callback(err, params);
                }
                //callback(null, params);
            } else {
                //callback(null, params);
            }
        }

        static get categoryName() {
            return "html";
        }

        static get addonName(){
            return "markdown";
        }

    };

    AddonMarkdown.register(CodeGround);

    return AddonMarkdown;
});