ImageController = function (scope, imageService) {
    this.scope = scope;
    this.imageService = imageService;
    this.scope.imageController = this;
    this.scope.testData = "Hi this my test data";

};

ImageController.prototype.getImages = function(){
    this.imageService.getImages(function(data){
        console.log(data);
    });
}