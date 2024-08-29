  class baseClass 
  {
    Print(){
      console.log("this is base class");
    };
  }

  class derivedClass
  {
    Print(){
      let obj = new baseClass;
      obj.Print();
      console.log("this is derived class");
    };
  }

  let obj = new derivedClass;
  obj.Print();