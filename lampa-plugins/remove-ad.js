/*
 *
 * Убирает заставку перед показом
 *
 */
(function () {
    "use strict";

    var manifest = {
        type: "other",
        version: "0.0.1",
        author: "@artsmv1",
        name: "Убирает заставку перед показом",
        url: "https://artsmv1.github.io/lampa-plugins/remove-ad/remove-ad.js"
    };


    function startPlugin() {
        //console.log('RAd: startPlugin(): 1');
        window.plugin_____remove_ad = true;

        //Lampa.Manifest.plugins = manifest;
        var updateplugins = false;
        var plugins = Lampa.Storage.get('plugins', '[]')
        plugins.forEach(function (plug) {
            if (plug.url.indexOf('artsmv1.github.io') >= 0) {
                updateplugins = true;
                plug.author = manifest.author;
                plug.name = manifest.name;
                plug.version = manifest.version;
            }
        })
        if (updateplugins)
            Lampa.Storage.set('plugins', plugins);

        Lampa.Storage.listener.follow("change", function (e) {
            //console.log('RAd: Storage 1 event =', e);
            if ((e.name == "vast_plugin_launch") && (e.value == 0)) {
                //console.log('RAd: Storage 2 event =', e);
                Lampa.Storage.set("vast_plugin_launch", 1);
            }
        });
    } /* startPlugin() */


    if (!window.plugin_____remove_ad) startPlugin();
})();