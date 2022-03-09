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

eval("\n\nexports.__esModule = true;\nexports.Particle = void 0;\n\nvar settings_1 = __webpack_require__(/*! ./settings */ \"./src/js/settings.ts\");\n\nvar Particle = function () {\n  function Particle(center, ctx, startColor) {\n    this.color = startColor.generateNew().toString();\n    this.radian = Math.random() * Math.PI * 2;\n    this.velocity = 0.025;\n    this.radius = settings_1.settings.radius.min + Math.random() * (settings_1.settings.radius.max - settings_1.settings.radius.min);\n    this.distanceCircle = settings_1.settings.distanceCircle.min + Math.random() * settings_1.settings.distanceCircle.max - settings_1.settings.distanceCircle.min;\n    this.center = center;\n    this.position = {\n      x: this.center.x,\n      y: this.center.y\n    };\n    this.ctx = ctx;\n    return this;\n  }\n\n  Particle.prototype.draw = function () {\n    this.ctx.beginPath();\n    this.ctx.fillStyle = this.color;\n    this.ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);\n    this.ctx.fill();\n  };\n\n  Particle.prototype.update = function () {\n    this.position.x = this.center.x + Math.cos(this.radian) * this.distanceCircle;\n    this.position.y = this.center.y + Math.sin(this.radian) * this.distanceCircle;\n    this.radian += this.velocity;\n    this.draw();\n  };\n\n  return Particle;\n}();\n\nexports.Particle = Particle;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvUGFydGljbGUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFHQTtBQVlJLG9CQUFZQSxNQUFaLEVBQThDQyxHQUE5QyxFQUE2RUMsVUFBN0UsRUFBNEY7QUFDeEYsU0FBS0MsS0FBTCxHQUFhRCxVQUFVLENBQUNFLFdBQVgsR0FBeUJDLFFBQXpCLEVBQWI7QUFDQSxTQUFLQyxNQUFMLEdBQWNDLElBQUksQ0FBQ0MsTUFBTCxLQUFnQkQsSUFBSSxDQUFDRSxFQUFyQixHQUEwQixDQUF4QztBQUNBLFNBQUtDLFFBQUwsR0FBZ0IsS0FBaEI7QUFDQSxTQUFLQyxNQUFMLEdBQWNDLG9CQUFTRCxNQUFULENBQWdCRSxHQUFoQixHQUFzQk4sSUFBSSxDQUFDQyxNQUFMLE1BQWlCSSxvQkFBU0QsTUFBVCxDQUFnQkcsR0FBaEIsR0FBc0JGLG9CQUFTRCxNQUFULENBQWdCRSxHQUF2RCxDQUFwQztBQUNBLFNBQUtFLGNBQUwsR0FBc0JILG9CQUFTRyxjQUFULENBQXdCRixHQUF4QixHQUE4Qk4sSUFBSSxDQUFDQyxNQUFMLEtBQWdCSSxvQkFBU0csY0FBVCxDQUF3QkQsR0FBdEUsR0FBNEVGLG9CQUFTRyxjQUFULENBQXdCRixHQUExSDtBQUNBLFNBQUtiLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtnQixRQUFMLEdBQWdCO0FBQUNDLE9BQUMsRUFBRSxLQUFLakIsTUFBTCxDQUFZaUIsQ0FBaEI7QUFBbUJDLE9BQUMsRUFBRSxLQUFLbEIsTUFBTCxDQUFZa0I7QUFBbEMsS0FBaEI7QUFDQSxTQUFLakIsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsV0FBTyxJQUFQO0FBQ0g7O0FBRURrQjtBQUNJLFNBQUtsQixHQUFMLENBQVNtQixTQUFUO0FBQ0EsU0FBS25CLEdBQUwsQ0FBU29CLFNBQVQsR0FBcUIsS0FBS2xCLEtBQTFCO0FBQ0EsU0FBS0YsR0FBTCxDQUFTcUIsR0FBVCxDQUFhLEtBQUtOLFFBQUwsQ0FBY0MsQ0FBM0IsRUFBOEIsS0FBS0QsUUFBTCxDQUFjRSxDQUE1QyxFQUErQyxLQUFLUCxNQUFwRCxFQUE0RCxDQUE1RCxFQUErRCxJQUFJSixJQUFJLENBQUNFLEVBQXhFO0FBQ0EsU0FBS1IsR0FBTCxDQUFTc0IsSUFBVDtBQUNILEdBTEQ7O0FBT0FKO0FBQ0ksU0FBS0gsUUFBTCxDQUFjQyxDQUFkLEdBQWtCLEtBQUtqQixNQUFMLENBQVlpQixDQUFaLEdBQWdCVixJQUFJLENBQUNpQixHQUFMLENBQVMsS0FBS2xCLE1BQWQsSUFBd0IsS0FBS1MsY0FBL0Q7QUFDQSxTQUFLQyxRQUFMLENBQWNFLENBQWQsR0FBa0IsS0FBS2xCLE1BQUwsQ0FBWWtCLENBQVosR0FBZ0JYLElBQUksQ0FBQ2tCLEdBQUwsQ0FBUyxLQUFLbkIsTUFBZCxJQUF3QixLQUFLUyxjQUEvRDtBQUNBLFNBQUtULE1BQUwsSUFBZSxLQUFLSSxRQUFwQjtBQUNBLFNBQUtnQixJQUFMO0FBQ0gsR0FMRDs7QUFPSjtBQUFDLENBdENEOztBQUFhQyxnQkFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaXJjdWxhci8uL3NyYy9qcy9QYXJ0aWNsZS50cz8zOGEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7c2V0dGluZ3N9IGZyb20gXCIuL3NldHRpbmdzXCI7XG5pbXBvcnQge0hzbH0gZnJvbSBcIi4vSHNsXCI7XG5cbmV4cG9ydCBjbGFzcyBQYXJ0aWNsZSB7XG5cbiAgICBwcml2YXRlIHJhZGl1czogbnVtYmVyO1xuICAgIHByaXZhdGUgY2VudGVyOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH07XG4gICAgcHJpdmF0ZSBwb3NpdGlvbjogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9O1xuICAgIHByaXZhdGUgdmVsb2NpdHk6IG51bWJlcjtcbiAgICBwcml2YXRlIGNvbG9yOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgICBwcml2YXRlIHJhZGlhbjogbnVtYmVyO1xuICAgIHByaXZhdGUgZGlzdGFuY2VDaXJjbGU6IG51bWJlcjtcblxuXG4gICAgY29uc3RydWN0b3IoY2VudGVyOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH0sIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBzdGFydENvbG9yOiBIc2wpIHtcbiAgICAgICAgdGhpcy5jb2xvciA9IHN0YXJ0Q29sb3IuZ2VuZXJhdGVOZXcoKS50b1N0cmluZygpO1xuICAgICAgICB0aGlzLnJhZGlhbiA9IE1hdGgucmFuZG9tKCkgKiBNYXRoLlBJICogMjtcbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IDAuMDI1O1xuICAgICAgICB0aGlzLnJhZGl1cyA9IHNldHRpbmdzLnJhZGl1cy5taW4gKyBNYXRoLnJhbmRvbSgpICogKHNldHRpbmdzLnJhZGl1cy5tYXggLSBzZXR0aW5ncy5yYWRpdXMubWluKTtcbiAgICAgICAgdGhpcy5kaXN0YW5jZUNpcmNsZSA9IHNldHRpbmdzLmRpc3RhbmNlQ2lyY2xlLm1pbiArIE1hdGgucmFuZG9tKCkgKiBzZXR0aW5ncy5kaXN0YW5jZUNpcmNsZS5tYXggLSBzZXR0aW5ncy5kaXN0YW5jZUNpcmNsZS5taW47XG4gICAgICAgIHRoaXMuY2VudGVyID0gY2VudGVyO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge3g6IHRoaXMuY2VudGVyLngsIHk6IHRoaXMuY2VudGVyLnl9XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgdGhpcy5jdHguYXJjKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLnJhZGl1cywgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSB0aGlzLmNlbnRlci54ICsgTWF0aC5jb3ModGhpcy5yYWRpYW4pICogdGhpcy5kaXN0YW5jZUNpcmNsZTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gdGhpcy5jZW50ZXIueSArIE1hdGguc2luKHRoaXMucmFkaWFuKSAqIHRoaXMuZGlzdGFuY2VDaXJjbGU7XG4gICAgICAgIHRoaXMucmFkaWFuICs9IHRoaXMudmVsb2NpdHk7XG4gICAgICAgIHRoaXMuZHJhdygpXG4gICAgfVxuXG59Il0sIm5hbWVzIjpbImNlbnRlciIsImN0eCIsInN0YXJ0Q29sb3IiLCJjb2xvciIsImdlbmVyYXRlTmV3IiwidG9TdHJpbmciLCJyYWRpYW4iLCJNYXRoIiwicmFuZG9tIiwiUEkiLCJ2ZWxvY2l0eSIsInJhZGl1cyIsInNldHRpbmdzXzEiLCJtaW4iLCJtYXgiLCJkaXN0YW5jZUNpcmNsZSIsInBvc2l0aW9uIiwieCIsInkiLCJQYXJ0aWNsZSIsImJlZ2luUGF0aCIsImZpbGxTdHlsZSIsImFyYyIsImZpbGwiLCJjb3MiLCJzaW4iLCJkcmF3IiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/Particle.ts\n");

