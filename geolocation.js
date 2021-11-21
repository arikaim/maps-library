'use strict';

function Geolocation() {

    this.isSupported = function() {
        if (isObject(navigator.geolocation) == false) {
            return false;
        }

        return true;
    } 

    this.getCurrentPosition = function(onSuccess, onError) {
        if (this.isSupported() == false) {
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
}

Geolocation.isSupported = function() {
    var geoLocation = new Geolocation();
    return geoLocation.isSupported();     
};

Geolocation.getCurrentPosition = function(onSuccess, onError) {
    var geoLocation = new Geolocation();
    geoLocation.getCurrentPosition(onSuccess,onError);     
};