// es6代码写类:
class person{
  constrcutor(name,age){
    this.name = name;
    this.age = age;
  }
  eating(){
  	console.log(`${this.name}在吃饭`);
  }
}


// 利用babel转换的es5代码:
"use strict";

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var person = /*#__PURE__*/ (function () {
  function person() {
    _classCallCheck(this, person);
  }

  _createClass(person, [
    {
      key: "constrcutor",
      value: function constrcutor(name, age) {
        this.name = name;
        this.age = age;
      }
    },
    {
      key: "eating",
      value: function eating() {
        console.log("".concat(this.name, "\u5728\u5403\u996D"));
      }
    }
  ]);

  return person;
})();



// es6 代码写类的继承:
class Person{
  constrcutor(name,age){
    this.name = name;
    this.age = age;
  }
  eating(){
  	console.log(`${this.name}在吃饭`);
  }
}

class Student extends Person{
  constructor(name,age,address){
      super(name,age);
      this.address = address;
  }
  running(){
    console.log(`${this.name}正在跑步..`);
  }
  eating(){
    console.log(`${this.name}已经吃完饭了`)
  }
}

// 经过babel转化为es5代码:
"use strict";

function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === "function" &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? "symbol"
        : typeof obj;
    };
  }
  return _typeof(obj);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  }
  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var Person = /*#__PURE__*/ (function () {
  function Person() {
    _classCallCheck(this, Person);
  }

  _createClass(Person, [
    {
      key: "constrcutor",
      value: function constrcutor(name, age) {
        this.name = name;
        this.age = age;
      }
    },
    {
      key: "eating",
      value: function eating() {
        console.log("".concat(this.name, "\u5728\u5403\u996D"));
      }
    }
  ]);

  return Person;
})();

var Student = /*#__PURE__*/ (function (_Person) {
  _inherits(Student, _Person);

  var _super = _createSuper(Student);

  function Student(name, age, address) {
    var _this;

    _classCallCheck(this, Student);

    _this = _super.call(this, name, age);
    _this.address = address;
    return _this;
  }

  _createClass(Student, [
    {
      key: "running",
      value: function running() {
        console.log("".concat(this.name, "\u6B63\u5728\u8DD1\u6B65.."));
      }
    },
    {
      key: "eating",
      value: function eating() {
        console.log(
          "".concat(this.name, "\u5DF2\u7ECF\u5403\u5B8C\u996D\u4E86")
        );
      }
    }
  ]);

  return Student;
})(Person);