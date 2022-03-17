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

/***/ "./src/js/Hsl.ts":
/*!***********************!*\
  !*** ./src/js/Hsl.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.Hsl = void 0;\n\nvar Hsl = function () {\n  function Hsl(hue, saturation, lightness) {\n    this.hue = hue;\n    this.saturation = saturation;\n    this.lightness = lightness;\n  }\n\n  Hsl.prototype.toString = function () {\n    return \"hsl(\".concat(this.hue, \",\").concat(this.saturation, \"%,\").concat(this.lightness, \"%)\");\n  };\n\n  Hsl.prototype.generateNew = function () {\n    return new Hsl(this.hue, 50 + Math.ceil(Math.random() * 50), 50 + Math.ceil(Math.random() * 50));\n  };\n\n  return Hsl;\n}();\n\nexports.Hsl = Hsl;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvSHNsLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFLSSxlQUFZQSxHQUFaLEVBQXlCQyxVQUF6QixFQUE2Q0MsU0FBN0MsRUFBOEQ7QUFDMUQsU0FBS0YsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNIOztBQUVEQztBQUNJLFdBQU8sY0FBTyxLQUFLSCxHQUFaLEVBQWUsR0FBZixFQUFlSSxNQUFmLENBQW1CLEtBQUtILFVBQXhCLEVBQWtDLElBQWxDLEVBQWtDRyxNQUFsQyxDQUF1QyxLQUFLRixTQUE1QyxFQUFxRCxJQUFyRCxDQUFQO0FBQ0gsR0FGRDs7QUFJQUM7QUFDSSxXQUFPLElBQUlBLEdBQUosQ0FBUSxLQUFLSCxHQUFiLEVBQWlCLEtBQUtLLElBQUksQ0FBQ0MsSUFBTCxDQUFVRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsRUFBMUIsQ0FBdEIsRUFBcUQsS0FBR0YsSUFBSSxDQUFDQyxJQUFMLENBQVVELElBQUksQ0FBQ0UsTUFBTCxLQUFnQixFQUExQixDQUF4RCxDQUFQO0FBQ0gsR0FGRDs7QUFJSjtBQUFDLENBbkJEOztBQUFhQyxXQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NpcmN1bGFyLy4vc3JjL2pzL0hzbC50cz9jNTRlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBIc2wge1xuICAgIHByaXZhdGUgaHVlOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBzYXR1cmF0aW9uOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBsaWdodG5lc3M6IG51bWJlclxuXG4gICAgY29uc3RydWN0b3IoaHVlOiBudW1iZXIsIHNhdHVyYXRpb246IG51bWJlciwgbGlnaHRuZXNzOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5odWUgPSBodWU7XG4gICAgICAgIHRoaXMuc2F0dXJhdGlvbiA9IHNhdHVyYXRpb247XG4gICAgICAgIHRoaXMubGlnaHRuZXNzID0gbGlnaHRuZXNzO1xuICAgIH1cblxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gYGhzbCgke3RoaXMuaHVlfSwke3RoaXMuc2F0dXJhdGlvbn0lLCR7dGhpcy5saWdodG5lc3N9JSlgO1xuICAgIH1cblxuICAgIGdlbmVyYXRlTmV3KCkge1xuICAgICAgICByZXR1cm4gbmV3IEhzbCh0aGlzLmh1ZSw1MCArIE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogNTApLCA1MCtNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDUwKSk7XG4gICAgfVxuXG59Il0sIm5hbWVzIjpbImh1ZSIsInNhdHVyYXRpb24iLCJsaWdodG5lc3MiLCJIc2wiLCJjb25jYXQiLCJNYXRoIiwiY2VpbCIsInJhbmRvbSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/Hsl.ts\n");

/***/ }),

