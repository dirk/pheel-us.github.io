$(document).ready(function(){function n(){e++;e%5===0?$("html").css("background-color","white"):$("html").css("background-color","blue");e>=100&&(e=0);clearTimeout(t);t=setTimeout(function(){$("html").css("background-color","white")},150)}var e=0,t;$(".titleHeader").css("color","blue");$(document).mousemove(function(){n()})});