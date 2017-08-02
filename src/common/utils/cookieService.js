var app = angular.module('wakeMeUp.services');

app.controller('cookieService', function($cookies) {
    var CookieService = function() {};
    var now = new Date(),
        exp = new Date(now.getFullYear()+1, now.getMonth(), now.getDate());
    $cookies.put('url',url,{
         expires: exp
    });

var cookie = $cookies.get('someToken');
console.log(cookie); // logs 'blabla'

    CookieService.set = function set(alarm, url){
        // Setting a cookie
        $cookies.alarm = alarm;
        $cookies.url = url;
    };

    CookieService.get = function get(){
        // Getting a cookie
        if(isCookieDefinied()){
            return {
                alarm : $cookies.alarm,
                url :$cookies.url
            };
        }
        else {
            return null;
        }
    };

    /**
     * return is a cookie is well set
     * @returns {boolean}
     */
    function isCookieDefinied(){
        return !_.isUndefined($cookies.alarm) && !_.isUndefined($cookies.url);
    }

    return CookieService;
});