/***/ "./src/js/Particle.ts":
/*!****************************!*\
  !*** ./src/js/Particle.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.Particle = void 0;\n\nvar settings_1 = __webpack_require__(/*! ./settings */ \"./src/js/settings.ts\");\n\nvar Particle = function () {\n  function Particle(center, ctx, startColor) {\n    this.ctx = ctx;\n    this.center = center;\n    this.color = startColor.generateNew().toString();\n    this.radian = Math.random() * Math.PI * 2;\n    this.speed = 0.05;\n    this.radius = settings_1.settings.radius.min + Math.random() * (settings_1.settings.radius.max - settings_1.settings.radius.min);\n    this.distanceCircle = settings_1.settings.distanceCircle.min + Math.random() * (settings_1.settings.distanceCircle.max - settings_1.settings.distanceCircle.min);\n    this.position = {\n      x: this.center.x,\n      y: this.center.y\n    };\n    return this;\n  }\n\n  Particle.prototype.draw = function () {\n    this.ctx.beginPath();\n    this.ctx.fillStyle = this.color;\n    this.ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);\n    this.ctx.fill();\n  };\n\n  Particle.prototype.update = function () {\n    this.position.x = this.center.x + Math.cos(this.radian) * this.distanceCircle;\n    this.position.y = this.center.y + Math.sin(this.radian) * this.distanceCircle;\n    this.radian += this.speed;\n    this.draw();\n  };\n\n  return Particle;\n}();\n\nexports.Particle = Particle;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvUGFydGljbGUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFHQTtBQVVJLG9CQUFZQSxNQUFaLEVBQThDQyxHQUE5QyxFQUE2RUMsVUFBN0UsRUFBNEY7QUFDeEYsU0FBS0QsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0QsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0csS0FBTCxHQUFhRCxVQUFVLENBQUNFLFdBQVgsR0FBeUJDLFFBQXpCLEVBQWI7QUFDQSxTQUFLQyxNQUFMLEdBQWNDLElBQUksQ0FBQ0MsTUFBTCxLQUFnQkQsSUFBSSxDQUFDRSxFQUFyQixHQUEwQixDQUF4QztBQUNBLFNBQUtDLEtBQUwsR0FBYSxJQUFiO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQyxvQkFBU0QsTUFBVCxDQUFnQkUsR0FBaEIsR0FBc0JOLElBQUksQ0FBQ0MsTUFBTCxNQUFpQkksb0JBQVNELE1BQVQsQ0FBZ0JHLEdBQWhCLEdBQXNCRixvQkFBU0QsTUFBVCxDQUFnQkUsR0FBdkQsQ0FBcEM7QUFDQSxTQUFLRSxjQUFMLEdBQXNCSCxvQkFBU0csY0FBVCxDQUF3QkYsR0FBeEIsR0FBOEJOLElBQUksQ0FBQ0MsTUFBTCxNQUFpQkksb0JBQVNHLGNBQVQsQ0FBd0JELEdBQXhCLEdBQThCRixvQkFBU0csY0FBVCxDQUF3QkYsR0FBdkUsQ0FBcEQ7QUFDQSxTQUFLRyxRQUFMLEdBQWdCO0FBQUNDLE9BQUMsRUFBRSxLQUFLakIsTUFBTCxDQUFZaUIsQ0FBaEI7QUFBbUJDLE9BQUMsRUFBRSxLQUFLbEIsTUFBTCxDQUFZa0I7QUFBbEMsS0FBaEI7QUFDQSxXQUFPLElBQVA7QUFDSDs7QUFFREM7QUFDSSxTQUFLbEIsR0FBTCxDQUFTbUIsU0FBVDtBQUNBLFNBQUtuQixHQUFMLENBQVNvQixTQUFULEdBQXFCLEtBQUtsQixLQUExQjtBQUNBLFNBQUtGLEdBQUwsQ0FBU3FCLEdBQVQsQ0FBYSxLQUFLTixRQUFMLENBQWNDLENBQTNCLEVBQThCLEtBQUtELFFBQUwsQ0FBY0UsQ0FBNUMsRUFBK0MsS0FBS1AsTUFBcEQsRUFBNEQsQ0FBNUQsRUFBK0QsSUFBSUosSUFBSSxDQUFDRSxFQUF4RTtBQUNBLFNBQUtSLEdBQUwsQ0FBU3NCLElBQVQ7QUFDSCxHQUxEOztBQU9BSjtBQUNJLFNBQUtILFFBQUwsQ0FBY0MsQ0FBZCxHQUFrQixLQUFLakIsTUFBTCxDQUFZaUIsQ0FBWixHQUFnQlYsSUFBSSxDQUFDaUIsR0FBTCxDQUFTLEtBQUtsQixNQUFkLElBQXdCLEtBQUtTLGNBQS9EO0FBQ0EsU0FBS0MsUUFBTCxDQUFjRSxDQUFkLEdBQWtCLEtBQUtsQixNQUFMLENBQVlrQixDQUFaLEdBQWdCWCxJQUFJLENBQUNrQixHQUFMLENBQVMsS0FBS25CLE1BQWQsSUFBd0IsS0FBS1MsY0FBL0Q7QUFDQSxTQUFLVCxNQUFMLElBQWUsS0FBS0ksS0FBcEI7QUFDQSxTQUFLZ0IsSUFBTDtBQUNILEdBTEQ7O0FBT0o7QUFBQyxDQXBDRDs7QUFBYUMsZ0JBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2lyY3VsYXIvLi9zcmMvanMvUGFydGljbGUudHM/MzhhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3NldHRpbmdzfSBmcm9tIFwiLi9zZXR0aW5nc1wiO1xuaW1wb3J0IHtIc2x9IGZyb20gXCIuL0hzbFwiO1xuXG5leHBvcnQgY2xhc3MgUGFydGljbGUge1xuICAgIHByaXZhdGUgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gICAgcHJpdmF0ZSBjb2xvcjogc3RyaW5nO1xuICAgIHByaXZhdGUgcmFkaXVzOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBwb3NpdGlvbjogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9O1xuICAgIHByaXZhdGUgY2VudGVyOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH07XG4gICAgcHJpdmF0ZSBzcGVlZDogbnVtYmVyO1xuICAgIHByaXZhdGUgcmFkaWFuOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBkaXN0YW5jZUNpcmNsZTogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoY2VudGVyOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH0sIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBzdGFydENvbG9yOiBIc2wpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuY2VudGVyID0gY2VudGVyO1xuICAgICAgICB0aGlzLmNvbG9yID0gc3RhcnRDb2xvci5nZW5lcmF0ZU5ldygpLnRvU3RyaW5nKCk7XG4gICAgICAgIHRoaXMucmFkaWFuID0gTWF0aC5yYW5kb20oKSAqIE1hdGguUEkgKiAyO1xuICAgICAgICB0aGlzLnNwZWVkID0gMC4wNTtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSBzZXR0aW5ncy5yYWRpdXMubWluICsgTWF0aC5yYW5kb20oKSAqIChzZXR0aW5ncy5yYWRpdXMubWF4IC0gc2V0dGluZ3MucmFkaXVzLm1pbik7XG4gICAgICAgIHRoaXMuZGlzdGFuY2VDaXJjbGUgPSBzZXR0aW5ncy5kaXN0YW5jZUNpcmNsZS5taW4gKyBNYXRoLnJhbmRvbSgpICogKHNldHRpbmdzLmRpc3RhbmNlQ2lyY2xlLm1heCAtIHNldHRpbmdzLmRpc3RhbmNlQ2lyY2xlLm1pbik7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7eDogdGhpcy5jZW50ZXIueCwgeTogdGhpcy5jZW50ZXIueX1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIHRoaXMuY3R4LmFyYyh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy5yYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gdGhpcy5jZW50ZXIueCArIE1hdGguY29zKHRoaXMucmFkaWFuKSAqIHRoaXMuZGlzdGFuY2VDaXJjbGU7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueSA9IHRoaXMuY2VudGVyLnkgKyBNYXRoLnNpbih0aGlzLnJhZGlhbikgKiB0aGlzLmRpc3RhbmNlQ2lyY2xlO1xuICAgICAgICB0aGlzLnJhZGlhbiArPSB0aGlzLnNwZWVkO1xuICAgICAgICB0aGlzLmRyYXcoKVxuICAgIH1cblxufVxuIl0sIm5hbWVzIjpbImNlbnRlciIsImN0eCIsInN0YXJ0Q29sb3IiLCJjb2xvciIsImdlbmVyYXRlTmV3IiwidG9TdHJpbmciLCJyYWRpYW4iLCJNYXRoIiwicmFuZG9tIiwiUEkiLCJzcGVlZCIsInJhZGl1cyIsInNldHRpbmdzXzEiLCJtaW4iLCJtYXgiLCJkaXN0YW5jZUNpcmNsZSIsInBvc2l0aW9uIiwieCIsInkiLCJQYXJ0aWNsZSIsImJlZ2luUGF0aCIsImZpbGxTdHlsZSIsImFyYyIsImZpbGwiLCJjb3MiLCJzaW4iLCJkcmF3IiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/Particle.ts\n");

