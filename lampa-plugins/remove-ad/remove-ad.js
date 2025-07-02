(function () {
    "use strict";

    var manifest = {
        type: "other",
        version: "0.0.5",
        author: "@artsmv",
        name: "Удаление заставки",
        desc: "Плагин для удаление заставки перед показом",
        url: "https://artsmv1.github.io/lampa-plugins/remove-ad/remove-ad.js"
    };


    var updateplugins = false;
    var plugins = Lampa.Storage.get('plugins', '[]')
    plugins.forEach(function (plug) {
        if (plug.url.indexOf('artsmv1.github.io') >= 0) {
            updateplugins = true;
            plug.author = manifest.author;
            plug.desc = manifest.desc;
            plug.description = manifest.desc;
            plug.name = manifest.name;
            plug.version = manifest.version;
        }
    })
    if (updateplugins)
        Lampa.Storage.set('plugins', plugins);


    function startPlugin() {
        //console.log('RAd: startPlugin(): 1');
        if (window.lampa_plugin_remove_ad) return;
        //console.log('RAd: startPlugin(): 2');

        window.lampa_plugin_remove_ad = true;
        //Lampa.Manifest.plugins = manifest;

        // not used currently
        // Lampa.Timeline.listener.follow('view', function (e) {
        //   console.log('Stats', 'view', e);
        // });

        // Lampa.Player.listener.follow('start', function (e) {
        //   console.log('Stats', 'player start', e);
        // });

        // Lampa.Player.listener.follow('destroy', function (e) {
        //   console.log('Stats', 'player destroy', e);
        // });

        Lampa.Storage.listener.follow("change", function (e) {
            //console.log('RAd: Storage 1 event =', e);
            if ((e.name == "vast_plugin_launch") && (e.value == 0)) {
                //console.log('RAd: Storage 2 event =', e);
                Lampa.Storage.set("vast_plugin_launch", 1);
            }
        });

        // *** MOVIES WATCHED ***

        // monitor movies watched
        // 1 - store movie data when movie card is shown
        Lampa.Listener.follow("full", function (e) {
            //if (e.type == "complite") {
            //    console.log("Stats", "full complite", e);
            //}
        });

    }



    // *** MENU ***
    /*
    console.log('Stats', 'Starting to create menu elements...');
    
    Lampa.SettingsApi.addComponent({
        component: "stats",
        icon: pluginSVG,
        name: "Статистика",
    });
    */
    // TEMP - doesn't work
    // setTimeout(() => {
    //   var parentContainer = document.querySelector('.settings__body .scroll__body > div');
    //   var statsElement = document.querySelector('.settings__body .settings-folder[data-component="stats"]');
    //   parentContainer.insertBefore(statsElement, parentContainer.firstChild);
    // }, 2000);





    startPlugin();
    /*
    if (window.appready) {
        try {
            console.log('RAd: Starting the plugin... 1a');
            startPlugin();
        } catch (err) {
            console.log('RAd: Something went wrong', err);
        }
    } else {
        Lampa.Listener.follow("app", function (e) {
            console.log('RAd: Starting the plugin... 2a');
            if (e.type == "ready") {
                console.log('RAd: Starting the plugin... 2b');
                startPlugin();
            }
        });
    }
    */
})();