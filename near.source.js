/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('near.source');
 * mod.thing == 'a thing'; // true
 */
var nearSource = {
    
    run: function nearSource(creep){
        creep.room.findClosestByPath(FIND_SOURCES);
    }

    
}
