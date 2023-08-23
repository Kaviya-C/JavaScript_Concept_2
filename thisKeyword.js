// ----------------------this keyword-----------
let laptop = {
  cpu: "i5",
  ram: 16,
  brand: "Asus vivobook",
  greet: function () {
    console.log("Hey Kaviya how are u?");
  },
};

laptop.greet();
// i want to print the keys or field or property name of this laptop object like cpu and ram, brand greet

let laptop1 = {
  cpu: "i5",
  ram: 16,
  brand: "Asus vivobook",
  getConfig: function () {
    let local = 100;
    console.log(local);
  },
};
laptop1.getConfig();

// if we want to print the property value inside the function u can't call directly the cpu bcoz this cpu present inside in laptop object so we have to call the laptop.cpu
let laptop3 = {
  cpu: "i5",
  ram: 16,
  brand: "Asus vivobook",
  greet: function () {
    console.log(laptop3.brand);
  },
};
laptop3.greet();
// instead of using the object laptop again and again  we can use this keyword

let laptop4 = {
  cpu: "i5",
  ram: 16,
  brand: "Asus vivobook",
  greet: function () {
    console.log(this.cpu + " >> " + this.ram + " >> " + this.brand);
  },
};

laptop4.greet();
// this refers to current object or value coming from same object

//-----------------------------------------------------
//--------------- why we called this?--------------------
// compare two laptop objects

function getFastComputer() {
  if (laptop5.ram > laptop6.ram) {
    console.log(laptop5);
  } else {
    console.log(laptop6);
  }
}

// above is a function

let laptop5 = {
  cpu: "i6",
  ram: 32,
  brand: "Asus",
  getConfig: function () {
    console.log(this.cpu);
  },
};

let laptop6 = {
  cpu: "i11",
  ram: 16,
  brand: "Dell",
  getConfig: function () {
    console.log(this.cpu);
  },
  compare: function (other)
   {
    if (this.ram > laptop6.ram) 
    {
      console.log(this);
    }
     else
      {
      console.log(other);
    }
  },
};

getFastComputer(laptop5, laptop6); // this method is third party function .

laptop6.compare(laptop5); // comparing itself to other laptop
