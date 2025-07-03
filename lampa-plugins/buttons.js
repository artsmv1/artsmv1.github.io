/*
 *
 * Добавляет кнопки:
 *
 */
(function () {
    "use strict";

    function startPlugin() {
        window.plugin_____buttons = true;

        /* Кнопка Перезагрузки и Консоли*/
        Lampa.SettingsApi.addParam({
            component: 'LP_____Menu_Component',
            param: {
                name: 'LP_____Buttons',
                type: 'trigger', //доступно select,input,trigger,title,static
                default: false
            },
            field: {
                name: 'Добавить кнопку перезагрузки', //Название подпункта меню
                description: 'Иконка рядом с часами' //Комментарий к подпункту
            },
            onChange: function (value) {
                //Действия при изменении подпункта
                if (Lampa.Storage.field('LP_____Buttons') == false) {
                    $('#LP_____ReloadBtn').addClass('hide');
                }
                if (Lampa.Storage.field('LP_____Buttons') == true) {
                    $('#LP_____ReloadBtn').removeClass('hide');
                }
                if (Lampa.Storage.field('LP_____Buttons') == false) {
                    $('#LP_____ConsoleBtn').addClass('hide');
                }
                if (Lampa.Storage.field('LP_____Buttons') == true) {
                    $('#LP_____ConsoleBtn').removeClass('hide');
                }
                if (Lampa.Storage.field('LP_____Buttons') == false) {
                    $('#LP_____ExitButton').addClass('hide');
                }
                if (Lampa.Storage.field('LP_____Buttons') == true) {
                    $('#LP_____ExitButton').removeClass('hide');
                }
                //Lampa.Settings.update();
            }
        });

        /* Кнопка Перезагрузки */
        var reloadBtn = '<div id="LP_____ReloadBtn" class="head__action selector reload-screen hide"><svg fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" stroke-width="0.4800000000000001"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M4,12a1,1,0,0,1-2,0A9.983,9.983,0,0,1,18.242,4.206V2.758a1,1,0,1,1,2,0v4a1,1,0,0,1-1,1h-4a1,1,0,0,1,0-2h1.743A7.986,7.986,0,0,0,4,12Zm17-1a1,1,0,0,0-1,1A7.986,7.986,0,0,1,7.015,18.242H8.757a1,1,0,1,0,0-2h-4a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V19.794A9.984,9.984,0,0,0,22,12,1,1,0,0,0,21,11Z" fill="currentColor"></path></g></svg></div>';
        $('#app > div.head > div > div.head__actions').append(reloadBtn);

        $('#LP_____ReloadBtn').on('hover:enter hover:click hover:touch', function () {
            location.reload();
        });
        if (Lampa.Storage.field('LP_____Buttons') == false) {
            $('#LP_____ReloadBtn').addClass('hide');
        }
        if (Lampa.Storage.field('LP_____Buttons') == true) {
            $('#LP_____ReloadBtn').removeClass('hide');
        }

        /* Кнопка Консоли */
        var consoleBtn = '<div id="LP_____ConsoleBtn" class="head__action selector console-screen hide"><svg width="64px" height="64px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff" stroke-width="20.48"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M877.685565 727.913127l-0.584863-0.365539a32.898541 32.898541 0 0 1-8.041866-46.423497 411.816631 411.816631 0 1 0-141.829267 145.777092c14.621574-8.992268 33.62962-5.117551 43.645398 8.772944l0.146216 0.073108a30.412874 30.412874 0 0 1-7.968758 43.206751l-6.141061 4.020933a475.201154 475.201154 0 1 1 163.615412-164.419599 29.974227 29.974227 0 0 1-42.841211 9.357807z m-537.342843-398.584106c7.164571-7.091463 24.71046-9.650239 33.26408 0 10.600641 11.185504 7.164571 29.462472 0 37.138798l-110.612207 107.468569L370.901811 576.14119c7.164571 7.091463 8.114974 27.342343 0 35.384209-9.796455 9.723347-29.828011 8.188081-36.480827 1.535265L208.309909 487.388236a18.423183 18.423183 0 0 1 0-25.953294l132.032813-132.032813z m343.314556 0l132.032813 132.032813a18.423183 18.423183 0 0 1 0 25.953294L689.652124 613.133772c-6.652816 6.579708-25.587754 10.746857-36.553935 0-10.30821-10.235102-7.091463-31.290168 0-38.381632l108.345863-100.669537-111.855041-108.638294c-7.164571-7.676326-9.504023-26.611265 0-36.04218 9.284699-9.138484 26.903696-7.091463 34.068267 0z m-135.54199-26.318833c3.582286-9.504023 21.347498-15.498868 32.679217-11.258612 10.819965 4.020933 17.180349 19.008046 14.256035 28.512069l-119.896906 329.716493c-3.509178 9.504023-20.616419 13.305632-30.193551 9.723347-10.161994-3.509178-21.201282-17.545889-17.545888-26.976804l120.627985-329.716493z" fill="currentColor"></path></g></svg></div>';
        $('#app > div.head > div > div.head__actions').append(consoleBtn);

        $('#LP_____ConsoleBtn').on('hover:enter hover:click hover:touch', function () {
            Lampa.Controller.toggle('console');
        });
        if (Lampa.Storage.field('LP_____Buttons') == false) {
            $('#LP_____ConsoleBtn').addClass('hide');
        }
        if (Lampa.Storage.field('LP_____Buttons') == true) {
            $('#LP_____ConsoleBtn').removeClass('hide');
        }
        /* Кнопка Выхода в верхнем баре */
        //var exitBtn = '<div id="LP_____ExitBtn" class="head__action selector exit-screen hide"><svg fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" stroke-width="0.4800000000000001"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M4,12a1,1,0,0,1-2,0A9.983,9.983,0,0,1,18.242,4.206V2.758a1,1,0,1,1,2,0v4a1,1,0,0,1-1,1h-4a1,1,0,0,1,0-2h1.743A7.986,7.986,0,0,0,4,12Zm17-1a1,1,0,0,0-1,1A7.986,7.986,0,0,1,7.015,18.242H8.757a1,1,0,1,0,0-2h-4a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V19.794A9.984,9.984,0,0,0,22,12,1,1,0,0,0,21,11Z" fill="currentColor"></path></g></svg></div>';
        var exitBtn = '<div id="LP_____ExitBtn" class="head__action selector exit-screen hide"><svg fill="#ffffff" width="256px" height="256px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12,23A11,11,0,1,0,1,12,11.013,11.013,0,0,0,12,23ZM12,3a9,9,0,1,1-9,9A9.01,9.01,0,0,1,12,3ZM8.293,14.293,10.586,12,8.293,9.707A1,1,0,0,1,9.707,8.293L12,10.586l2.293-2.293a1,1,0,0,1,1.414,1.414L13.414,12l2.293,2.293a1,1,0,1,1-1.414,1.414L12,13.414,9.707,15.707a1,1,0,0,1-1.414-1.414Z" fill="currentColor"></path></g></svg></div>';
        $('#app > div.head > div > div.head__actions').append(exitBtn);

        $('#LP_____ExitBtn').on('hover:enter hover:click hover:touch', function () {
            Lampa.Activity.out();
            if (Lampa.Platform.is('tizen')) tizen.application.getCurrentApplication().exit();
            if (Lampa.Platform.is('webos')) window.close();
            if (Lampa.Platform.is('android')) Lampa.Android.exit();
            if (Lampa.Platform.is('orsay')) Lampa.Orsay.exit();
        });
        if (Lampa.Storage.field('LP_____Buttons') == false) {
            $('#LP_____ExitBtn').addClass('hide');
        }
        if (Lampa.Storage.field('LP_____Buttons') == true) {
            $('#LP_____ExitBtn').removeClass('hide');
        }

        /* End Кнопка Перезагрузки и Консоли*/

    } /* startPlugin() */


    if (!window.plugin_____buttons) startPlugin();
})();