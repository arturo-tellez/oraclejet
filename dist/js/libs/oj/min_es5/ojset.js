/**
 * @license
 * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 * @ignore
 */
"use strict";define(["ojs/ojcore","ojs/ojkeysetimpl"],function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(){function e(n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.initialKeys=n;var s=this;this._set=new Set,this._keyset=new t,n&&n.forEach(function(e){s.add(e)}),Object.defineProperty(this,"size",{get:function(){return this._set.size}}),this[Symbol.iterator]=function(){return this._set[Symbol.iterator]()}}var s,i,r;return s=e,(i=[{key:"clear",value:function(){this._set.clear(),this._keyset._keys.clear()}},{key:"delete",value:function(e){var t=this._keyset.get(e);return t!==this._keyset.NOT_A_KEY&&(this._keyset._keys.delete(t),this._set.delete(t))}},{key:"forEach",value:function(e,t){this._set.forEach(e,t)}},{key:"keys",value:function(){return this._set.keys()}},{key:"values",value:function(){return this._set.values()}},{key:"entries",value:function(){return this._set.entries()}},{key:"has",value:function(e){return this._keyset.has(e)}},{key:"add",value:function(e){return this._keyset.get(e)===this._keyset.NOT_A_KEY&&(this._keyset._keys.add(e),this._set.add(e)),this}},{key:Symbol.toStringTag,get:function(){return Set[Symbol.toStringTag]()}}])&&n(s.prototype,i),r&&n(s,r),e}()});