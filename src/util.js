define([
    "skylark-net-http/Xhr"
],function (Xhr) {
    'use strict';
    function extend(obj = {}, defaults = {}) {
        var extended = {};
        Object.keys(obj).forEach(function (key) {
            extended[key] = obj[key];
        });
        Object.keys(defaults).forEach(function (key) {
            if (typeof extended[key] !== 'undefined') {
                extended[key] = obj[key];
            } else {
                extended[key] = defaults[key];
            }
        });
        return extended;
    }
    function fetch(url, callback) {
        /*
        var xhr = new window.XMLHttpRequest();
        xhr.open('GET', url);
        xhr.responseType = 'text';
        xhr.onload = function () {
            if (xhr.status === 200) {
                callback(null, xhr.responseText);
            } else {
                callback(url, xhr);
            }
        };
        xhr.onerror = function (err) {
            callback(err);
        };
        xhr.send();
        */
        Xhr.get(url).then(
            function(res) {
                callback(null,res);
            },
            function(e){
                callback(e);
            }
        )
    }
    function runCallback(index, params, arr, errors, callback) {
        return function (err, res) {
            if (err) {
                errors.push(err);
            }
            index++;
            if (index < arr.length) {
                seqRunner(index, res, arr, errors, callback);
            } else {
                callback(errors, res);
            }
        };
    }
    function seqRunner(index, params, arr, errors, callback) {
        arr[index](params, runCallback.apply(this, arguments));
    }
    function seq(arr, params, callback = function () {
    }) {
        var errors = [];
        if (!arr.length) {
            return callback(errors, params);
        }
        seqRunner(0, params, arr, errors, callback);
    }
    function debounce(fn, delay) {
        var cooldown = null;
        var multiple = null;
        return function () {
            if (cooldown) {
                multiple = true;
            } else {
                fn.apply(this, arguments);
            }
            clearTimeout(cooldown);
            cooldown = setTimeout(() => {
                if (multiple) {
                    fn.apply(this, arguments);
                }
                cooldown = null;
                multiple = null;
            }, delay);
        };
    }
    function log() {
        console.log(arguments);
    }
    function hasClass(node, className) {
        if (!node.className) {
            return false;
        }
        var tempClass = ' ' + node.className + ' ';
        className = ' ' + className + ' ';
        if (tempClass.indexOf(className) !== -1) {
            return true;
        }
        return false;
    }
    function addClass(node, className) {
        if (hasClass(node, className)) {
            return node.className;
        }
        if (node.className) {
            className = ' ' + className;
        }
        node.className += className;
        return node.className;
    }
    function removeClass(node, className) {
        var spaceBefore = ' ' + className;
        var spaceAfter = className + ' ';
        if (node.className.indexOf(spaceBefore) !== -1) {
            node.className = node.className.replace(spaceBefore, '');
        } else if (node.className.indexOf(spaceAfter) !== -1) {
            node.className = node.className.replace(spaceAfter, '');
        } else {
            node.className = node.className.replace(className, '');
        }
        return node.className;
    }
    function data(node, attr) {
        return node.getAttribute('data-' + attr);
    }
    var defaultModemap = {
        'html': 'html',
        'css': 'css',
        'js': 'javascript',
        'less': 'less',
        'styl': 'stylus',
        'coffee': 'coffeescript'
    };
    function getMode(type = '', file = '', customModemap = {}) {
        var modemap = extend(customModemap, defaultModemap);
        for (let key in modemap) {
            let keyLength = key.length;
            if (file.slice(-keyLength++) === '.' + key) {
                return modemap[key];
            }
        }
        for (let key in modemap) {
            if (type === key) {
                return modemap[key];
            }
        }
        return type;
    }
    return {
        extend,
        fetch,
        seq,
        debounce,
        log,
        getMode,
        data,
        hasClass,
        addClass,
        removeClass
    };
});