/***/ }),

/***/ "./src/js/animation.ts":
/*!*****************************!*\
  !*** ./src/js/animation.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.animation = void 0;\n\nvar settings_1 = __webpack_require__(/*! ./settings */ \"./src/js/settings.ts\");\n\nvar Particle_1 = __webpack_require__(/*! ./Particle */ \"./src/js/Particle.ts\");\n\nexports.animation = {\n  init: function init(htmlCanvasElement, ctx, center) {\n    this.canvas = htmlCanvasElement;\n    this.ctx = ctx;\n    this.center = center;\n    this.particles = [];\n    this.color = settings_1.settings.colors[Math.floor(Math.random() * settings_1.settings.colors.length)];\n\n    for (var i = 0; i < settings_1.settings.nbParticle; i++) {\n      this.particles.push(new Particle_1.Particle(this.center, this.ctx, this.color));\n    }\n\n    this.animate();\n    return this;\n  },\n  animate: function animate() {\n    var _this = this;\n\n    this.ctx.fillStyle = 'rgba(250,250,250,0.08)';\n    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);\n    this.particles.forEach(function (particle) {\n      particle.update();\n    });\n    requestAnimationFrame(function () {\n      _this.animate();\n    });\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYW5pbWF0aW9uLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQ0E7O0FBRWFBLGlCQUFBQSxHQUFZO0FBQ3JCQyxNQUFJLEVBQUosY0FBS0MsaUJBQUwsRUFBMkNDLEdBQTNDLEVBQTBFQyxNQUExRSxFQUEwRztBQUN0RyxTQUFLQyxNQUFMLEdBQWNILGlCQUFkO0FBQ0EsU0FBS0MsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0UsU0FBTCxHQUFpQixFQUFqQjtBQUNBLFNBQUtDLEtBQUwsR0FBYUMsb0JBQVNDLE1BQVQsQ0FBZ0JDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0JKLG9CQUFTQyxNQUFULENBQWdCSSxNQUEzQyxDQUFoQixDQUFiOztBQUVBLFNBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR04sb0JBQVNPLFVBQTdCLEVBQXlDRCxDQUFDLEVBQTFDLEVBQThDO0FBQzFDLFdBQUtSLFNBQUwsQ0FBZVUsSUFBZixDQUFvQixJQUFJQyxtQkFBSixDQUFhLEtBQUtiLE1BQWxCLEVBQTBCLEtBQUtELEdBQS9CLEVBQW9DLEtBQUtJLEtBQXpDLENBQXBCO0FBRUg7O0FBRUQsU0FBS1csT0FBTDtBQUVBLFdBQU8sSUFBUDtBQUNILEdBaEJvQjtBQWlCckJBLFNBQU8sRUFBUDtBQUFBOztBQUNJLFNBQUtmLEdBQUwsQ0FBU2dCLFNBQVQsR0FBcUIsd0JBQXJCO0FBQ0EsU0FBS2hCLEdBQUwsQ0FBU2lCLFFBQVQsQ0FBa0IsQ0FBbEIsRUFBcUIsQ0FBckIsRUFBd0IsS0FBS2YsTUFBTCxDQUFZZ0IsS0FBcEMsRUFBMkMsS0FBS2hCLE1BQUwsQ0FBWWlCLE1BQXZEO0FBRUEsU0FBS2hCLFNBQUwsQ0FBZWlCLE9BQWYsQ0FBdUIsVUFBQ0MsUUFBRCxFQUFtQjtBQUN0Q0EsY0FBUSxDQUFDQyxNQUFUO0FBQ0gsS0FGRDtBQUlBQyx5QkFBcUIsQ0FBQztBQUNsQkMsV0FBSSxDQUFDVCxPQUFMO0FBQ0gsS0FGb0IsQ0FBckI7QUFHSDtBQTVCb0IsQ0FBWiIsInNvdXJjZXMiOlsid2VicGFjazovL2NpcmN1bGFyLy4vc3JjL2pzL2FuaW1hdGlvbi50cz9jOTI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7c2V0dGluZ3N9IGZyb20gXCIuL3NldHRpbmdzXCI7XG5pbXBvcnQge1BhcnRpY2xlfSBmcm9tIFwiLi9QYXJ0aWNsZVwiO1xuXG5leHBvcnQgY29uc3QgYW5pbWF0aW9uID0ge1xuICAgIGluaXQoaHRtbENhbnZhc0VsZW1lbnQ6IEhUTUxDYW52YXNFbGVtZW50LCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgY2VudGVyOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH0pIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBodG1sQ2FudmFzRWxlbWVudDtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuY2VudGVyID0gY2VudGVyXG4gICAgICAgIHRoaXMucGFydGljbGVzID0gW107XG4gICAgICAgIHRoaXMuY29sb3IgPSBzZXR0aW5ncy5jb2xvcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc2V0dGluZ3MuY29sb3JzLmxlbmd0aCldO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2V0dGluZ3MubmJQYXJ0aWNsZTsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnBhcnRpY2xlcy5wdXNoKG5ldyBQYXJ0aWNsZSh0aGlzLmNlbnRlciwgdGhpcy5jdHgsIHRoaXMuY29sb3IpKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hbmltYXRlKClcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIGFuaW1hdGUoKSB7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDI1MCwyNTAsMjUwLDAuMDgpJztcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG5cbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMuZm9yRWFjaCgocGFydGljbGU6IFBhcnRpY2xlKSA9PiB7XG4gICAgICAgICAgICBwYXJ0aWNsZS51cGRhdGUoKVxuICAgICAgICB9KTtcblxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hbmltYXRlKCk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbn0iXSwibmFtZXMiOlsiZXhwb3J0cyIsImluaXQiLCJodG1sQ2FudmFzRWxlbWVudCIsImN0eCIsImNlbnRlciIsImNhbnZhcyIsInBhcnRpY2xlcyIsImNvbG9yIiwic2V0dGluZ3NfMSIsImNvbG9ycyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsImkiLCJuYlBhcnRpY2xlIiwicHVzaCIsIlBhcnRpY2xlXzEiLCJhbmltYXRlIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJ3aWR0aCIsImhlaWdodCIsImZvckVhY2giLCJwYXJ0aWNsZSIsInVwZGF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIl90aGlzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/animation.ts\n");

