ImageService = function (http) {
    return {
        getData: function () {
            return "This is the data";
        },

        getImages: function (successCallback) {
            http.get('http://localhost:2375/images/json').then(function (response) {
                if (response) {
                    successCallback(response.data);
                }
            }, function () {
                console.error('Error details');
            });
            console.log('Loading content...');
        }
    }
}