/* Copyright (c) 2007 Brandon Aaron (brandon.aaron@gmail.com || http://brandonaaron.net)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) 
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.0.2
 * Requires jQuery 1.1.3+
 * Docs: http://docs.jquery.com/Plugins/livequery
 */

(function($L) {
	
$L.extend($L.fn, {
	livequery: function(type, fn, fn2) {
		var self = this, q;
		
		// Handle different call patterns
		if ($L.isFunction(type))
			fn2 = fn, fn = type, type = undefined;
			
		// See if Live Query already exists
		$L.each( $L.livequery.queries, function(i, query) {
			if ( self.selector == query.selector && self.context == query.context &&
				type == query.type && (!fn || fn.$Llqguid == query.fn.$Llqguid) && (!fn2 || fn2.$Llqguid == query.fn2.$Llqguid) )
					// Found the query, exit the each loop
					return (q = query) && false;
		});
		
		// Create new Live Query if it wasn't found
		q = q || new $L.livequery(this.selector, this.context, type, fn, fn2);
		
		// Make sure it is running
		q.stopped = false;
		
		// Run it
		$L.livequery.run( q.id );
		
		// Contnue the chain
		return this;
	},
	
	expire: function(type, fn, fn2) {
		var self = this;
		
		// Handle different call patterns
		if ($L.isFunction(type))
			fn2 = fn, fn = type, type = undefined;
			
		// Find the Live Query based on arguments and stop it
		$L.each( $L.livequery.queries, function(i, query) {
			if ( self.selector == query.selector && self.context == query.context && 
				(!type || type == query.type) && (!fn || fn.$Llqguid == query.fn.$Llqguid) && (!fn2 || fn2.$Llqguid == query.fn2.$Llqguid) && !this.stopped )
					$L.livequery.stop(query.id);
		});
		
		// Continue the chain
		return this;
	}
});

$L.livequery = function(selector, context, type, fn, fn2) {
	this.selector = selector;
	this.context  = context || document;
	this.type     = type;
	this.fn       = fn;
	this.fn2      = fn2;
	this.elements = [];
	this.stopped  = false;
	
	// The id is the index of the Live Query in $L.livequery.queries
	this.id = $L.livequery.queries.push(this)-1;
	
	// Mark the functions for matching later on
	fn.$Llqguid = fn.$Llqguid || $L.livequery.guid++;
	if (fn2) fn2.$Llqguid = fn2.$Llqguid || $L.livequery.guid++;
	
	// Return the Live Query
	return this;
};

$L.livequery.prototype = {
	stop: function() {
		var query = this;
		
		if ( this.type )
			// Unbind all bound events
			this.elements.unbind(this.type, this.fn);
		else if (this.fn2)
			// Call the second function for all matched elements
			this.elements.each(function(i, el) {
				query.fn2.apply(el);
			});
			
		// Clear out matched elements
		this.elements = [];
		
		// Stop the Live Query from running until restarted
		this.stopped = true;
	},
	
	run: function() {
		// Short-circuit if stopped
		if ( this.stopped ) return;
		var query = this;
		
		var oEls = this.elements,
			els  = $L(this.selector, this.context),
			nEls = els.not(oEls);
		
		// Set elements to the latest set of matched elements
		this.elements = els;
		
		if (this.type) {
			// Bind events to newly matched elements
			nEls.bind(this.type, this.fn);
			
			// Unbind events to elements no longer matched
			if (oEls.length > 0)
				$L.each(oEls, function(i, el) {
					if ( $L.inArray(el, els) < 0 )
						$L.event.remove(el, query.type, query.fn);
				});
		}
		else {
			// Call the first function for newly matched elements
			nEls.each(function() {
				query.fn.apply(this);
			});
			
			// Call the second function for elements no longer matched
			if ( this.fn2 && oEls.length > 0 )
				$L.each(oEls, function(i, el) {
					if ( $L.inArray(el, els) < 0 )
						query.fn2.apply(el);
				});
		}
	}
};

$L.extend($L.livequery, {
	guid: 0,
	queries: [],
	queue: [],
	running: false,
	timeout: null,
	
	checkQueue: function() {
		if ( $L.livequery.running && $L.livequery.queue.length ) {
			var length = $L.livequery.queue.length;
			// Run each Live Query currently in the queue
			while ( length-- )
				$L.livequery.queries[ $L.livequery.queue.shift() ].run();
		}
	},
	
	pause: function() {
		// Don't run anymore Live Queries until restarted
		$L.livequery.running = false;
	},
	
	play: function() {
		// Restart Live Queries
		$L.livequery.running = true;
		// Request a run of the Live Queries
		$L.livequery.run();
	},
	
	registerPlugin: function() {
		$L.each( arguments, function(i,n) {
			// Short-circuit if the method doesn't exist
			if (!$L.fn[n]) return;
			
			// Save a reference to the original method
			var old = $L.fn[n];
			
			// Create a new method
			$L.fn[n] = function() {
				// Call the original method
				var r = old.apply(this, arguments);
				
				// Request a run of the Live Queries
				$L.livequery.run();
				
				// Return the original methods result
				return r;
			}
		});
	},
	
	run: function(id) {
		if (id != undefined) {
			// Put the particular Live Query in the queue if it doesn't already exist
			if ( $L.inArray(id, $L.livequery.queue) < 0 )
				$L.livequery.queue.push( id );
		}
		else
			// Put each Live Query in the queue if it doesn't already exist
			$L.each( $L.livequery.queries, function(id) {
				if ( $L.inArray(id, $L.livequery.queue) < 0 )
					$L.livequery.queue.push( id );
			});
		
		// Clear timeout if it already exists
		if ($L.livequery.timeout) clearTimeout($L.livequery.timeout);
		// Create a timeout to check the queue and actually run the Live Queries
		$L.livequery.timeout = setTimeout($L.livequery.checkQueue, 20);
	},
	
	stop: function(id) {
		if (id != undefined)
			// Stop are particular Live Query
			$L.livequery.queries[ id ].stop();
		else
			// Stop all Live Queries
			$L.each( $L.livequery.queries, function(id) {
				$L.livequery.queries[ id ].stop();
			});
	}
});

// Register core DOM manipulation methods
$L.livequery.registerPlugin('append', 'prepend', 'after', 'before', 'wrap', 'attr', 'removeAttr', 'addClass', 'removeClass', 'toggleClass', 'empty', 'remove');

// Run Live Queries when the Document is ready
$L(function() { $L.livequery.play(); });


// Save a reference to the original init method
var init = $L.prototype.init;

// Create a new init method that exposes two new properties: selector and context
$L.prototype.init = function(a,c) {
	// Call the original init and save the result
	var r = init.apply(this, arguments);
	
	// Copy over properties if they exist already
	if (a && a.selector)
		r.context = a.context, r.selector = a.selector;
		
	// Set properties
	if ( typeof a == 'string' )
		r.context = c || document, r.selector = a;
	
	// Return the result
	return r;
};

// Give the init function the jQuery prototype for later instantiation (needed after Rev 4091)
$L.prototype.init.prototype = $L.prototype;
	
})(jQuery);