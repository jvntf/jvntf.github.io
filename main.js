var width = window.screen.width;

$(document).ready( function() {
		var elem = document.getElementById('draw-area');
		var two = new Two({ fullscreen: true }).appendTo(elem);


		var circle = two.makeCircle(- width/6, 0, 50);
		var rect = two.makeRectangle(70, 0, 100, 100);
		circle.fill = '#FF8000';
		circle.stroke = 'orangered';
		rect.fill = 'rgba(0, 200, 255, 0.75)';
		rect.stroke = '#1C75BC';

		// Groups can take an array of shapes and/or groups.
		var group = two.makeGroup(circle, rect);

		// And have translation, rotation, scale like all shapes.
		group.translation.set(width / 2, two.height / 2);
		group.rotation = Math.PI;
		group.scale = 0.75;

    two.bind('update', function(frameCount) {

      if (group.scale > 0.9999) {
          group.scale = group.rotation = 0;
        }
        var t = (1 - group.scale) * 0.125;
        group.scale += t;
        group.rotation += t * 4 * Math.PI;
        group.translation.set(width/2, two.height/2);
      }).play();

});

window.addEventListener('resize', function() {
  width = window.innerWidth;
  console.log(width);
})
