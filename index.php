<?php include 'header.php'?>

<div class="sliders">
	<div class="calm sliderBox">
		<div class="left label">Agitated</div>
  		<input type="range" min="1" max="101" value="51" step="50" class="slider" onchange="update()" id="calm">
  		<div class="right label">Calm</div>
  	</div>
  	<div class="happy sliderBox">
		<div class="left label">Happy</div>
  		<input type="range" min="1" max="101" value="51" step="50" class="slider" onchange="update()" id="happy">
  		<div class="right label">Sad</div>
  	</div>
  	<div class="tired sliderBox">
		<div class="left label">Tired</div>
  		<input type="range" min="1" max="101" value="51" step="50" class="slider" onchange="update()" id="tired">
  		<div class="right label">Wide Awake</div>
  	</div>
  	<div class="scared sliderBox">
		<div class="left label">Scared</div>
  		<input type="range" min="1" max="101" value="51" step="50" class="slider" onchange="update()" id="scared">
  		<div class="right label">Fearless</div>
  	</div>
</div>


<div class="content">
	<div class="programme one">
		<div id="programme-slot1" class="programme-image image-one">
		</div>
		<p class="programme-title" id="title1">
			No Content
		</p>
	</div>
	<div class="programme two">
		<div id="programme-slot2" class="programme-image image-two">
		</div>
		<p class="programme-title" id= "title2">
			No Content
		</p>
	</div>
	<div class="programme three">
		<div id="programme-slot3" class="programme-image image-three">
		</div>
		<p class="programme-title" id = "title3">
			No Content
		</p>
	</div>
	<div class="programme four">
		<div id="programme-slot4" class="programme-image image-four">
		</div>
		<p class="programme-title" id = "title4">
			No Content
		</p>
	</div>
	<div class="programme five">
		<div id="programme-slot5" class="programme-image image-five">
		</div>
		<p class="programme-title" id = "title5">
			No Content
		</p>
	</div>
</div>

</body>