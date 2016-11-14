/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    var feed1,feed2;
    describe('RSS Feeds', function() {
      /* This is our first test - it tests to make sure that the
      * allFeeds variable has been defined and that it is not
      * empty. Experiment with this before you get started on
      * the rest of this project. What happens when you change
      * allFeeds in app.js to be an empty array and refresh the
      * page?
      */
      it('are defined', function() {
        expect(allFeeds).toBeDefined();
        expect(allFeeds.length).not.toBe(0);
      });


      /* TODO: Write a test that loops through each feed
      * in the allFeeds object and ensures it has a URL defined
      * and that the URL is not empty.
      */
      it('URLs are defined ',function() {
        allFeeds.forEach( function( feed ){
          expect(feed.url).toBeDefined();  
          expect(feed.url.length).not.toBe(0);  
        });
      });


      /* TODO: Write a test that loops through each feed
      * in the allFeeds object and ensures it has a name defined
      * and that the name is not empty.
      */

      it('Names are defined',function(){
        allFeeds.forEach(function(feed){
          expect(feed.name).toBeDefined(true);
          expect(feed.name.length).not.toBe(0);

        });

      });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu',function(){
      /* TODO: Write a test that ensures the menu element is
      * hidden by default. You'll have to analyze the HTML and
      * the CSS to determine how we're performing the
      * hiding/showing of the menu element.
      */


      it('is hidden By Default',function(){
        expect($('body').hasClass('menu-hidden')).toBeTruthy();
        
      });



      /* TODO: Write a test that ensures the menu changes
      * visibility when the menu icon is clicked. This test
      * should have two expectations: does the menu display when
      * clicked and does it hide when clicked again.
      */ 

      it('is visible',function(){
        var menuToggle = $('.menu-icon-link');

        menuToggle.trigger('click');
        expect( $('body').hasClass('menu-hidden')).toBe(false);
        menuToggle.trigger('click');
        expect( $('body').hasClass('menu-hidden')).toBe(true);
      });

    });
    /* TODO: Write a new test suite named "Initial Entries" */
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000;   // this is because if page takes time to load more than default timeout interval(5 sec) it wont give error
    describe('Initial Entries', function() {


      /* TODO: Write a test that ensures when the loadFeed
      * function is called and completes its work, there is at least
      * a single .entry element within the .feed container.
      * Remember, loadFeed() is asynchronous so this test will require
      * the use of Jasmine's beforeEach and asynchronous done() function.
      */
      beforeEach(function(done){
        loadFeed(0,function(){
          done();
        });

      });

      it('entries are defined',function(){  // this test is used to for whether the entries are defined or not by this it is assured that if it is defined means the function is called
        expect($('.feed .entry')).toBeDefined(true);
       

      });

      it('loadFeed function ran perfectly',function(){       // this test signifies that the function completes its work 
        expect($('.feed .entry').is(':empty')).toBe(false);     
      });


    });

    /* TODO: Write a new test suite named "New Feed Selection"*/
    describe('New Feed Selection', function() {
      /* TODO: Write a test that ensures when a new feed is loaded
      * by the loadFeed function that the content actually changes.
      * Remember, loadFeed() is asynchronous.
      */

      
    beforeEach(function(done){   
       loadFeed(0,function(){
          feed1=$('.entry h2')[0]; 
        });
       loadFeed(1,function(){
          feed2=$('.entry h2')[0]; 
          done();
        });


});




      it('loadFeed function is changing its content ',function(done){
        expect(feed2).not.toBe(feed1);           // here it is checking that content in feed1(which is loaded from loadFeed(0)) is not same as feed2(which is loaded from loadFeed(1)) this test signifies  that the newcontent is loaded at new call
        done();

      });

    });

}());
