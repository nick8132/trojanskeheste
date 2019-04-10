
<body class="body "onload="onload()">

	<div class="header">
		BigOrLessCalc
	</div>

    <div class="row">
         <div class="column side">
            
         </div>

   		<div class="column middle">
   			<p>Indtast tal: 
   				<br><br>
   			<input class="textbox" id="maks" type="text" required></p>
   				<br>
   			<p>Indtast andet tal, tjek om det er større eller mindre: 
   				<br><br>
   			<input class="textbox" id="bigorless" type="text" required></p> 
   				<br>
   			<button id="myBtn" onclick="calcbigorless();"><span>Beregn</span></button> 
   				<br>
   			<br><div id="result"></div>
   		</div>

         <div class="column side">
            
         </div>
   	</div>