/***/ }),

/***/ "./src/js/canvas.ts":
/*!**************************!*\
  !*** ./src/js/canvas.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.canvas = void 0;\nexports.canvas = {\n  init: function init(canvas, ctx, center) {\n    this.canvas = canvas;\n    this.ctx = ctx;\n    this.center = center;\n    this.canvas.width = window.innerWidth;\n    this.canvas.height = window.innerHeight;\n    this.resizeCanvas();\n    this.addEventListeners();\n    return this;\n  },\n  addEventListeners: function addEventListeners() {\n    var _this = this;\n\n    window.addEventListener('resize', function () {\n      _this.resizeCanvas();\n    });\n    window.addEventListener('mousemove', function (e) {\n      _this.center.x = e.x;\n      _this.center.y = e.y;\n    });\n  },\n  resizeCanvas: function resizeCanvas() {\n    this.canvas.width = window.innerWidth;\n    this.canvas.height = window.innerHeight;\n    this.center.x = this.canvas.width / 2;\n    this.center.y = this.canvas.height / 2;\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY2FudmFzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBYUEsY0FBQUEsR0FBUztBQUNsQkMsTUFBSSxFQUFKLGNBQUtDLE1BQUwsRUFBZ0NDLEdBQWhDLEVBQStEQyxNQUEvRCxFQUErRjtBQUMzRixTQUFLRixNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFFQSxTQUFLRixNQUFMLENBQVlHLEtBQVosR0FBb0JDLE1BQU0sQ0FBQ0MsVUFBM0I7QUFDQSxTQUFLTCxNQUFMLENBQVlNLE1BQVosR0FBcUJGLE1BQU0sQ0FBQ0csV0FBNUI7QUFDQSxTQUFLQyxZQUFMO0FBQ0EsU0FBS0MsaUJBQUw7QUFFQSxXQUFPLElBQVA7QUFDSCxHQVppQjtBQWNsQkEsbUJBQWlCLEVBQWpCO0FBQUE7O0FBQ0lMLFVBQU0sQ0FBQ00sZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0M7QUFDOUJDLFdBQUksQ0FBQ0gsWUFBTDtBQUNILEtBRkQ7QUFJQUosVUFBTSxDQUFDTSxnQkFBUCxDQUF3QixXQUF4QixFQUFxQyxVQUFDRSxDQUFELEVBQWM7QUFDL0NELFdBQUksQ0FBQ1QsTUFBTCxDQUFZVyxDQUFaLEdBQWdCRCxDQUFDLENBQUNDLENBQWxCO0FBQ0FGLFdBQUksQ0FBQ1QsTUFBTCxDQUFZWSxDQUFaLEdBQWdCRixDQUFDLENBQUNFLENBQWxCO0FBQ0gsS0FIRDtBQUlILEdBdkJpQjtBQXlCbEJOLGNBQVk7QUFDUixTQUFLUixNQUFMLENBQVlHLEtBQVosR0FBb0JDLE1BQU0sQ0FBQ0MsVUFBM0I7QUFDQSxTQUFLTCxNQUFMLENBQVlNLE1BQVosR0FBcUJGLE1BQU0sQ0FBQ0csV0FBNUI7QUFDQSxTQUFLTCxNQUFMLENBQVlXLENBQVosR0FBZ0IsS0FBS2IsTUFBTCxDQUFZRyxLQUFaLEdBQW9CLENBQXBDO0FBQ0EsU0FBS0QsTUFBTCxDQUFZWSxDQUFaLEdBQWdCLEtBQUtkLE1BQUwsQ0FBWU0sTUFBWixHQUFxQixDQUFyQztBQUNIO0FBOUJpQixDQUFUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2lyY3VsYXIvLi9zcmMvanMvY2FudmFzLnRzPzZiZDkiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGNhbnZhcyA9IHtcbiAgICBpbml0KGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBjZW50ZXI6IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfSkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhc1xuICAgICAgICB0aGlzLmN0eCA9IGN0eFxuICAgICAgICB0aGlzLmNlbnRlciA9IGNlbnRlclxuXG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgdGhpcy5yZXNpemVDYW52YXMoKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfSxcblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZXNpemVDYW52YXMoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNlbnRlci54ID0gZS54O1xuICAgICAgICAgICAgdGhpcy5jZW50ZXIueSA9IGUueTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIHJlc2l6ZUNhbnZhcygpIHtcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICB0aGlzLmNlbnRlci54ID0gdGhpcy5jYW52YXMud2lkdGggLyAyO1xuICAgICAgICB0aGlzLmNlbnRlci55ID0gdGhpcy5jYW52YXMuaGVpZ2h0IC8gMjtcbiAgICB9LFxufSJdLCJuYW1lcyI6WyJleHBvcnRzIiwiaW5pdCIsImNhbnZhcyIsImN0eCIsImNlbnRlciIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwicmVzaXplQ2FudmFzIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJhZGRFdmVudExpc3RlbmVyIiwiX3RoaXMiLCJlIiwieCIsInkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/canvas.ts\n");

/***/ }),

