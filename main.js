var canvas = new fabric.Canvas('myCanvas');
var block_image_width=30;
var block_image_height=30;
var player_x = 10;
var player_y = 10;
var player_object ="";
var block_image="";

function player_update() {
    fabric.Image.fromURL("player.png",function(Img) {
    player_object=Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
        top:player_y,
        left:player_x
    }
    );
    function new_image(get_image) {
        fabric.Image.fromURL(get_image,function(Img) {
            blog_image_object=Img;
            blog_image_object.scaleToWidth(blog_image_width);
            blog_image_object.scaleToHeight(blog_image_height);
            blog_image_object.set({
                top:player_x,
                left:player_y
            }
            );
            canvas.add(blog_image_object);
        });
    }