/**
 * Based on the Konami code (http://en.wikipedia.org/wiki/Konami_Code).
 * This synthetic event will fire when the Konami secret code matches
 * user keyboard sequence combination.
 *
 * This event will support the real sensation of konami when the user
 * can make a mistake on the first few keystrokes.
 *
 * @module event-konami
 *
 * @class AUI~event-konami
 */


A.Event.define('konami', {
	_konamiKeys: [38,38,40,40,37,39,37,39,66,65],

	on: function (node, sub, notifier) {
		var instance = this;

		sub._firstIndexLenght = 0;
		sub._index = 0;
		sub._handle = A.on('keydown', A.rbind(instance._handleKeyDown, instance, sub, notifier));
	},

	_handleKeyDown: function(e, sub, notifier) {
		var instance = this,
			index = sub._index,
			konamiKeys = this._konamiKeys;

		if (sub._firstIndexLenght === 0) {
			while (konamiKeys[0] === konamiKeys[++sub._firstIndexLenght]);
		}

		if (e.keyCode === konamiKeys[index])  {
			if (++index === konamiKeys.length) {
				notifier.fire(e);
				index = 0;
			}
		}
		else {

			if ((index === sub._firstIndexLenght) && (e.keyCode === konamiKeys[0])) {
				return;
			}

			index = 0;
		}

		sub._index = index;
	},

	detach: function (node, sub, notifier) {
		sub._handle.detach();
	}
});