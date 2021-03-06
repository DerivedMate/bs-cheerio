// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Cheerio = require("cheerio");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var Belt_Option = require("bs-platform/lib/js/belt_Option.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Cheerio$BsCheerio = require("../src/Cheerio.bs.js");
var Element$BsCheerio = require("../src/Element.bs.js");

function exn_of_nullable(n) {
  return Belt_Option.getExn((n == null) ? undefined : Caml_option.some(n));
}

function def_of_nullable(n, def) {
  return Belt_Option.getWithDefault((n == null) ? undefined : Caml_option.some(n), def);
}

var Helpers = {
  exn_of_nullable: exn_of_nullable,
  def_of_nullable: def_of_nullable
};

var html = "\n  <!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\"/>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"/>\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\"/>\n  <title>Document</title>\n</head>\n<body>\n  <input type=\"text\" name=\"text_input\" id=\"input-text\" value=\"text\"/>\n  <ul className=\"ul_class\">\n    <li class=\"ul_class__li_class\" id=\"LI_0_id\">LI_0</li>\n    <li class=\"ul_class__li_class\" id=\"LI_1_id\" data-d=\"LI_1_data\">LI_1</li>\n    <li class=\"ul_class__li_class\">LI_2</li>\n    <li class=\"ul_class__li_class\"></li>\n  </ul>\n</body>\n</html>\n";

Jest.describe("text", (function (param) {
        var dom = Cheerio.load(html);
        Jest.test("with text", (function (param) {
                return Jest.Expect.toBe("LI_0", Jest.Expect.expect(Caml_option.nullable_to_opt(Curry._2(Cheerio$BsCheerio.select, dom, "ul li#LI_0_id").text())));
              }));
        Jest.test("without text", (function (param) {
                return Jest.Expect.toEqual("", Jest.Expect.expect(Caml_option.nullable_to_opt(Curry._2(Cheerio$BsCheerio.select, dom, "ul li:nth-child(4)").text())));
              }));
        return Jest.test("replaces text", (function (param) {
                      var el = Curry._2(Cheerio$BsCheerio.select, dom, "li#LI_0_id");
                      var new_text = "new text";
                      el.text(new_text);
                      return Jest.Expect.toEqual(new_text, Jest.Expect.expect(Belt_Option.getExn(Caml_option.nullable_to_opt(el.text()))));
                    }));
      }));

Jest.describe("html", (function (param) {
        var dom = Cheerio.load(html);
        return Jest.test("works", (function (param) {
                      var match = Curry._2(Cheerio$BsCheerio.select, dom, "ul").html();
                      if (match == null) {
                        return Jest.Expect.toEqual(true, Jest.Expect.expect(false));
                      } else {
                        return Jest.Expect.toContainString("<li class=\"ul_class__li_class\">LI_2</li>", Jest.Expect.expect(match));
                      }
                    }));
      }));

Jest.describe("val", (function (param) {
        var dom = Cheerio.load(html);
        return Jest.test("works", (function (param) {
                      return Jest.Expect.toEqual("text", Jest.Expect.expect(Caml_option.nullable_to_opt(Curry._2(Cheerio$BsCheerio.select, dom, "input[name=text_input]").val())));
                    }));
      }));

Jest.describe("first", (function (param) {
        var dom = Cheerio.load(html);
        return Jest.test("works", (function (param) {
                      return Jest.Expect.toEqual("LI_0", Jest.Expect.expect(Caml_option.nullable_to_opt(Curry._2(Cheerio$BsCheerio.select, dom, "ul li").first().text())));
                    }));
      }));

Jest.describe("length", (function (param) {
        var dom = Cheerio.load(html);
        return Jest.test("returns the number of matched items", (function (param) {
                      return Jest.Expect.toEqual(4, Jest.Expect.expect(Curry._2(Cheerio$BsCheerio.select, dom, "li").length));
                    }));
      }));

Jest.describe("get", (function (param) {
        var dom = Cheerio.load(html);
        Jest.test("returns all the elements", (function (param) {
                return Jest.Expect.toEqual(4, Jest.Expect.expect(Curry._2(Cheerio$BsCheerio.select, dom, "li").get().length));
              }));
        return Jest.test("returns i-th element when the index is given", (function (param) {
                      var n = Cheerio(Curry._2(Cheerio$BsCheerio.select, dom, "li").get(1)).attr("data-d");
                      return Jest.Expect.toEqual("LI_1_data", Jest.Expect.expect(Belt_Option.getWithDefault((n == null) ? undefined : Caml_option.some(n), "")));
                    }));
      }));