/***/ }),

/***/ "./src/js/animation.ts":
/*!*****************************!*\
  !*** ./src/js/animation.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.animation = void 0;\n\nvar Particle_1 = __webpack_require__(/*! ./Particle */ \"./src/js/Particle.ts\");\n\nvar settings_1 = __webpack_require__(/*! ./settings */ \"./src/js/settings.ts\");\n\nexports.animation = {\n  init: function init(htmlCanvasElement, ctx, center) {\n    this.canvas = htmlCanvasElement;\n    this.particles = [];\n    this.ctx = ctx;\n    this.center = center;\n    this.color = settings_1.settings.colors[Math.floor(Math.random() * settings_1.settings.colors.length)];\n    console.log(this.color);\n\n    for (var i = 0; i < settings_1.settings.nbParticle; i++) {\n      this.particles.push(new Particle_1.Particle(this.center, this.ctx, this.color));\n    }\n\n    return this;\n  },\n  animate: function animate() {\n    var _this = this;\n\n    this.ctx.fillStyle = 'rgba(250,250,250,0.08)';\n    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);\n    this.particles.forEach(function (particle) {\n      particle.update();\n    });\n    requestAnimationFrame(function () {\n      _this.animate();\n    });\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYW5pbWF0aW9uLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUE7O0FBRWFBLGlCQUFBQSxHQUFZO0FBQ3JCQyxNQUFJLEVBQUosY0FBS0MsaUJBQUwsRUFBMkNDLEdBQTNDLEVBQTBFQyxNQUExRSxFQUEwRztBQUN0RyxTQUFLQyxNQUFMLEdBQWNILGlCQUFkO0FBQ0EsU0FBS0ksU0FBTCxHQUFpQixFQUFqQjtBQUNBLFNBQUtILEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtHLEtBQUwsR0FBYUMsb0JBQVNDLE1BQVQsQ0FBZ0JDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0JKLG9CQUFTQyxNQUFULENBQWdCSSxNQUEzQyxDQUFoQixDQUFiO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtSLEtBQWpCOztBQUNBLFNBQUssSUFBSVMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR1Isb0JBQVNTLFVBQTdCLEVBQXlDRCxDQUFDLEVBQTFDLEVBQThDO0FBQzFDLFdBQUtWLFNBQUwsQ0FBZVksSUFBZixDQUFvQixJQUFJQyxtQkFBSixDQUFhLEtBQUtmLE1BQWxCLEVBQTBCLEtBQUtELEdBQS9CLEVBQW9DLEtBQUtJLEtBQXpDLENBQXBCO0FBRUg7O0FBQ0QsV0FBTyxJQUFQO0FBQ0gsR0Fib0I7QUFjckJhLFNBQU8sRUFBUDtBQUFBOztBQUNJLFNBQUtqQixHQUFMLENBQVNrQixTQUFULEdBQXFCLHdCQUFyQjtBQUNBLFNBQUtsQixHQUFMLENBQVNtQixRQUFULENBQWtCLENBQWxCLEVBQXFCLENBQXJCLEVBQXdCLEtBQUtqQixNQUFMLENBQVlrQixLQUFwQyxFQUEyQyxLQUFLbEIsTUFBTCxDQUFZbUIsTUFBdkQ7QUFDQSxTQUFLbEIsU0FBTCxDQUFlbUIsT0FBZixDQUF1QixVQUFDQyxRQUFELEVBQW1CO0FBQ3RDQSxjQUFRLENBQUNDLE1BQVQ7QUFDSCxLQUZEO0FBR0FDLHlCQUFxQixDQUFDO0FBQ2xCQyxXQUFJLENBQUNULE9BQUw7QUFDSCxLQUZvQixDQUFyQjtBQUlIO0FBeEJvQixDQUFaIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2lyY3VsYXIvLi9zcmMvanMvYW5pbWF0aW9uLnRzP2M5MjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQYXJ0aWNsZX0gZnJvbSBcIi4vUGFydGljbGVcIjtcbmltcG9ydCB7Y2FudmFzfSBmcm9tIFwiLi9jYW52YXNcIjtcbmltcG9ydCB7c2V0dGluZ3N9IGZyb20gXCIuL3NldHRpbmdzXCI7XG5cbmV4cG9ydCBjb25zdCBhbmltYXRpb24gPSB7XG4gICAgaW5pdChodG1sQ2FudmFzRWxlbWVudDogSFRNTENhbnZhc0VsZW1lbnQsIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBjZW50ZXI6IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfSkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGh0bWxDYW52YXNFbGVtZW50O1xuICAgICAgICB0aGlzLnBhcnRpY2xlcyA9IFtdO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5jZW50ZXIgPSBjZW50ZXI7XG4gICAgICAgIHRoaXMuY29sb3IgPSBzZXR0aW5ncy5jb2xvcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc2V0dGluZ3MuY29sb3JzLmxlbmd0aCldO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNvbG9yKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXR0aW5ncy5uYlBhcnRpY2xlOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMucGFydGljbGVzLnB1c2gobmV3IFBhcnRpY2xlKHRoaXMuY2VudGVyLCB0aGlzLmN0eCwgdGhpcy5jb2xvcikpO1xuXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBhbmltYXRlKCkge1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAncmdiYSgyNTAsMjUwLDI1MCwwLjA4KSc7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLnBhcnRpY2xlcy5mb3JFYWNoKChwYXJ0aWNsZTogUGFydGljbGUpID0+IHtcbiAgICAgICAgICAgIHBhcnRpY2xlLnVwZGF0ZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZSgpO1xuICAgICAgICB9KTtcblxuICAgIH0sXG5cbn0iXSwibmFtZXMiOlsiZXhwb3J0cyIsImluaXQiLCJodG1sQ2FudmFzRWxlbWVudCIsImN0eCIsImNlbnRlciIsImNhbnZhcyIsInBhcnRpY2xlcyIsImNvbG9yIiwic2V0dGluZ3NfMSIsImNvbG9ycyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJpIiwibmJQYXJ0aWNsZSIsInB1c2giLCJQYXJ0aWNsZV8xIiwiYW5pbWF0ZSIsImZpbGxTdHlsZSIsImZpbGxSZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJmb3JFYWNoIiwicGFydGljbGUiLCJ1cGRhdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJfdGhpcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/animation.ts\n");

