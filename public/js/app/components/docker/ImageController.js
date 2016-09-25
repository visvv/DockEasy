ImageController = function (scope, imageService) {
    this.scope = scope;
    this.imageService = imageService;
    this.scope.imageController = this;

    this.scope.images = [];

};

ImageController.prototype.getImages = function(){
    var self = this;
    //this.scope.testData = "Hi this my test data";
    this.imageService.getImages(function(data){
        console.log(data);
        self.scope.images = data;
    });
}