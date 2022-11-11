/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.BrowserjsSDK = void 0;\r\nclass BrowserjsSDK {\r\n    constructor() {\r\n        this.ws = new WebSocket(\"wss://demo.piesocket.com/v3/channel_123?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self:3241\");\r\n    }\r\n    on(event, callback) {\r\n        if (event === \"message\") {\r\n            this.ws.onmessage = (messaage) => {\r\n                return callback(messaage);\r\n            };\r\n        }\r\n        else if (event === \"open\") {\r\n            this.ws.onopen = () => {\r\n                return callback(\"Connected\");\r\n            };\r\n        }\r\n        else {\r\n            return callback(\"Unrecognized\");\r\n        }\r\n    }\r\n    send(message) {\r\n        this.ws.send(JSON.stringify(message));\r\n    }\r\n    disconnect() {\r\n        this.ws.onclose = () => {\r\n            console.log(\"WebSocket Disconnected\");\r\n        };\r\n    }\r\n}\r\nexports.BrowserjsSDK = BrowserjsSDK;\r\nconst sdk = new BrowserjsSDK();\r\nwindow.sdk = sdk;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBR0EsTUFBYSxZQUFZO0lBR3ZCO1FBQ0UsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLFNBQVMsQ0FDckIsMkdBQTJHLENBQzVHLENBQUM7SUFDSixDQUFDO0lBQ0QsRUFBRSxDQUFDLEtBQWEsRUFBRSxRQUFrQjtRQUNsQyxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxRQUFRLEVBQUUsRUFBRTtnQkFDL0IsT0FBTyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDNUIsQ0FBQyxDQUFDO1NBQ0g7YUFBTSxJQUFJLEtBQUssS0FBSyxNQUFNLEVBQUU7WUFDM0IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsR0FBRyxFQUFFO2dCQUNwQixPQUFPLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUMvQixDQUFDLENBQUM7U0FDSDthQUFNO1lBQ0wsT0FBTyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDakM7SUFDSCxDQUFDO0lBQ0QsSUFBSSxDQUFDLE9BQW1CO1FBQ3RCLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBQ0QsVUFBVTtRQUNSLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxHQUFHLEdBQUcsRUFBRTtZQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztDQUNGO0FBN0JELG9DQTZCQztBQUVELE1BQU0sR0FBRyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7QUFDOUIsTUFBYyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWduYWx3aXJlLXNkay1icm93c2VyanMvLi9zcmMvaW5kZXgudHM/ZmZiNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXdNZXNzYWdlIH0gZnJvbSBcInNpZ25hbHdpcmUtc2RrLW5vZGUvc3JjL3NoYXJlZC90eXBlc1wiO1xuaW1wb3J0IHsgSVNESyB9IGZyb20gXCJzaWduYWx3aXJlLXNkay1ub2RlL3NyYy9pbnRlcmZhY2VzL3Nkay5pbnRlcmZhY2VcIjtcblxuZXhwb3J0IGNsYXNzIEJyb3dzZXJqc1NESyBpbXBsZW1lbnRzIElTREsge1xuICB3czogV2ViU29ja2V0O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMud3MgPSBuZXcgV2ViU29ja2V0KFxuICAgICAgXCJ3c3M6Ly9kZW1vLnBpZXNvY2tldC5jb20vdjMvY2hhbm5lbF8xMjM/YXBpX2tleT1WQ1hDRXV2aEdjQkRQN1hoaUpKVUR2UjFlMUQzZWlWamdaOVZSaWFWJm5vdGlmeV9zZWxmOjMyNDFcIlxuICAgICk7XG4gIH1cbiAgb24oZXZlbnQ6IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uKTogYW55IHtcbiAgICBpZiAoZXZlbnQgPT09IFwibWVzc2FnZVwiKSB7XG4gICAgICB0aGlzLndzLm9ubWVzc2FnZSA9IChtZXNzYWFnZSkgPT4ge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2sobWVzc2FhZ2UpO1xuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50ID09PSBcIm9wZW5cIikge1xuICAgICAgdGhpcy53cy5vbm9wZW4gPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhcIkNvbm5lY3RlZFwiKTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjYWxsYmFjayhcIlVucmVjb2duaXplZFwiKTtcbiAgICB9XG4gIH1cbiAgc2VuZChtZXNzYWdlOiBOZXdNZXNzYWdlKSB7XG4gICAgdGhpcy53cy5zZW5kKEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpKTtcbiAgfVxuICBkaXNjb25uZWN0KCkge1xuICAgIHRoaXMud3Mub25jbG9zZSA9ICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiV2ViU29ja2V0IERpc2Nvbm5lY3RlZFwiKTtcbiAgICB9O1xuICB9XG59XG5cbmNvbnN0IHNkayA9IG5ldyBCcm93c2VyanNTREsoKTtcbih3aW5kb3cgYXMgYW55KS5zZGsgPSBzZGs7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"](0, __webpack_exports__);
/******/ 	
/******/ })()
;