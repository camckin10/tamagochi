var DigitalPal = function () {
	this.hungry = false;
	this.sleepy = false;
	this.bored = true;
	this.age = 0;


this.feed = function () {
	if(this.hungry === true) {
		console.log("That was yummy!");
		this.hungry = false;
		this.sleepy =true;
	} else {
		console.log("No thanks, I'm full");
	} 
}


 this.sleep = function () {
	if(sleepy === true) {
		console.log("Zzzzzzz");
		this.sleepy = false;
		this.bored = true;
		this.increaseAge;
	} else {
		console.log("No way! I'm not tired");
	}
}

this.play = function () {
	if(this.bored===true) {
		this.bored = false;
		this.hungry = true;
		console.log("Yay! Lets play");
	} else {
		console.log("Not right now. Later?");
	}
}

this.increaseAge = function () {
	this.age +=1;
	console.log("Happy Birthday to Me! I am" + age + "old!");
	}

}; //end DigitalPal function 


//dog variable
var dog = new DigitalPal();

	dog.outside = false;
	dog.bark = function () {
		console.log("woof! woof!");
	}
	dog.goOutside = function () {
		if (dog.outside === false) {
		console.log("yay! I love the outdoors");
		dog.bark();
		} else {
			dog.outside = true;
			console.log("But we're outside already");
	}
}
		dog.goInside = function () {
			if (dog.outside = true) {
			console.log("Do We Have To? Fine....");
			} else if (dog.outside === false) { 
			console.log("I'm already inside");
		}
	}




//cat variable
var cat = new DigitalPal() 

	cat.houseCondition = 100;
	cat.meow = function () {
		console.log("meow! meow!");
	}
	cat.destroyFurniture = function () {
		if(cat.houseCondition -= 10 ) {
			console.log("MUAHAHAHAHA! Take THAT Furniture!");
		} else  {
			cat.bored = false;
			cat.sleepy= true;
			console.log("you have destryoed enough furniture!");
		}
	}
	cat.buyNewFurniture = function () {
		cat.houseCondition += 50;
		console.log("Are you sure about that?");
	}


dog.goOutside();
cat.destroyFurniture();

