// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';


function decodeNodeType(type_index) {
  switch (type_index) {
    case 1 :
        return /* Element */0;
    case 3 :
        return /* Text */1;
    case 4 :
        return /* CData */2;
    case 2 :
    case 5 :
    case 6 :
        return /* Deprecated */8;
    case 7 :
        return /* PROCESSING_INSTRUCTION */3;
    case 8 :
        return /* Comment */4;
    case 9 :
        return /* Document */5;
    case 10 :
        return /* DocumentType */6;
    case 11 :
        return /* DocumentFragment */7;
    default:
      return /* Deprecated */8;
  }
}

var type_ = (
  x => {
    if(!x || x.length == 0) return ""
    if(x[0]) return x[0].type
    return x.type
  }
);

function decodeType(t_) {
  switch (t_) {
    case "comment" :
        return /* Comment */0;
    case "directive" :
        return /* Directive */5;
    case "script" :
        return /* Script */3;
    case "style" :
        return /* Style */4;
    case "tag" :
        return /* Tag */1;
    case "text" :
        return /* Text */2;
    default:
      return /* Unknown_ */6;
  }
}

exports.decodeNodeType = decodeNodeType;
exports.type_ = type_;
exports.decodeType = decodeType;
/* type_ Not a pure module */
