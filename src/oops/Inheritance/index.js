class BaseClass
{
  constructor(){
    console.log("this is base class constructor");
  }
  Print(){
    console.log("this is base class");
  };
}

class DerivedClass extends BaseClass
{
  constructor(){
    super();
    console.log("this is derived class constructor");
  }
  Print(){
    super.Print(); 
    console.log("this is derived class");
  };
}

let obj = new DerivedClass;
obj.Print();