/***/ }),

/***/ "./src/js/canvas.ts":
/*!**************************!*\
  !*** ./src/js/canvas.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.canvas = void 0;\nexports.canvas = {\n  init: function init(canvas, ctx, center) {\n    this.canvas = canvas;\n    this.ctx = ctx;\n    this.center = center;\n    this.canvas.width = window.innerWidth;\n    this.canvas.height = window.innerHeight;\n    this.resizeCanvas();\n    this.addEventListeners();\n    return this;\n  },\n  addEventListeners: function addEventListeners() {\n    var _this = this;\n\n    window.addEventListener('resize', function () {\n      _this.resizeCanvas();\n    });\n    window.addEventListener('mousemove', function (event) {\n      _this.center.y = event.y;\n      _this.center.x = event.x;\n    });\n  },\n  resizeCanvas: function resizeCanvas() {\n    this.canvas.width = window.innerWidth;\n    this.canvas.height = window.innerHeight;\n    this.center.x = this.canvas.width / 2;\n    this.center.y = this.canvas.height / 2;\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY2FudmFzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBYUEsY0FBQUEsR0FBUztBQUNsQkMsTUFBSSxFQUFKLGNBQUtDLE1BQUwsRUFBZ0NDLEdBQWhDLEVBQStEQyxNQUEvRCxFQUErRjtBQUMzRixTQUFLRixNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLRixNQUFMLENBQVlHLEtBQVosR0FBb0JDLE1BQU0sQ0FBQ0MsVUFBM0I7QUFDQSxTQUFLTCxNQUFMLENBQVlNLE1BQVosR0FBcUJGLE1BQU0sQ0FBQ0csV0FBNUI7QUFDQSxTQUFLQyxZQUFMO0FBQ0EsU0FBS0MsaUJBQUw7QUFDQSxXQUFPLElBQVA7QUFDSCxHQVZpQjtBQVdsQkEsbUJBQWlCLEVBQWpCO0FBQUE7O0FBQ0lMLFVBQU0sQ0FBQ00sZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0M7QUFDOUJDLFdBQUksQ0FBQ0gsWUFBTDtBQUNILEtBRkQ7QUFHQUosVUFBTSxDQUFDTSxnQkFBUCxDQUF3QixXQUF4QixFQUFxQyxVQUFDRSxLQUFELEVBQWtCO0FBQ25ERCxXQUFJLENBQUNULE1BQUwsQ0FBWVcsQ0FBWixHQUFnQkQsS0FBSyxDQUFDQyxDQUF0QjtBQUNBRixXQUFJLENBQUNULE1BQUwsQ0FBWVksQ0FBWixHQUFnQkYsS0FBSyxDQUFDRSxDQUF0QjtBQUNILEtBSEQ7QUFJSCxHQW5CaUI7QUFvQmxCTixjQUFZO0FBQ1IsU0FBS1IsTUFBTCxDQUFZRyxLQUFaLEdBQW9CQyxNQUFNLENBQUNDLFVBQTNCO0FBQ0EsU0FBS0wsTUFBTCxDQUFZTSxNQUFaLEdBQXFCRixNQUFNLENBQUNHLFdBQTVCO0FBQ0EsU0FBS0wsTUFBTCxDQUFZWSxDQUFaLEdBQWdCLEtBQUtkLE1BQUwsQ0FBWUcsS0FBWixHQUFvQixDQUFwQztBQUNBLFNBQUtELE1BQUwsQ0FBWVcsQ0FBWixHQUFnQixLQUFLYixNQUFMLENBQVlNLE1BQVosR0FBcUIsQ0FBckM7QUFDSDtBQXpCaUIsQ0FBVCIsInNvdXJjZXMiOlsid2VicGFjazovL2NpcmN1bGFyLy4vc3JjL2pzL2NhbnZhcy50cz82YmQ5Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBjYW52YXMgPSB7XG4gICAgaW5pdChjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgY2VudGVyOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH0pIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmNlbnRlciA9IGNlbnRlcjtcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICB0aGlzLnJlc2l6ZUNhbnZhcygpO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlc2l6ZUNhbnZhcygpO1xuICAgICAgICB9KTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jZW50ZXIueSA9IGV2ZW50Lnk7XG4gICAgICAgICAgICB0aGlzLmNlbnRlci54ID0gZXZlbnQueDtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICByZXNpemVDYW52YXMoKSB7XG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgdGhpcy5jZW50ZXIueCA9IHRoaXMuY2FudmFzLndpZHRoIC8gMjtcbiAgICAgICAgdGhpcy5jZW50ZXIueSA9IHRoaXMuY2FudmFzLmhlaWdodCAvIDI7XG4gICAgfSxcbn0iXSwibmFtZXMiOlsiZXhwb3J0cyIsImluaXQiLCJjYW52YXMiLCJjdHgiLCJjZW50ZXIiLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsInJlc2l6ZUNhbnZhcyIsImFkZEV2ZW50TGlzdGVuZXJzIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl90aGlzIiwiZXZlbnQiLCJ5IiwieCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/canvas.ts\n");

/***/ }),

