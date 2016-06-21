
# Concept

A web framework driven by a RAF (requestAnimationFrame) callback.
Inputs etc would be queued and dispatched to modules that subscribe to them.

It would be driven like a game engine.

default keyboard and mouse modules.
a statemachine class to derive from...

# TODO

+ Send coordinates into initialize and render so we don't have bounds hardcoded.

+ Start Timestampings each module so we know how much each one takes.

+ More complex movement.

+ Something else with the mouse.

https://api.jquery.com/category/events/mouse-events/

Menus
http://stackoverflow.com/questions/12015917/dropdown-menu-over-svg


+ Create WebGL structure to test.

+ Text Elements.

+ Started reading DOOM source...it has an update to make the skull animate in the menu.  It manages multiple engine modes and has updates for each of them.


# DONE

RequireJS is required.
modularized.

http://requirejs.org/docs/api.html#defsimple

+ Create Repository

+ Create configuration file...load it and load the modules based on the configuration file.
