'use strict';

function getCurrentPosition(onSuccess, onError) {
    if (!navigator.geolocation) {
        return false;
    }      
    
    navigator.geolocation.getCurrentPosition(function(position) {
        var position = { 
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };
        callFunction(onSuccess,position);
    },function() {
        callFunction(onError);
    });   
}
