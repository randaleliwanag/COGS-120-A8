// var express = require('express');
// const { JSDOM } = require( "jsdom" );
// const { window } = new JSDOM( "" );
// const $ = require( "jquery" )( window );

/*
 * GET home page.
 */

exports.view = function(req, res){
  // $(function(){
  //     $("#nav-bar").load("https://cogs120--a7.herokuapp.com/nav-bar"); 
  //   });
  // $()

  res.render('index');
};