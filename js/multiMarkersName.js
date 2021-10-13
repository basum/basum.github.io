//Multi Markers WebAR-AR.js and Aframe - Playing the Archive - Connected Environment CASA-UCL

//Global Variable
var markersURLArray=[];
var markersNameArray=[];


AFRAME.registerComponent('markers_start',{
	init:function(){
		console.log('Add markers to the scene');

		var sceneEl = document.querySelector('a-scene');
	
		var url1= "resources/markers/pattern-1.patt";
		var url2= "resources/markers/pattern-2.patt";
		var url3= "resources/markers/pattern-3.patt";
		var url4= "resources/markers/pattern-4.patt";
		var url5= "resources/markers/pattern-5.patt";
		
		markersURLArray.push(url1);
		markersURLArray.push(url2);
		markersURLArray.push(url3);
		markersURLArray.push(url4);
		markersURLArray.push(url5);

		markersNameArray.push('pattern-1.patt');
		markersNameArray.push('pattern-2.patt');
		markersNameArray.push('pattern-3.patt');
		markersNameArray.push('pattern-4.patt');
		markersNameArray.push('pattern-5.patt');	



		var title1 = "Sitzpolster"
		var text1 = "Ein gepolsteter Sitz macht deine Wurmkiste zum Hocker in optimaler Sitzhöhe. Das ist toll, wenn überraschend Besuch kommt und du eine spontane Sitzgelegenheit brauchst. Aber auch im Home-Office arbeitet es sich bequem auf dem Wurmhocker."

		var title2 ="Einfache Ernte" 
		var text2 = "What’s in the Box? Im Inneren verarbeiten Kompostwürmer deine Bioabfälle geräusch- und geruchlos zu feinem Wurmhumus. Wie du diesen wertvollen Dünger aus der Erntekiste holst, zeigen wir hier: Die Ernte des Wurmkomposts"
		
		var title3 ="Natürlich: Holz" 
		var text3 = "Ein faszinierender Rohstoff, der nachwächst! Mit seiner Fähigkeit, zu „atmen“ gewährleistet Holz kontinuierlichen Luftaustausch, außerdem speichert es Feuchtigkeit. Bei sachgemäßer Nutzung begleitet dich die Wurmkiste viele Jahre."
		
		var title4 ="Wurmteetasse" 
		var text4 = "Hinter dieser Blende verbirgt sich die Wurmteetasse. Hier entnimmst du den Wurmtee – einen nährstoffreichen Flüssigdünger, mit dem du deine Pflanzen gießen kannst."

		var title5 ="Rollen" 
		var text5 = "Dein Wurmhocker kommt auf parkett-tauglichen Möbelrollen. So bringst du die Wurmkiste easy von der Küche – wo der Biomüll meist anfällt – zum Esstisch, wenn ein zusätzlicher Sitzplatz gebraucht wird." 



		




		// First Marker 

		var markerEl1 = document.createElement('a-marker');
		markerEl1.setAttribute('type','pattern');
		markerEl1.setAttribute('url',url1);

		markerEl1.setAttribute('registerevents','');
			sceneEl.appendChild(markerEl1);

			//Image
			var image1 =document.createElement('a-image');
			image1.setAttribute('src','#image1');
			image1.setAttribute('width', '3');
			image1.setAttribute('height', '2');
			image1.object3D.position.set(0, 0, -3);
			image1.object3D.rotation.set(-1.57, 0, 0);
			markerEl1.appendChild(image1);;

			// Title
			var titleEl1= document.createElement('a-entity');
			titleEl1.setAttribute('id', 'text');
			titleEl1.setAttribute('text',{color: 'white', align: 'center', value:title1, width: '6.0', wrapCount: '30.000'});
			titleEl1.object3D.position.set(0, 0, -1.7);
			titleEl1.object3D.rotation.set(-1.57, 0, 0);
			markerEl1.appendChild(titleEl1);
			

			//Text1
			var textEl1 = document.createElement('a-entity');
			textEl1.setAttribute('id','text');
			textEl1.setAttribute('text',{color: 'white', align: 'center', value:text1, width: '3.0', wrapCount: '30.000'});
			textEl1.object3D.position.set(0, 0.2, 0);
			textEl1.object3D.rotation.set(-1.57, 0, 0);
			markerEl1.appendChild(textEl1);

			// PLANE Removed
			// var plane1 =document.createElement('a-plane');
			// plane1.setAttribute('geometry',{primitive: 'plane',width:3.5,height:2 });
			// plane1.object3D.position.set(0, 0, -0.2);
			// plane1.object3D.rotation.set(-1.57, 0, 0);
			// markerEl1.appendChild(plane1);


			// Radius Corner
			var slice9 =document.createElement('a-entity');
			slice9.setAttribute('slice9', {foo: 'bar', color: 'white', width: 3.3, height: 2, left: 20, right: 43, top: 20, bottom: 43, src: '#tooltip'});
			slice9.object3D.position.set(0, 0, -0.2);
			slice9.object3D.rotation.set(-1.57, 0, 0);
			markerEl1.appendChild(slice9);

		var markerEl2 = document.createElement('a-marker');
		markerEl2.setAttribute('type','pattern');
		markerEl2.setAttribute('url',url2);
		
		markerEl2.setAttribute('registerevents','');
			sceneEl.appendChild(markerEl2);
			
			//Image

			// var video2 =document.createElement('a-video');
			// video2.setAttribute('src', '#wurmvideo');
		
			// video2.setAttribute('width', '3');
			// video2.setAttribute('height', '2');
			// video2.object3D.position.set(0, 0, -2.9);
			// video2.object3D.rotation.set(-1.57, 0, 0);
			//markerEl2.appendChild(video2);


			var plane2 =document.createElement('a-entity');
			plane2.setAttribute('id','worms');
			plane2.setAttribute('play-on-click',true);
			plane2.setAttribute('visible',true);
			plane2.setAttribute('geometry',{primitive: 'plane', width:3.5, height:2 });
			plane2.setAttribute('material',{shader: 'flat', src: '#wurmvideo'});
			plane2.object3D.position.set(0, 0, -2.9);
			plane2.object3D.rotation.set(-1.57, 0, 0);
			markerEl2.appendChild(plane2);

			// var image2 =document.createElement('a-image');
			// image2.setAttribute('src','#logo2');
			// image2.setAttribute('width', '2');
			// image2.setAttribute('height', '2');
			// image2.object3D.position.set(0, 0, -2.9);
			// image2.object3D.rotation.set(-1.57, 0, 0);
			// markerEl2.appendChild(image2);


			//Text
			var textEl2 = document.createElement('a-entity');
			textEl2.setAttribute('id','text');
			textEl2.setAttribute('text',{color: 'white', align: 'center', value:text2, width: '3.0', wrapCount: '30.000'});
			textEl2.object3D.position.set(0, 0, 0);
			textEl2.object3D.rotation.set(-1.57, 0, 0);
			markerEl2.appendChild(textEl2);

			var titleEl2= document.createElement('a-entity');
			titleEl2.setAttribute('id', 'text');
			titleEl2.setAttribute('text',{color: 'white', align: 'center', value:title2, width: '6.0', wrapCount: '30.000'});
			titleEl2.object3D.position.set(0, 0, -1);
			titleEl2.object3D.rotation.set(-1.57, 0, 0);
			markerEl2.appendChild(titleEl2);

			// Radius Corner
			var slice10 =document.createElement('a-entity');
			slice10.setAttribute('slice9', {foo: 'bar', color: 'white', width: 3.6, height: 2.4, left: 20, right: 43, top: 20, bottom: 43, src: '#tooltip'});
			slice10.object3D.position.set(0, -0.8, 0);
			slice10.object3D.rotation.set(-1.57, 0, 0);
			markerEl2.appendChild(slice10);

			// var plane2 =document.createElement('a-plane');
			// plane2.setAttribute('geometry',{primitive: 'plane',width:3.5,height:2 });
			// plane2.object3D.position.set(0, 0, -0.2);
			// textEl2.appendChild(plane2);


		var markerEl3 = document.createElement('a-marker');
		markerEl3.setAttribute('type','pattern');
		markerEl3.setAttribute('url',url3);

		markerEl3.setAttribute('registerevents','');
			sceneEl.appendChild(markerEl3);

			// Image
			var image3 =document.createElement('a-image');
			image3.setAttribute('src','#image3');
			image3.setAttribute('width', '3');
			image3.setAttribute('height', '2');
			image3.object3D.position.set(0, 0, -3.2);
			image3.object3D.rotation.set(-1.57, 0, 0);
			markerEl3.appendChild(image3);;
			
			// Text
			var textEl3 = document.createElement('a-entity');
			textEl3.setAttribute('id','text');
			textEl3.setAttribute('text',{color: 'white', align: 'center', value:text3, width: '3.0', wrapCount: '30.000'});
			textEl3.object3D.position.set(0, 0, 0);
			textEl3.object3D.rotation.set(-1.57, 0, 0);
			markerEl3.appendChild(textEl3);

			// Title
			var titleEl3= document.createElement('a-entity');
			titleEl3.setAttribute('id', 'text');
			titleEl3.setAttribute('text',{color: 'white', align: 'center', value:title3, width: '6.0', wrapCount: '30.000'});
			titleEl3.object3D.position.set(0, 0, -1.5);
			titleEl3.object3D.rotation.set(-1.57, 0, 0);
			markerEl3.appendChild(titleEl3);

			// Radius Corner
			var slice11 =document.createElement('a-entity');
			slice11.setAttribute('slice9', {foo: 'bar', color: 'white', width: 3.6, height: 2.4, left: 20, right: 43, top: 20, bottom: 43, src: '#tooltip'});
			slice11.object3D.position.set(0, -0.3, 0);
			slice11.object3D.rotation.set(-1.57, 0, 0);
			markerEl3.appendChild(slice11);
		
			// var plane3 =document.createElement('a-plane');
			// plane3.setAttribute('geometry',{primitive: 'plane',width:3.5,height:2 });
			// plane3.object3D.position.set(0, 0, -0.2);
			// textEl3.appendChild(plane3);




			// Marker 4
			var markerEl4 = document.createElement('a-marker');
		markerEl4.setAttribute('type','pattern');
		markerEl4.setAttribute('url',url4);

		markerEl4.setAttribute('registerevents','');
			sceneEl.appendChild(markerEl4);

			// Image
			var image4 =document.createElement('a-image');
			image4.setAttribute('src','#image4');
			image4.setAttribute('width', '3');
			image4.setAttribute('height', '2');
			image4.object3D.position.set(0, 0, -3.5);
			image4.object3D.rotation.set(-1.57, 0, 0);
			markerEl4.appendChild(image4);;
			
			// Text
			var textEl4 = document.createElement('a-entity');
			textEl4.setAttribute('id','text');
			textEl4.setAttribute('text',{color: 'white', align: 'center', value:text4, width: '3.0', wrapCount: '30.000'});
			textEl4.object3D.position.set(0, 0.5, -0.2);
			textEl4.object3D.rotation.set(-1.57, 0, 0);
			markerEl4.appendChild(textEl4);

			// Title
			var titleEl4= document.createElement('a-entity');
			titleEl4.setAttribute('id', 'text');
			titleEl4.setAttribute('text',{color: 'white', align: 'center', value:title4, width: '6.0', wrapCount: '30.000'});
			titleEl4.object3D.position.set(0, 0, -1.8);
			titleEl4.object3D.rotation.set(-1.57, 0, 0);
			markerEl4.appendChild(titleEl4);

			
			var slice12 =document.createElement('a-entity');
			slice12.setAttribute('slice9', {foo: 'bar', color: 'white', width: 3.5, height: 1.8, left: 20, right: 43, top: 20, bottom: 43, src: '#tooltip'});
			slice12.object3D.position.set(0, 0, 0);
			slice12.object3D.rotation.set(-1.57, 0, 0);
			markerEl4.appendChild(slice12);
		
			// var plane4 =document.createElement('a-plane');
			// plane4.setAttribute('geometry',{primitive: 'plane',width:3.5,height:2 });
			// plane4.object3D.position.set(0, 0, -0.2);
			// textEl4.appendChild(plane4);


			// Marker 5
			var markerEl5 = document.createElement('a-marker');
		markerEl5.setAttribute('type','pattern');
		markerEl5.setAttribute('url',url5);

		markerEl5.setAttribute('registerevents','');
			sceneEl.appendChild(markerEl5);

			// Image
			var image5 =document.createElement('a-image');
			image5.setAttribute('src','#image5');
			image5.setAttribute('width', '3');
			image5.setAttribute('height', '2');
			image5.object3D.position.set(0, 0, -4);
			image5.object3D.rotation.set(-1.57, 0, 0);
			markerEl5.appendChild(image5);;
			
			// Text
			var textEl5 = document.createElement('a-entity');
			textEl5.setAttribute('id','text');
			textEl5.setAttribute('text',{color: 'white', align: 'center', value:text5, width: '3.0', wrapCount: '30.000'});
			textEl5.object3D.position.set(0, 0, -0.5);
			textEl5.object3D.rotation.set(-1.57, 0, 0);
			markerEl5.appendChild(textEl5);

			// Title
			var titleEl5= document.createElement('a-entity');
			titleEl5.setAttribute('id', 'text');
			titleEl5.setAttribute('text',{color: 'white', align: 'center', value:title5, width: '6.0', wrapCount: '30.000'});
			titleEl5.object3D.position.set(0, 0, -2);
			titleEl5.object3D.rotation.set(-1.57, 0, 0);
			markerEl5.appendChild(titleEl5);

			
			var slice13 =document.createElement('a-entity');
			slice13.setAttribute('slice9', {foo: 'bar', color: 'white', width: 3.6, height: 2.4, left: 20, right: 43, top: 20, bottom: 43, src: '#tooltip'});
			slice13.object3D.position.set(0, -0.8, 0);
			slice13.object3D.rotation.set(-1.57, 0, 0);
			markerEl5.appendChild(slice13);
		
			// var plane5 =document.createElement('a-plane');
			// plane5.setAttribute('geometry',{primitive: 'plane',width:3.5,height:2 });
			// plane5.object3D.position.set(0, 0, -0.2);
			// textEl5.appendChild(plane5);

	}
});


//Detect marker found and lost
AFRAME.registerComponent('registerevents', {
		init: function () {
			const marker = this.el;

			marker.addEventListener("markerFound", ()=> {
				var markerId = marker.id;
				console.log('Marker Found: ', markerId);
			});

			marker.addEventListener("markerLost",() =>{
				var markerId = marker.id;
				console.log('Marker Lost: ', markerId);
			});
		},
	});