/***/ "./src/js/main.ts":
/*!************************!*\
  !*** ./src/js/main.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\n\nvar canvas_1 = __webpack_require__(/*! ./canvas */ \"./src/js/canvas.ts\");\n\nvar animation_1 = __webpack_require__(/*! ./animation */ \"./src/js/animation.ts\");\n\nvar main = {\n  init: function init() {\n    this.canvasElt = document.getElementById(\"my-canvas\");\n    this.ctx = this.canvasElt.getContext(\"2d\");\n    this.center = {\n      x: this.canvasElt.width / 2,\n      y: this.canvasElt.height / 2\n    };\n    this.canvas = canvas_1.canvas.init(this.canvasElt, this.ctx, this.center);\n    this.animation = animation_1.animation.init(this.canvasElt, this.ctx, this.center);\n  }\n};\nmain.init();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbWFpbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHO0FBQ1RDLE1BQUksRUFBSjtBQUNJLFNBQUtDLFNBQUwsR0FBaUJDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixXQUF4QixDQUFqQjtBQUNBLFNBQUtDLEdBQUwsR0FBVyxLQUFLSCxTQUFMLENBQWVJLFVBQWYsQ0FBMEIsSUFBMUIsQ0FBWDtBQUNBLFNBQUtDLE1BQUwsR0FBYztBQUNWQyxPQUFDLEVBQUUsS0FBS04sU0FBTCxDQUFlTyxLQUFmLEdBQXVCLENBRGhCO0FBRVZDLE9BQUMsRUFBRSxLQUFLUixTQUFMLENBQWVTLE1BQWYsR0FBd0I7QUFGakIsS0FBZDtBQUlBLFNBQUtDLE1BQUwsR0FBY0MsZ0JBQU9aLElBQVAsQ0FBWSxLQUFLQyxTQUFqQixFQUE0QixLQUFLRyxHQUFqQyxFQUFzQyxLQUFLRSxNQUEzQyxDQUFkO0FBQ0EsU0FBS08sU0FBTCxHQUFpQkMsc0JBQVVkLElBQVYsQ0FBZSxLQUFLQyxTQUFwQixFQUErQixLQUFLRyxHQUFwQyxFQUF5QyxLQUFLRSxNQUE5QyxDQUFqQjtBQUNIO0FBVlEsQ0FBYjtBQWFBUCxJQUFJLENBQUNDLElBQUwiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaXJjdWxhci8uL3NyYy9qcy9tYWluLnRzPzRiNzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjYW52YXN9IGZyb20gXCIuL2NhbnZhc1wiO1xuaW1wb3J0IHthbmltYXRpb259IGZyb20gXCIuL2FuaW1hdGlvblwiO1xuXG5jb25zdCBtYWluID0ge1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuY2FudmFzRWx0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteS1jYW52YXNcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXNFbHQuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLmNlbnRlciA9IHtcbiAgICAgICAgICAgIHg6IHRoaXMuY2FudmFzRWx0LndpZHRoIC8gMixcbiAgICAgICAgICAgIHk6IHRoaXMuY2FudmFzRWx0LmhlaWdodCAvIDJcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcy5pbml0KHRoaXMuY2FudmFzRWx0LCB0aGlzLmN0eCwgdGhpcy5jZW50ZXIpO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbiA9IGFuaW1hdGlvbi5pbml0KHRoaXMuY2FudmFzRWx0LCB0aGlzLmN0eCwgdGhpcy5jZW50ZXIpO1xuICAgIH1cbn1cblxubWFpbi5pbml0KCk7Il0sIm5hbWVzIjpbIm1haW4iLCJpbml0IiwiY2FudmFzRWx0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJjZW50ZXIiLCJ4Iiwid2lkdGgiLCJ5IiwiaGVpZ2h0IiwiY2FudmFzIiwiY2FudmFzXzEiLCJhbmltYXRpb24iLCJhbmltYXRpb25fMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/main.ts\n");

