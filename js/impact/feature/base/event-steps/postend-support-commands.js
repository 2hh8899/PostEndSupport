ig.module("impact.feature.base.event-steps.postend-support-commands").requires("impact.feature.base.event-steps").defines(function() {
	ig.EVENT_STEP.PE_S_MAKE_SOLID = ig.EventStepBase.extend({
		entity: null,
		position: null,
		_wm: new ig.Config({
			attributes: {}
		}),
		init: function(a) {},
		start: function(a, b) {
			ig.game.getEntityByMapId(1468).coll.setType(6);
			ig.game.getEntityByMapId(1475).coll.setType(11)
		}
	});
    ig.EVENT_STEP.GOTO_TITLE = ig.EventStepBase.extend({
        _wm: new ig.Config({
            attributes: {}
        }),
        start: function() {
			if(ig.vars.get("plot.line") >= 51900 && ig.vars.get("plot.line") < 52000) {
				ig.vars.set("plot.line", 52000);
			}else{
				ig.game.gotoTitle();
			}
        }
    });
})