Jest.describe("attr1", (function (param) {
        var dom = Cheerio.load(html);
        Jest.test("Some(p) when a prop exists", (function (param) {
                return Jest.Expect.toEqual("LI_1_data", Jest.Expect.expect(Caml_option.nullable_to_opt(Curry._2(Cheerio$BsCheerio.select, dom, "li#LI_1_id").attr("data-d"))));
              }));
        Jest.test("None when a prop doesn't exist", (function (param) {
                return Jest.Expect.toEqual(undefined, Jest.Expect.expect(Caml_option.nullable_to_opt(Curry._2(Cheerio$BsCheerio.select, dom, "li#LI_1_id").attr("made-up-prop"))));
              }));
        return Jest.test("None when an element doesn't exist", (function (param) {
                      return Jest.Expect.toEqual(undefined, Jest.Expect.expect(Caml_option.nullable_to_opt(Curry._2(Cheerio$BsCheerio.select, dom, "li#IDontExist").attr("me-neither"))));
                    }));
      }));

Jest.describe("attr2", (function (param) {
        var dom = Cheerio.load(html);
        Jest.test("Sets value of an existing element", (function (param) {
                return Jest.Expect.toEqual("some-value", Jest.Expect.expect(Caml_option.nullable_to_opt(Curry._2(Cheerio$BsCheerio.select, dom, "li#LI_1_id").attr("data-sth", "some-value").attr("data-sth"))));
              }));
        Jest.test("None when trying to set a value of a nonexisting element", (function (param) {
                return Jest.Expect.toEqual(undefined, Jest.Expect.expect(Caml_option.nullable_to_opt(Curry._2(Cheerio$BsCheerio.select, dom, "li#IDontExist").attr("data-sth", "some-value").attr("data-sth"))));
              }));
        return Jest.test("Removes the attr if `null` is passed", (function (param) {
                      return Jest.Expect.toEqual(undefined, Jest.Expect.expect(Caml_option.nullable_to_opt(Curry._2(Cheerio$BsCheerio.select, dom, "li#LI_1_id").attr("data-d", null).attr("data-d"))));
                    }));
      }));

Jest.describe("next", (function (param) {
        var dom = Cheerio.load(html);
        return Jest.test("Some when found the next node", (function (param) {
                      return Jest.Expect.toEqual("LI_1_id", Jest.Expect.expect(Caml_option.nullable_to_opt(Curry._2(Cheerio$BsCheerio.select, dom, "li#LI_0_id").next().attr("id"))));
                    }));
      }));

Jest.describe("properties", (function (param) {
        var dom = Cheerio.load(html);
        return Jest.test("type", (function (param) {
                      return Jest.Expect.toEqual(/* Tag */1, Jest.Expect.expect(Element$BsCheerio.decodeType(Curry._1(Element$BsCheerio.type_, Curry._2(Cheerio$BsCheerio.select, dom, "ul")))));
                    }));
      }));

Jest.describe("each", (function (param) {
        var dom = Cheerio.load(html);
        return Jest.test("iterates over each element", (function (param) {
                      var visited = {
                        contents: /* :: */[
                          false,
                          /* :: */[
                            false,
                            /* :: */[
                              false,
                              /* [] */0
                            ]
                          ]
                        ]
                      };
                      Curry._2(Cheerio$BsCheerio.select, dom, "ul").contents().each((function (i, param) {
                              visited.contents = Belt_List.mapWithIndex(visited.contents, (function (j, v) {
                                      if (v) {
                                        return true;
                                      } else {
                                        return j === i;
                                      }
                                    }));
                              return /* () */0;
                            }));
                      return Jest.Expect.toEqual(/* :: */[
                                  true,
                                  /* :: */[
                                    true,
                                    /* :: */[
                                      true,
                                      /* [] */0
                                    ]
                                  ]
                                ], Jest.Expect.expect(visited.contents));
                    }));
      }));

Jest.describe("map", (function (param) {
        var dom = Cheerio.load(html);
        return Jest.test("maps over items", (function (param) {
                      return Jest.Expect.toEqual(/* array */[
                                  "LI_0",
                                  "LI_1",
                                  "LI_2",
                                  ""
                                ], Jest.Expect.expect(Curry._2(Cheerio$BsCheerio.select, dom, "li").map((function (param, el) {
                                              return Cheerio(el).text();
                                            })).toArray()));
                    }));
      }));

Jest.describe("toArray", (function (param) {
        var dom = Cheerio.load(html);
        return Jest.test("returns a list", (function (param) {
                      return Jest.Expect.toEqual(4, Jest.Expect.expect(Curry._2(Cheerio$BsCheerio.select, dom, "li").toArray().length));
                    }));
      }));

exports.Helpers = Helpers;
exports.html = html;
/*  Not a pure module */
