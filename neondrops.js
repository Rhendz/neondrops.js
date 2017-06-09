/* --------------------------
/* Author : Ankush Patel
/* Github : github.com/rhendz
/* ------------------------*/

$(document).ready(function() {

	// Number of neon lights
    var neonNum = neondrops.number.value;

    for (i = 0; i < neonNum; i++) {
        generateNeonLight();
    }

	function generateNeonLight() {
		// Create neonLight obj
        var neonLight = $("<div></div>");

        // Set color
        if (neondrops.color.random) {
            var color = Math.floor(Math.random() * 6);
            neonLight.addClass(neondrops.color.value[color]);
        } else { neonLight.addClass(neondrops.color.value[0]); }


        // Set size
        if (neondrops.size.random) {
            // Random width, height for neonLight 1px to 5px
            var size = (Math.random() * 11 + 1) + "px";
            neonLight.css({ "width": size, "height": size });
        } else { neonLight.css({ "width": neondrops.size.width, "height": neondrops.size.height }); }

        // Set x,y random position for neonLight
        var x = Math.floor(Math.random() * $("#neondrops-js").width());
        var y = Math.floor(Math.random() * $("#neondrops-js").height());
        neonLight.css({ "left": x, "top": y });

        // Set animation speed
        if (neondrops.animation.duration.random) {
            // Random animation duration time
            var t = Math.floor(Math.random() * 2 + 1) + 0.5/(Math.random() * 8 + 1) + "s";
            neonLight.css({ "animation-duration": t });
        } else { neonLight.css({ "animation-duration": neondrops.duration.value }); }

        // Generate a new neonLight once the animation is over
        neonLight.bind('animationend', function(e) {this.remove(); generateNeonLight();});
        $("#neondrops-js").append(neonLight);
	}
});
