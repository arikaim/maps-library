'use strict';

function Geolocation() {

    this.isSupported = function() {
        return (typeof navigator.geolocation !== 'object') ? false : true;
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
        },function(error) {
            callFunction(onError,error);
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