/***/ "./src/js/main.ts":
/*!************************!*\
  !*** ./src/js/main.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\n\nvar canvas_1 = __webpack_require__(/*! ./canvas */ \"./src/js/canvas.ts\");\n\nvar animation_1 = __webpack_require__(/*! ./animation */ \"./src/js/animation.ts\");\n\nvar app = {\n  init: function init(htmlCanvasElement) {\n    this.htmlCanvasElement = htmlCanvasElement;\n    this.ctx = this.htmlCanvasElement.getContext(\"2d\");\n    this.center = {\n      x: this.htmlCanvasElement.width / 2,\n      y: this.htmlCanvasElement.height / 2\n    };\n    this.canvas = canvas_1.canvas.init(htmlCanvasElement, this.ctx, this.center);\n    this.animation = animation_1.animation.init(this.htmlCanvasElement, this.ctx, this.center);\n    this.animation.animate();\n  }\n};\napp.init(document.getElementById(\"my-canvas\"));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbWFpbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBRUE7O0FBRUEsSUFBTUEsR0FBRyxHQUFHO0FBQ1JDLE1BQUksRUFBSixjQUFLQyxpQkFBTCxFQUF5QztBQUNyQyxTQUFLQSxpQkFBTCxHQUF5QkEsaUJBQXpCO0FBQ0EsU0FBS0MsR0FBTCxHQUFXLEtBQUtELGlCQUFMLENBQXVCRSxVQUF2QixDQUFrQyxJQUFsQyxDQUFYO0FBQ0EsU0FBS0MsTUFBTCxHQUFjO0FBQUNDLE9BQUMsRUFBRSxLQUFLSixpQkFBTCxDQUF1QkssS0FBdkIsR0FBK0IsQ0FBbkM7QUFBc0NDLE9BQUMsRUFBRSxLQUFLTixpQkFBTCxDQUF1Qk8sTUFBdkIsR0FBZ0M7QUFBekUsS0FBZDtBQUNBLFNBQUtDLE1BQUwsR0FBY0MsZ0JBQU9WLElBQVAsQ0FBWUMsaUJBQVosRUFBK0IsS0FBS0MsR0FBcEMsRUFBeUMsS0FBS0UsTUFBOUMsQ0FBZDtBQUNBLFNBQUtPLFNBQUwsR0FBaUJDLHNCQUFVWixJQUFWLENBQWUsS0FBS0MsaUJBQXBCLEVBQXVDLEtBQUtDLEdBQTVDLEVBQWlELEtBQUtFLE1BQXRELENBQWpCO0FBQ0EsU0FBS08sU0FBTCxDQUFlRSxPQUFmO0FBQ0g7QUFSTyxDQUFaO0FBV0FkLEdBQUcsQ0FBQ0MsSUFBSixDQUFTYyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBVCIsInNvdXJjZXMiOlsid2VicGFjazovL2NpcmN1bGFyLy4vc3JjL2pzL21haW4udHM/NGI3MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NhbnZhc30gZnJvbSBcIi4vY2FudmFzXCI7XG5pbXBvcnQge1BhcnRpY2xlfSBmcm9tIFwiLi9QYXJ0aWNsZVwiO1xuaW1wb3J0IHthbmltYXRpb259IGZyb20gXCIuL2FuaW1hdGlvblwiO1xuXG5jb25zdCBhcHAgPSB7XG4gICAgaW5pdChodG1sQ2FudmFzRWxlbWVudDogSFRNTENhbnZhc0VsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5odG1sQ2FudmFzRWxlbWVudCA9IGh0bWxDYW52YXNFbGVtZW50O1xuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuaHRtbENhbnZhc0VsZW1lbnQuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLmNlbnRlciA9IHt4OiB0aGlzLmh0bWxDYW52YXNFbGVtZW50LndpZHRoIC8gMiwgeTogdGhpcy5odG1sQ2FudmFzRWxlbWVudC5oZWlnaHQgLyAyfVxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcy5pbml0KGh0bWxDYW52YXNFbGVtZW50LCB0aGlzLmN0eCwgdGhpcy5jZW50ZXIpO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbiA9IGFuaW1hdGlvbi5pbml0KHRoaXMuaHRtbENhbnZhc0VsZW1lbnQsIHRoaXMuY3R4LCB0aGlzLmNlbnRlcik7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uLmFuaW1hdGUoKTtcbiAgICB9XG59XG5cbmFwcC5pbml0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXktY2FudmFzXCIpIGFzIEhUTUxDYW52YXNFbGVtZW50KTsiXSwibmFtZXMiOlsiYXBwIiwiaW5pdCIsImh0bWxDYW52YXNFbGVtZW50IiwiY3R4IiwiZ2V0Q29udGV4dCIsImNlbnRlciIsIngiLCJ3aWR0aCIsInkiLCJoZWlnaHQiLCJjYW52YXMiLCJjYW52YXNfMSIsImFuaW1hdGlvbiIsImFuaW1hdGlvbl8xIiwiYW5pbWF0ZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/main.ts\n");

