define([
    'skylark-langx/langx',
    "../../_addon",
    '../../util',
    "../../code_ground"
], function (langx,Addon,util,CodeGround) {
    'use strict';
    class AddonLess extends Addon{
        //constructor(coder, options) 

        _init() {
            super._init();
            var coder = this.coder,
                options = this.options;

            var priority = 20;

            if (typeof window.less === 'undefined') {
                return;
            }
            coder.$container.querySelector('a[data-codeg-type="css"]').innerHTML = 'Less';
            coder.on('change', this.change.bind(this), priority);
        }

        isLess(params) {
            if (params.type !== 'css') {
                return false;
            }
            return params.file.indexOf('.less') !== -1 || params.file === '';
        }
        change(e) {
            var params = e.data;
            if (this.isLess(params)) {
                window.less.render(params.content, this.options, (err, res) => {
                    if (err) {
                        return callback(err, params);
                    } else {
                        params.content = res.css;
                    }
                    //callback(null, params);
                });
            } else {
                //callback(null, params);
            }
        }

        static get categoryName() {
            return "css";
        }

        static get addonName(){
            return "less";
        }
    };

    AddonLess.register(CodeGround);

    return AddonLess;
});