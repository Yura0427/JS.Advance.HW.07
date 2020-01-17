function CoffeeMake() {}
CoffeeMake.prototype.on = function () {
    console.log('CoffeeMake on')
}
CoffeeMake.prototype.off = function () {
    console.log('CoffeeMake off')
}
function CoffeeMakeDrip(coffee) {
    this.coffee = coffee;
}
CoffeeMakeDrip.prototype = CoffeeMake.prototype;
CoffeeMakeDrip.prototype.makecoffee = function () {
    console.log('coffee', this.coffee)
}
const coffeeMakeDrip = new CoffeeMakeDrip('arabika');
console.log(coffeeMakeDrip);
coffeeMakeDrip.on();
coffeeMakeDrip.off();
coffeeMakeDrip.makecoffee();

function CoffeeMakeCarob(coffee) {
    this.coffee = coffee;
};
CoffeeMakeCarob.prototype = CoffeeMake.prototype;
CoffeeMakeCarob.prototype.cappuccino = function () {
    console.log('cappuccino', this.coffee)
};
const coffeeMakeCarob = new CoffeeMakeCarob('arabika');
console.log(coffeeMakeCarob);
coffeeMakeCarob.on();
coffeeMakeCarob.off();
coffeeMakeCarob.cappuccino();
coffeeMakeCarob.makecoffee()

function CoffeeMakeMachine(coffee) {
    this.coffee = coffee;
};
CoffeeMakeMachine.prototype = CoffeeMake.prototype;
CoffeeMakeMachine.prototype.espresso = function () {
    console.log('espresso', this.coffee)
};  
const coffeeMakeMachine = new CoffeeMakeMachine('arabika');
console.log(coffeeMakeMachine);
coffeeMakeMachine.espresso();