/***/ }),

/***/ "./src/js/settings.ts":
/*!****************************!*\
  !*** ./src/js/settings.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.settings = void 0;\n\nvar Hsl_1 = __webpack_require__(/*! ./Hsl */ \"./src/js/Hsl.ts\");\n\nexports.settings = {\n  nbParticle: 20,\n  radius: {\n    min: 2,\n    max: 10\n  },\n  distanceCircle: {\n    min: 1,\n    max: 200\n  },\n  colors: [new Hsl_1.Hsl(217, 100, 21), new Hsl_1.Hsl(98, 100, 21), new Hsl_1.Hsl(340, 100, 50), new Hsl_1.Hsl(44, 100, 50)]\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvc2V0dGluZ3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFFYUEsZ0JBQUFBLEdBQVc7QUFDcEJDLFlBQVUsRUFBRSxFQURRO0FBRXBCQyxRQUFNLEVBQUU7QUFBQ0MsT0FBRyxFQUFFLENBQU47QUFBU0MsT0FBRyxFQUFFO0FBQWQsR0FGWTtBQUdwQkMsZ0JBQWMsRUFBRTtBQUFDRixPQUFHLEVBQUUsQ0FBTjtBQUFTQyxPQUFHLEVBQUU7QUFBZCxHQUhJO0FBSXBCRSxRQUFNLEVBQUUsQ0FBQyxJQUFJQyxTQUFKLENBQVEsR0FBUixFQUFhLEdBQWIsRUFBa0IsRUFBbEIsQ0FBRCxFQUF1QixJQUFJQSxTQUFKLENBQVEsRUFBUixFQUFZLEdBQVosRUFBaUIsRUFBakIsQ0FBdkIsRUFBNkMsSUFBSUEsU0FBSixDQUFRLEdBQVIsRUFBYSxHQUFiLEVBQWtCLEVBQWxCLENBQTdDLEVBQW9FLElBQUlBLFNBQUosQ0FBUSxFQUFSLEVBQVksR0FBWixFQUFpQixFQUFqQixDQUFwRTtBQUpZLENBQVgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaXJjdWxhci8uL3NyYy9qcy9zZXR0aW5ncy50cz9jNDIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SHNsfSBmcm9tIFwiLi9Ic2xcIjtcblxuZXhwb3J0IGNvbnN0IHNldHRpbmdzID0ge1xuICAgIG5iUGFydGljbGU6IDIwLFxuICAgIHJhZGl1czoge21pbjogMiwgbWF4OiAxMH0sXG4gICAgZGlzdGFuY2VDaXJjbGU6IHttaW46IDEsIG1heDogMjAwfSxcbiAgICBjb2xvcnM6IFtuZXcgSHNsKDIxNywgMTAwLCAyMSksbmV3IEhzbCg5OCwgMTAwLCAyMSksIG5ldyBIc2woMzQwLCAxMDAsIDUwKSwgbmV3IEhzbCg0NCwgMTAwLCA1MCldXG59OyJdLCJuYW1lcyI6WyJleHBvcnRzIiwibmJQYXJ0aWNsZSIsInJhZGl1cyIsIm1pbiIsIm1heCIsImRpc3RhbmNlQ2lyY2xlIiwiY29sb3JzIiwiSHNsXzEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/settings.ts\n");

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