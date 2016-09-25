ImageService = function (http) {
    return {
        getData: function () {
            return "This is the data";
        },
        getImages: function (successCallback) {
            http.get('docker/images/json?all=0').then(function (response) {
                if (response) {
                    successCallback(response.data);
                }
            }, function () {
                console.error('Error details');
            });
            console.log('Loading content...');
        }
    }

    // https://docs.docker.com/engine/reference/api/docker_remote_api_v1.24/

}