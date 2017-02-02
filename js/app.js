(function() {
    'use strict';

    var app = {
        data: {}
    };
    app.data = localStorage.data;
    if (app.data) {
        console.log(app.data);
    } else {
        localStorage.data = JSON.stringify({
            'no': Date.now()
        });
    }

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('./service-worker.js')
            .then(function() {
                console.log('Service Worker Registered');
            });
    }
})();
