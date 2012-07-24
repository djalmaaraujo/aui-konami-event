# AUI - Konami Code Event
================

An Alloy UI synthetic event for Konami Code Implementation

## Configuration with no yui3-gallery CDN
You can configure as an "lazy-load" module, using YUI Loader, preventing sync bad loading files.

	AUI({
		modules: { 
			'aui-event-konami': {
				fullpath: '../../build/aui-event-konami/aui-event-konami.js',
				requires: ['event-synthetic']
			}
		}	}).use('aui-event-konami', function (Y) {
		// Your code goes here	});
	
## Usage
	AUI().ready('aui-event-konami', function(A) {
		A.on('konami', function() {
			alert('You have pressed the right keys! Unlocking the world!');
		});
	});
	


  

### A great discussion when developing by
#### @cleydyr
#### @djalmaaraujo
#### @eduardolundgren