/***/ }),

/***/ "./src/js/settings.ts":
/*!****************************!*\
  !*** ./src/js/settings.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.settings = void 0;\n\nvar Hsl_1 = __webpack_require__(/*! ./Hsl */ \"./src/js/Hsl.ts\");\n\nexports.settings = {\n  nbParticle: 20,\n  radius: {\n    min: 2,\n    max: 10\n  },\n  distanceCircle: {\n    min: 2,\n    max: 200\n  },\n  colors: [new Hsl_1.Hsl(217, 100, 21), new Hsl_1.Hsl(98, 100, 21), new Hsl_1.Hsl(340, 100, 50), new Hsl_1.Hsl(44, 100, 50)]\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvc2V0dGluZ3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFFYUEsZ0JBQUFBLEdBQVc7QUFDcEJDLFlBQVUsRUFBRSxFQURRO0FBRXBCQyxRQUFNLEVBQUU7QUFBQ0MsT0FBRyxFQUFFLENBQU47QUFBU0MsT0FBRyxFQUFFO0FBQWQsR0FGWTtBQUdwQkMsZ0JBQWMsRUFBRTtBQUFDRixPQUFHLEVBQUUsQ0FBTjtBQUFTQyxPQUFHLEVBQUU7QUFBZCxHQUhJO0FBSXBCRSxRQUFNLEVBQUUsQ0FDSixJQUFJQyxTQUFKLENBQVEsR0FBUixFQUFhLEdBQWIsRUFBa0IsRUFBbEIsQ0FESSxFQUVKLElBQUlBLFNBQUosQ0FBUSxFQUFSLEVBQVksR0FBWixFQUFpQixFQUFqQixDQUZJLEVBR0osSUFBSUEsU0FBSixDQUFRLEdBQVIsRUFBYSxHQUFiLEVBQWtCLEVBQWxCLENBSEksRUFJSixJQUFJQSxTQUFKLENBQVEsRUFBUixFQUFZLEdBQVosRUFBaUIsRUFBakIsQ0FKSTtBQUpZLENBQVgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaXJjdWxhci8uL3NyYy9qcy9zZXR0aW5ncy50cz9jNDIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SHNsfSBmcm9tIFwiLi9Ic2xcIjtcblxuZXhwb3J0IGNvbnN0IHNldHRpbmdzID0ge1xuICAgIG5iUGFydGljbGU6IDIwLFxuICAgIHJhZGl1czoge21pbjogMiwgbWF4OiAxMH0sXG4gICAgZGlzdGFuY2VDaXJjbGU6IHttaW46IDIsIG1heDogMjAwfSxcbiAgICBjb2xvcnM6IFtcbiAgICAgICAgbmV3IEhzbCgyMTcsIDEwMCwgMjEpLFxuICAgICAgICBuZXcgSHNsKDk4LCAxMDAsIDIxKSxcbiAgICAgICAgbmV3IEhzbCgzNDAsIDEwMCwgNTApLFxuICAgICAgICBuZXcgSHNsKDQ0LCAxMDAsIDUwKVxuICAgIF1cbn07Il0sIm5hbWVzIjpbImV4cG9ydHMiLCJuYlBhcnRpY2xlIiwicmFkaXVzIiwibWluIiwibWF4IiwiZGlzdGFuY2VDaXJjbGUiLCJjb2xvcnMiLCJIc2xfMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/settings.ts\n");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9tYWluLnNjc3MuanMiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2lyY3VsYXIvLi9zcmMvc2Nzcy9tYWluLnNjc3M/ZjdlNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scss/main.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/main": 0,
/******/ 			"css/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcircular"] = self["webpackChunkcircular"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/js/main.ts")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/scss/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;