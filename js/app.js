(function() {
    'use strict';

    var app = {
        isLoading: true,
        visibleCards: {},
        selectedCities: [],
    };

    app.selectedCities = localStorage.selectedCities;
    if (app.selectedCities) {
        app.selectedCities = JSON.parse(app.selectedCities);
        app.selectedCities.forEach(function(city) {
            app.getForecast(city.key, city.label);
        });
    } else {
        app.updateForecastCard(initialWeatherForecast);
        app.selectedCities = [{
            key: initialWeatherForecast.key,
            label: initialWeatherForecast.label
        }];
        app.saveSelectedCities();
    }

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('./service-worker.js')
            .then(function() {
                console.log('Service Worker Registered');
            });
    }
})();
