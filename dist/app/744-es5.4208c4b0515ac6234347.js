!function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function e(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(self.webpackChunkverifik_sdk_app=self.webpackChunkverifik_sdk_app||[]).push([[744],{7539:function(t,e,n){"use strict";n.d(e,{p9:function(){return c}}),n(39490);var o=n(37716),i=(n(3679),n(72458)),a=(n(46237),n(18553));n(34564);var u,s=((u=function t(){r(this,t)}).\u0275fac=function(t){return new(t||u)},u.\u0275mod=o.oAB({type:u}),u.\u0275inj=o.cJS({}),u),c=function(){var t=function t(){r(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[i.si,i.BQ,a.Q8,s],i.BQ,s]}),t}()},99263:function(t,e,n){"use strict";n.d(e,{NY:function(){return a}});var o=n(37716);n(6877);var i,a=((i=function t(){r(this,t)}).\u0275fac=function(t){return new(t||i)},i.\u0275mod=o.oAB({type:i}),i.\u0275inj=o.cJS({providers:[]}),i)},78333:function(t){"use strict";var e={single_source_shortest_paths:function(t,r,n){var o={},i={};i[r]=0;var a,u,s,c,f,h,d=e.PriorityQueue.make();for(d.push(r,0);!d.empty();)for(s in c=(a=d.pop()).cost,f=t[u=a.value]||{})f.hasOwnProperty(s)&&(h=c+f[s],(void 0===i[s]||i[s]>h)&&(i[s]=h,d.push(s,h),o[s]=u));if(void 0!==n&&void 0===i[n]){var l=["Could not find a path from ",r," to ",n,"."].join("");throw new Error(l)}return o},extract_shortest_path_from_predecessor_list:function(t,e){for(var r=[],n=e;n;)r.push(n),n=t[n];return r.reverse(),r},find_path:function(t,r,n){var o=e.single_source_shortest_paths(t,r,n);return e.extract_shortest_path_from_predecessor_list(o,n)},PriorityQueue:{make:function(t){var r,n=e.PriorityQueue,o={};for(r in t=t||{},n)n.hasOwnProperty(r)&&(o[r]=n[r]);return o.queue=[],o.sorter=t.sorter||n.default_sorter,o},default_sorter:function(t,e){return t.cost-e.cost},push:function(t,e){this.queue.push({value:t,cost:e}),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};t.exports=e},11522:function(t){"use strict";t.exports=function(t){for(var e=[],r=t.length,n=0;n<r;n++){var o=t.charCodeAt(n);if(o>=55296&&o<=56319&&r>n+1){var i=t.charCodeAt(n+1);i>=56320&&i<=57343&&(o=1024*(o-55296)+i-56320+65536,n+=1)}o<128?e.push(o):o<2048?(e.push(o>>6|192),e.push(63&o|128)):o<55296||o>=57344&&o<65536?(e.push(o>>12|224),e.push(o>>6&63|128),e.push(63&o|128)):o>=65536&&o<=1114111?(e.push(o>>18|240),e.push(o>>12&63|128),e.push(o>>6&63|128),e.push(63&o|128)):e.push(239,191,189)}return new Uint8Array(e).buffer}},6877:function(t,e,r){var n=r(50436),o=r(51191),i=r(32158),a=r(173);function u(t,e,r,i,a){var u=[].slice.call(arguments,1),s=u.length,c="function"==typeof u[s-1];if(!c&&!n())throw new Error("Callback required as last argument");if(!c){if(s<1)throw new Error("Too few arguments provided");return 1===s?(r=e,e=i=void 0):2===s&&!e.getContext&&(i=r,r=e,e=void 0),new Promise(function(n,a){try{var u=o.create(r,i);n(t(u,e,i))}catch(u){a(u)}})}if(s<2)throw new Error("Too few arguments provided");2===s?(a=r,r=e,e=i=void 0):3===s&&(e.getContext&&void 0===a?(a=i,i=void 0):(a=i,i=r,r=e,e=void 0));try{var f=o.create(r,i);a(null,t(f,e,i))}catch(f){a(f)}}u.bind(null,i.render),u.bind(null,i.renderToDataURL),u.bind(null,function(t,e,r){return a.render(t,r)})},50436:function(t){t.exports=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then}},76448:function(t,e,r){var n=r(55402).getSymbolSize;e.getRowColCoords=function(t){if(1===t)return[];for(var e=Math.floor(t/7)+2,r=n(t),o=145===r?26:2*Math.ceil((r-13)/(2*e-2)),i=[r-7],a=1;a<e-1;a++)i[a]=i[a-1]-o;return i.push(6),i.reverse()},e.getPositions=function(t){for(var r=[],n=e.getRowColCoords(t),o=n.length,i=0;i<o;i++)for(var a=0;a<o;a++)0===i&&0===a||0===i&&a===o-1||i===o-1&&0===a||r.push([n[i],n[a]]);return r}},42793:function(t,e,r){var n=r(93141),o=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function i(t){this.mode=n.ALPHANUMERIC,this.data=t}i.getBitsLength=function(t){return 11*Math.floor(t/2)+t%2*6},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(t){var e;for(e=0;e+2<=this.data.length;e+=2){var r=45*o.indexOf(this.data[e]);r+=o.indexOf(this.data[e+1]),t.put(r,11)}this.data.length%2&&t.put(o.indexOf(this.data[e]),6)},t.exports=i},57258:function(t){function e(){this.buffer=[],this.length=0}e.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var r=0;r<e;r++)this.putBit(1==(t>>>e-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}},t.exports=e},8104:function(t){function e(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}e.prototype.set=function(t,e,r,n){var o=t*this.size+e;this.data[o]=r,n&&(this.reservedBit[o]=!0)},e.prototype.get=function(t,e){return this.data[t*this.size+e]},e.prototype.xor=function(t,e,r){this.data[t*this.size+e]^=r},e.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]},t.exports=e},62860:function(t,e,r){var n=r(11522),o=r(93141);function i(t){this.mode=o.BYTE,this.data=new Uint8Array(n(t))}i.getBitsLength=function(t){return 8*t},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(t){for(var e=0,r=this.data.length;e<r;e++)t.put(this.data[e],8)},t.exports=i},67291:function(t,e,r){var n=r(3997),o=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],i=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];e.getBlocksCount=function(t,e){switch(e){case n.L:return o[4*(t-1)+0];case n.M:return o[4*(t-1)+1];case n.Q:return o[4*(t-1)+2];case n.H:return o[4*(t-1)+3];default:return}},e.getTotalCodewordsCount=function(t,e){switch(e){case n.L:return i[4*(t-1)+0];case n.M:return i[4*(t-1)+1];case n.Q:return i[4*(t-1)+2];case n.H:return i[4*(t-1)+3];default:return}}},3997:function(t,e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2},e.isValid=function(t){return t&&void 0!==t.bit&&t.bit>=0&&t.bit<4},e.from=function(t,r){if(e.isValid(t))return t;try{return function(t){if("string"!=typeof t)throw new Error("Param is not a string");switch(t.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+t)}}(t)}catch(n){return r}}},21224:function(t,e,r){var n=r(55402).getSymbolSize;e.getPositions=function(t){var e=n(t);return[[0,0],[e-7,0],[0,e-7]]}},34482:function(t,e,r){var n=r(55402),o=n.getBCHDigit(1335);e.getEncodedBits=function(t,e){for(var r=t.bit<<3|e,i=r<<10;n.getBCHDigit(i)-o>=0;)i^=1335<<n.getBCHDigit(i)-o;return 21522^(r<<10|i)}},10567:function(t,e){var r=new Uint8Array(512),n=new Uint8Array(256);(function(){for(var t=1,e=0;e<255;e++)r[e]=t,n[t]=e,256&(t<<=1)&&(t^=285);for(var o=255;o<512;o++)r[o]=r[o-255]})(),e.log=function(t){if(t<1)throw new Error("log("+t+")");return n[t]},e.exp=function(t){return r[t]},e.mul=function(t,e){return 0===t||0===e?0:r[n[t]+n[e]]}},51909:function(t,e,r){var n=r(93141),o=r(55402);function i(t){this.mode=n.KANJI,this.data=t}i.getBitsLength=function(t){return 13*t},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(t){var e;for(e=0;e<this.data.length;e++){var r=o.toSJIS(this.data[e]);if(r>=33088&&r<=40956)r-=33088;else{if(!(r>=57408&&r<=60351))throw new Error("Invalid SJIS character: "+this.data[e]+"\nMake sure your charset is UTF-8");r-=49472}r=192*(r>>>8&255)+(255&r),t.put(r,13)}},t.exports=i},41976:function(t,e){function r(t,r,n){switch(t){case e.Patterns.PATTERN000:return(r+n)%2==0;case e.Patterns.PATTERN001:return r%2==0;case e.Patterns.PATTERN010:return n%3==0;case e.Patterns.PATTERN011:return(r+n)%3==0;case e.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(n/3))%2==0;case e.Patterns.PATTERN101:return r*n%2+r*n%3==0;case e.Patterns.PATTERN110:return(r*n%2+r*n%3)%2==0;case e.Patterns.PATTERN111:return(r*n%3+(r+n)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}}e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},e.isValid=function(t){return null!=t&&""!==t&&!isNaN(t)&&t>=0&&t<=7},e.from=function(t){return e.isValid(t)?parseInt(t,10):void 0},e.getPenaltyN1=function(t){for(var e=t.size,r=0,n=0,o=0,i=null,a=null,u=0;u<e;u++){n=o=0,i=a=null;for(var s=0;s<e;s++){var c=t.get(u,s);c===i?n++:(n>=5&&(r+=n-5+3),i=c,n=1),(c=t.get(s,u))===a?o++:(o>=5&&(r+=o-5+3),a=c,o=1)}n>=5&&(r+=n-5+3),o>=5&&(r+=o-5+3)}return r},e.getPenaltyN2=function(t){for(var e=t.size,r=0,n=0;n<e-1;n++)for(var o=0;o<e-1;o++){var i=t.get(n,o)+t.get(n,o+1)+t.get(n+1,o)+t.get(n+1,o+1);(4===i||0===i)&&r++}return 3*r},e.getPenaltyN3=function(t){for(var e=t.size,r=0,n=0,o=0,i=0;i<e;i++){n=o=0;for(var a=0;a<e;a++)n=n<<1&2047|t.get(i,a),a>=10&&(1488===n||93===n)&&r++,o=o<<1&2047|t.get(a,i),a>=10&&(1488===o||93===o)&&r++}return 40*r},e.getPenaltyN4=function(t){for(var e=0,r=t.data.length,n=0;n<r;n++)e+=t.data[n];return 10*Math.abs(Math.ceil(100*e/r/5)-10)},e.applyMask=function(t,e){for(var n=e.size,o=0;o<n;o++)for(var i=0;i<n;i++)e.isReserved(i,o)||e.xor(i,o,r(t,i,o))},e.getBestMask=function(t,r){for(var n=Object.keys(e.Patterns).length,o=0,i=1/0,a=0;a<n;a++){r(a),e.applyMask(a,t);var u=e.getPenaltyN1(t)+e.getPenaltyN2(t)+e.getPenaltyN3(t)+e.getPenaltyN4(t);e.applyMask(a,t),u<i&&(i=u,o=a)}return o}},93141:function(t,e,r){var n=r(74200),o=r(22679);e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(t,e){if(!t.ccBits)throw new Error("Invalid mode: "+t);if(!n.isValid(e))throw new Error("Invalid version: "+e);return e>=1&&e<10?t.ccBits[0]:e<27?t.ccBits[1]:t.ccBits[2]},e.getBestModeForData=function(t){return o.testNumeric(t)?e.NUMERIC:o.testAlphanumeric(t)?e.ALPHANUMERIC:o.testKanji(t)?e.KANJI:e.BYTE},e.toString=function(t){if(t&&t.id)return t.id;throw new Error("Invalid mode")},e.isValid=function(t){return t&&t.bit&&t.ccBits},e.from=function(t,r){if(e.isValid(t))return t;try{return function(t){if("string"!=typeof t)throw new Error("Param is not a string");switch(t.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+t)}}(t)}catch(n){return r}}},50580:function(t,e,r){var n=r(93141);function o(t){this.mode=n.NUMERIC,this.data=t.toString()}o.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(t){var e,r,n;for(e=0;e+3<=this.data.length;e+=3)r=this.data.substr(e,3),n=parseInt(r,10),t.put(n,10);var o=this.data.length-e;o>0&&(r=this.data.substr(e),n=parseInt(r,10),t.put(n,3*o+1))},t.exports=o},70830:function(t,e,r){var n=r(10567);e.mul=function(t,e){for(var r=new Uint8Array(t.length+e.length-1),o=0;o<t.length;o++)for(var i=0;i<e.length;i++)r[o+i]^=n.mul(t[o],e[i]);return r},e.mod=function(t,e){for(var r=new Uint8Array(t);r.length-e.length>=0;){for(var o=r[0],i=0;i<e.length;i++)r[i]^=n.mul(e[i],o);for(var a=0;a<r.length&&0===r[a];)a++;r=r.slice(a)}return r},e.generateECPolynomial=function(t){for(var r=new Uint8Array([1]),o=0;o<t;o++)r=e.mul(r,new Uint8Array([1,n.exp(o)]));return r}},51191:function(t,e,r){var n=r(55402),o=r(3997),i=r(57258),a=r(8104),u=r(76448),s=r(21224),c=r(41976),f=r(67291),h=r(56041),d=r(90160),l=r(34482),g=r(93141),p=r(71769);function v(t,e,r){var n,o,i=t.size,a=l.getEncodedBits(e,r);for(n=0;n<15;n++)o=1==(a>>n&1),t.set(n<6?n:n<8?n+1:i-15+n,8,o,!0),t.set(8,n<8?i-n-1:n<9?15-n-1+1:15-n-1,o,!0);t.set(i-8,8,1,!0)}e.create=function(t,e){if(void 0===t||""===t)throw new Error("No input text");var r,l,m=o.M;return void 0!==e&&(m=o.from(e.errorCorrectionLevel,o.M),r=d.from(e.version),l=c.from(e.maskPattern),e.toSJISFunc&&n.setToSJISFunction(e.toSJISFunc)),function(t,e,r,o){var l;if(Array.isArray(t))l=p.fromArray(t);else{if("string"!=typeof t)throw new Error("Invalid data");var m=e;if(!m){var w=p.rawSplit(t);m=d.getBestVersionForData(w,r)}l=p.fromString(t,m||40)}var y=d.getBestVersionForData(l,r);if(!y)throw new Error("The amount of data is too big to be stored in a QR Code");if(e){if(e<y)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+y+".\n")}else e=y;var E=function(t,e,r){var o=new i;r.forEach(function(e){o.put(e.mode.bit,4),o.put(e.getLength(),g.getCharCountIndicator(e.mode,t)),e.write(o)});var a=8*(n.getSymbolTotalCodewords(t)-f.getTotalCodewordsCount(t,e));for(o.getLengthInBits()+4<=a&&o.put(0,4);o.getLengthInBits()%8!=0;)o.putBit(0);for(var u=(a-o.getLengthInBits())/8,s=0;s<u;s++)o.put(s%2?17:236,8);return function(t,e,r){for(var o=n.getSymbolTotalCodewords(e),i=o-f.getTotalCodewordsCount(e,r),a=f.getBlocksCount(e,r),u=a-o%a,s=Math.floor(o/a),c=Math.floor(i/a),d=c+1,l=s-c,g=new h(l),p=0,v=new Array(a),m=new Array(a),w=0,y=new Uint8Array(t.buffer),E=0;E<a;E++){var A=E<u?c:d;v[E]=y.slice(p,p+A),m[E]=g.encode(v[E]),p+=A,w=Math.max(w,A)}var C,B,b=new Uint8Array(o),I=0;for(C=0;C<w;C++)for(B=0;B<a;B++)C<v[B].length&&(b[I++]=v[B][C]);for(C=0;C<l;C++)for(B=0;B<a;B++)b[I++]=m[B][C];return b}(o,t,e)}(e,r,l),A=n.getSymbolSize(e),C=new a(A);return function(t,e){for(var r=t.size,n=s.getPositions(e),o=0;o<n.length;o++)for(var i=n[o][0],a=n[o][1],u=-1;u<=7;u++)if(!(i+u<=-1||r<=i+u))for(var c=-1;c<=7;c++)a+c<=-1||r<=a+c||t.set(i+u,a+c,u>=0&&u<=6&&(0===c||6===c)||c>=0&&c<=6&&(0===u||6===u)||u>=2&&u<=4&&c>=2&&c<=4,!0)}(C,e),function(t){for(var e=t.size,r=8;r<e-8;r++){var n=r%2==0;t.set(r,6,n,!0),t.set(6,r,n,!0)}}(C),function(t,e){for(var r=u.getPositions(e),n=0;n<r.length;n++)for(var o=r[n][0],i=r[n][1],a=-2;a<=2;a++)for(var s=-2;s<=2;s++)t.set(o+a,i+s,-2===a||2===a||-2===s||2===s||0===a&&0===s,!0)}(C,e),v(C,r,0),e>=7&&function(t,e){for(var r,n,o,i=t.size,a=d.getEncodedBits(e),u=0;u<18;u++)r=Math.floor(u/3),n=u%3+i-8-3,o=1==(a>>u&1),t.set(r,n,o,!0),t.set(n,r,o,!0)}(C,e),function(t,e){for(var r=t.size,n=-1,o=r-1,i=7,a=0,u=r-1;u>0;u-=2)for(6===u&&u--;;){for(var s=0;s<2;s++)if(!t.isReserved(o,u-s)){var c=!1;a<e.length&&(c=1==(e[a]>>>i&1)),t.set(o,u-s,c),-1==--i&&(a++,i=7)}if((o+=n)<0||r<=o){o-=n,n=-n;break}}}(C,E),isNaN(o)&&(o=c.getBestMask(C,v.bind(null,C,r))),c.applyMask(o,C),v(C,r,o),{modules:C,version:e,errorCorrectionLevel:r,maskPattern:o,segments:l}}(t,r,m,l)}},56041:function(t,e,r){var n=r(70830);function o(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}o.prototype.initialize=function(t){this.degree=t,this.genPoly=n.generateECPolynomial(this.degree)},o.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");var e=new Uint8Array(t.length+this.degree);e.set(t);var r=n.mod(e,this.genPoly),o=this.degree-r.length;if(o>0){var i=new Uint8Array(this.degree);return i.set(r,o),i}return r},t.exports=o},22679:function(t,e){var r="[0-9]+",n="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",o="(?:(?![A-Z0-9 $%*+\\-./:]|"+(n=n.replace(/u/g,"\\u"))+")(?:.|[\r\n]))+";e.KANJI=new RegExp(n,"g"),e.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),e.BYTE=new RegExp(o,"g"),e.NUMERIC=new RegExp(r,"g"),e.ALPHANUMERIC=new RegExp("[A-Z $%*+\\-./:]+","g");var i=new RegExp("^"+n+"$"),a=new RegExp("^"+r+"$"),u=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");e.testKanji=function(t){return i.test(t)},e.testNumeric=function(t){return a.test(t)},e.testAlphanumeric=function(t){return u.test(t)}},71769:function(t,e,r){var n=r(93141),o=r(50580),i=r(42793),a=r(62860),u=r(51909),s=r(22679),c=r(55402),f=r(78333);function h(t){return unescape(encodeURIComponent(t)).length}function d(t,e,r){for(var n,o=[];null!==(n=t.exec(r));)o.push({data:n[0],index:n.index,mode:e,length:n[0].length});return o}function l(t){var e,r,o=d(s.NUMERIC,n.NUMERIC,t),i=d(s.ALPHANUMERIC,n.ALPHANUMERIC,t);return c.isKanjiModeEnabled()?(e=d(s.BYTE,n.BYTE,t),r=d(s.KANJI,n.KANJI,t)):(e=d(s.BYTE_KANJI,n.BYTE,t),r=[]),o.concat(i,e,r).sort(function(t,e){return t.index-e.index}).map(function(t){return{data:t.data,mode:t.mode,length:t.length}})}function g(t,e){switch(e){case n.NUMERIC:return o.getBitsLength(t);case n.ALPHANUMERIC:return i.getBitsLength(t);case n.KANJI:return u.getBitsLength(t);case n.BYTE:return a.getBitsLength(t)}}function p(t,e){var r,s=n.getBestModeForData(t);if((r=n.from(e,s))!==n.BYTE&&r.bit<s.bit)throw new Error('"'+t+'" cannot be encoded with mode '+n.toString(r)+".\n Suggested mode is: "+n.toString(s));switch(r===n.KANJI&&!c.isKanjiModeEnabled()&&(r=n.BYTE),r){case n.NUMERIC:return new o(t);case n.ALPHANUMERIC:return new i(t);case n.KANJI:return new u(t);case n.BYTE:return new a(t)}}e.fromArray=function(t){return t.reduce(function(t,e){return"string"==typeof e?t.push(p(e,null)):e.data&&t.push(p(e.data,e.mode)),t},[])},e.fromString=function(t,r){for(var o=function(t,e){for(var r={},o={start:{}},i=["start"],a=0;a<t.length;a++){for(var u=t[a],s=[],c=0;c<u.length;c++){var f=u[c],h=""+a+c;s.push(h),r[h]={node:f,lastCount:0},o[h]={};for(var d=0;d<i.length;d++){var l=i[d];r[l]&&r[l].node.mode===f.mode?(o[l][h]=g(r[l].lastCount+f.length,f.mode)-g(r[l].lastCount,f.mode),r[l].lastCount+=f.length):(r[l]&&(r[l].lastCount=f.length),o[l][h]=g(f.length,f.mode)+4+n.getCharCountIndicator(f.mode,e))}}i=s}for(var p=0;p<i.length;p++)o[i[p]].end=0;return{map:o,table:r}}(function(t){for(var e=[],r=0;r<t.length;r++){var o=t[r];switch(o.mode){case n.NUMERIC:e.push([o,{data:o.data,mode:n.ALPHANUMERIC,length:o.length},{data:o.data,mode:n.BYTE,length:o.length}]);break;case n.ALPHANUMERIC:e.push([o,{data:o.data,mode:n.BYTE,length:o.length}]);break;case n.KANJI:e.push([o,{data:o.data,mode:n.BYTE,length:h(o.data)}]);break;case n.BYTE:e.push([{data:o.data,mode:n.BYTE,length:h(o.data)}])}}return e}(l(t,c.isKanjiModeEnabled())),r),i=f.find_path(o.map,"start","end"),a=[],u=1;u<i.length-1;u++)a.push(o.table[i[u]].node);return e.fromArray(a.reduce(function(t,e){var r=t.length-1>=0?t[t.length-1]:null;return r&&r.mode===e.mode?(t[t.length-1].data+=e.data,t):(t.push(e),t)},[]))},e.rawSplit=function(t){return e.fromArray(l(t,c.isKanjiModeEnabled()))}},55402:function(t,e){var r,n=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];e.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return 4*t+17},e.getSymbolTotalCodewords=function(t){return n[t]},e.getBCHDigit=function(t){for(var e=0;0!==t;)e++,t>>>=1;return e},e.setToSJISFunction=function(t){if("function"!=typeof t)throw new Error('"toSJISFunc" is not a valid function.');r=t},e.isKanjiModeEnabled=function(){return void 0!==r},e.toSJIS=function(t){return r(t)}},74200:function(t,e){e.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40}},90160:function(t,e,r){var n=r(55402),o=r(67291),i=r(3997),a=r(93141),u=r(74200),s=n.getBCHDigit(7973);function c(t,e){return a.getCharCountIndicator(t,e)+4}function f(t,e){var r=0;return t.forEach(function(t){r+=c(t.mode,e)+t.getBitsLength()}),r}e.from=function(t,e){return u.isValid(t)?parseInt(t,10):e},e.getCapacity=function(t,e,r){if(!u.isValid(t))throw new Error("Invalid QR Code version");void 0===r&&(r=a.BYTE);var i=8*(n.getSymbolTotalCodewords(t)-o.getTotalCodewordsCount(t,e));if(r===a.MIXED)return i;var s=i-c(r,t);switch(r){case a.NUMERIC:return Math.floor(s/10*3);case a.ALPHANUMERIC:return Math.floor(s/11*2);case a.KANJI:return Math.floor(s/13);case a.BYTE:default:return Math.floor(s/8)}},e.getBestVersionForData=function(t,r){var n,o=i.from(r,i.M);if(Array.isArray(t)){if(t.length>1)return function(t,r){for(var n=1;n<=40;n++)if(f(t,n)<=e.getCapacity(n,r,a.MIXED))return n}(t,o);if(0===t.length)return 1;n=t[0]}else n=t;return function(t,r,n){for(var o=1;o<=40;o++)if(r<=e.getCapacity(o,n,t))return o}(n.mode,n.getLength(),o)},e.getEncodedBits=function(t){if(!u.isValid(t)||t<7)throw new Error("Invalid QR Code version");for(var e=t<<12;n.getBCHDigit(e)-s>=0;)e^=7973<<n.getBCHDigit(e)-s;return t<<12|e}},32158:function(t,e,r){var n=r(5726);e.render=function(t,e,r){var o=r,i=e;void 0===o&&(!e||!e.getContext)&&(o=e,e=void 0),e||(i=function(){try{return document.createElement("canvas")}catch(t){throw new Error("You need to specify a canvas element")}}()),o=n.getOptions(o);var a=n.getImageWidth(t.modules.size,o),u=i.getContext("2d"),s=u.createImageData(a,a);return n.qrToImageData(s.data,t,o),function(t,e,r){t.clearRect(0,0,e.width,e.height),e.style||(e.style={}),e.height=r,e.width=r,e.style.height=r+"px",e.style.width=r+"px"}(u,i,a),u.putImageData(s,0,0),i},e.renderToDataURL=function(t,r,n){var o=n;return void 0===o&&(!r||!r.getContext)&&(o=r,r=void 0),o||(o={}),e.render(t,r,o).toDataURL(o.type||"image/png",(o.rendererOpts||{}).quality)}},173:function(t,e,r){var n=r(5726);function o(t,e){var r=t.a/255,n=e+'="'+t.hex+'"';return r<1?n+" "+e+'-opacity="'+r.toFixed(2).slice(1)+'"':n}function i(t,e,r){var n=t+e;return void 0!==r&&(n+=" "+r),n}e.render=function(t,e,r){var a=n.getOptions(e),u=t.modules.size,s=t.modules.data,c=u+2*a.margin,f=a.color.light.a?"<path "+o(a.color.light,"fill")+' d="M0 0h'+c+"v"+c+'H0z"/>':"",h="<path "+o(a.color.dark,"stroke")+' d="'+function(t,e,r){for(var n="",o=0,a=!1,u=0,s=0;s<t.length;s++){var c=Math.floor(s%e),f=Math.floor(s/e);!c&&!a&&(a=!0),t[s]?(u++,s>0&&c>0&&t[s-1]||(n+=a?i("M",c+r,.5+f+r):i("m",o,0),o=0,a=!1),c+1<e&&t[s+1]||(n+=i("h",u),u=0)):o++}return n}(s,u,a.margin)+'"/>',d='<svg xmlns="http://www.w3.org/2000/svg" '+(a.width?'width="'+a.width+'" height="'+a.width+'" ':"")+'viewBox="0 0 '+c+" "+c+'" shape-rendering="crispEdges">'+f+h+"</svg>\n";return"function"==typeof r&&r(null,d),d}},5726:function(t,e){function r(t){if("number"==typeof t&&(t=t.toString()),"string"!=typeof t)throw new Error("Color should be defined as hex string");var e=t.slice().replace("#","").split("");if(e.length<3||5===e.length||e.length>8)throw new Error("Invalid hex color: "+t);(3===e.length||4===e.length)&&(e=Array.prototype.concat.apply([],e.map(function(t){return[t,t]}))),6===e.length&&e.push("F","F");var r=parseInt(e.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:255&r,hex:"#"+e.slice(0,6).join("")}}e.getOptions=function(t){t||(t={}),t.color||(t.color={});var e=t.width&&t.width>=21?t.width:void 0;return{width:e,scale:e?4:t.scale||4,margin:null==t.margin||t.margin<0?4:t.margin,color:{dark:r(t.color.dark||"#000000ff"),light:r(t.color.light||"#ffffffff")},type:t.type,rendererOpts:t.rendererOpts||{}}},e.getScale=function(t,e){return e.width&&e.width>=t+2*e.margin?e.width/(t+2*e.margin):e.scale},e.getImageWidth=function(t,r){var n=e.getScale(t,r);return Math.floor((t+2*r.margin)*n)},e.qrToImageData=function(t,r,n){for(var o=r.modules.size,i=r.modules.data,a=e.getScale(o,n),u=Math.floor((o+2*n.margin)*a),s=n.margin*a,c=[n.color.light,n.color.dark],f=0;f<u;f++)for(var h=0;h<u;h++){var d=4*(f*u+h),l=n.color.light;f>=s&&h>=s&&f<u-s&&h<u-s&&(l=c[i[Math.floor((f-s)/a)*o+Math.floor((h-s)/a)]?1:0]),t[d++]=l.r,t[d++]=l.g,t[d++]=l.b,t[d]=l.a}}},25187:function(t,n,o){"use strict";o.d(n,{O:function(){return h}});var i,a=o(74945),u=o(68939),s=o(92340),c=o(37716),f=o(91841),h=((i=function(){function t(e){r(this,t),this._http=e,this._baseUrl=s.N.baseUrl,this.tail=[],this.omitDemoUrl=["v2/projects/kyc","v2/projects/biometrics","v2/projects/biometrics/session"]}return e(t,[{key:"progress",get:function(){return!!this.tail.length}},{key:"sendRequest",value:function(t,e){var r,n=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};t=t.toLocaleLowerCase();var a=null!==(r=localStorage.getItem("accessToken"))&&void 0!==r?r:localStorage.getItem("clientToken"),u=Object.assign(Object.assign({},i.headers),{timeout:20});switch(a&&!a.includes("fake")&&(u.Authorization="Bearer ".concat(a)),delete i.headers,this.isDemo&&!this.omitDemoUrl.some(function(t){return n._baseUrl+t===e})&&(e=e.replace(this._baseUrl,"mockApi/"),o.codeError=this.codeError),t){case"get":return this.request(this._http.get(e,Object.assign(Object.assign({params:o},i),{headers:u})));case"post":return this.request(this._http.post(e,o,Object.assign({headers:u},i)));case"put":return this.request(this._http.put(e,o,Object.assign({headers:u},i)));case"delete":return this.request(this._http.delete(e,Object.assign({headers:u},i)));default:throw"method not provided"}}},{key:"request",value:function(t){var e=this;return this.tail.push(t),t.pipe((0,a.X)(0),(0,u.x)(function(){var r=e.tail.indexOf(t);e.tail.splice(r,1)}))}}]),t}()).\u0275fac=function(t){return new(t||i)(c.LFG(f.eN))},i.\u0275prov=c.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i)},41437:function(t,n,o){"use strict";o.d(n,{K:function(){return s}});var i,a=o(37716),u=o(25187),s=((i=function(){function t(e){r(this,t),this._httpWrapper=e,this.countryCodes=[{code:"+54",name:"Argentina"},{code:"+61",name:"Australia"},{code:"+43",name:"Austria"},{code:"+32",name:"Belgium"},{code:"+55",name:"Brazil"},{code:"+1",name:"Canada"},{code:"+56",name:"Chile"},{code:"+57",name:"Colombia"},{code:"+506",name:"Costa Rica"},{code:"+593",name:"Ecuador"},{code:"+503",name:"El Salvador"},{code:"+33",name:"France"},{code:"+49",name:"Germany"},{code:"+502",name:"Guatemala"},{code:"+504",name:"Honduras"},{code:"+353",name:"Ireland"},{code:"+39",name:"Italy"},{code:"+52",name:"Mexico"},{code:"+31",name:"Netherlands"},{code:"+505",name:"Nicaragua"},{code:"+47",name:"Norway"},{code:"+507",name:"Panama"},{code:"+595",name:"Paraguay"},{code:"+51",name:"Peru"},{code:"+351",name:"Portugal"},{code:"+1-787",name:"Puerto Rico"},{code:"+1-939",name:"Puerto Rico"},{code:"+7",name:"Russia"},{code:"+34",name:"Spain"},{code:"+46",name:"Sweden"},{code:"+41",name:"Switzerland"},{code:"+1-868",name:"Trinidad and Tobago"},{code:"+44",name:"United Kingdom"},{code:"+1",name:"United States of America"},{code:"+598",name:"Uruguay"},{code:"+58",name:"Venezuela"}]}return e(t,[{key:"ipData",value:function(){return this._httpWrapper.sendRequest("get","http://ip-api.com/json")}}]),t}()).\u0275fac=function(t){return new(t||i)(a.LFG(u.O))},i.\u0275prov=a.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i)}}])}();