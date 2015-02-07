var Ent = function() {
  this.layers = [];
};

Ent.prototype.update = function() {
  for (var l in this.layers) {
    if (false === !!this.layers[l]) {continue;}
    var ents = this.layers[l];
    for (var k in ents) {
      if (ents.hasOwnProperty(k)) {
        ents[k].update();
      }
    }
  }
};

Ent.prototype.register = function(layer, id, entity) {
  if (false === !!this.layers[layer]) {
    this.layers[layer] = {};
  }
  if (entity.create) {
    entity.create();
  }
  this.layers[layer][id] = entity;
};
Ent.prototype.remove = function(layer, id) {
  delete(this.layers[layer][id])
};

Ent.prototype.get = function(layer, id) {
  return this.layers[layer][id];
};

module.exports = Ent;