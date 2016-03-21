let passwords = {}

passwords['someHash'] = 'myPassword'
passwords['anotherHash'] = 'anotherPassword'

function myHash(input) {
 return mutated(input) 
}

functionHashStore() {
  this.store = {}
}

functionHashStore.prototype.get = function(key) {
  return this.store[myHash(key)]
}

functionHashStore.prototype.set = function(key, value) {
  this.store[myHash(key)] = value
}


