<%@ Page Language="C#" %>

<script runat="server">
    <%-- This demo page has no server side script --%>
</script>

<!DOCTYPE html>

<html lang="en">

<head>
 <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
 <script type="text/javascript" src="javascript/loadimages.js"></script>
     <script type="text/javascript">


         /*
          I have used the concept from Professor Rasala's Golden Gates Experiment
         Below code exactly uses the loadimages file to flip the images into an infinite slide show
         */
         var imageDirectoryURL = "images/homePageImages/";
         var imageListFileName = "ImagesPathFile.txt";
         var imageNames = [];
       
         var slide_show_images = [];
         var length = 0;

         // Call the loadImages function of the library
         function loadImages() {

             new LoadImages
                 (imageDirectoryURL,
                  imageListFileName,
                  imageNames,
                  loadImagesCallback);
         }


         function loadImagesCallback(data) {
             // load images received in the array declared slide_show_images

             slide_show_images = data;
             length = data.length;

             // Continue initialization of the application.
             initialize();
         }

         // Initializion function called after images are loaded
         function initialize() {
             init_page();
             start_slide_show();
         }

         var base;
         var image_index = 0;
         var saved_image_index = 0;
         var delay = 3000;

         function init_page() {

             base = $("#flip-images");
             base.append(slide_show_images[0]);

         }

         function slide_show_step() {

             image_index++;

             if (image_index >= length) {
                 image_index = 0;
             }

             // now remove old child
             base.empty();

             // now append new child
             base.append(slide_show_images[image_index]);
         }

         function start_slide_show() {

             setInterval(slide_show_step, delay);

         }
         $(loadImages);
    </script>
<meta charset='utf-8' />

<title>Demo Home Page</title>

<style type="text/css">
    ul.master_navigation
    {
        font-size: 100%;
        font-weight: bold;
        text-align: center;
        list-style: none;
        margin: 0.5em 0;
        padding: 0;
    }

    ul.master_navigation li
    {
        display: inline-block;
        padding: 0 0.5%;
    }

    a
    {
        color: #08f;
        font-weight: bold;
        text-decoration: none;
    }

    a:visited
    {
        color: #88f;
    }

    a:hover
    {
        color: #f00;
    }

    p
    {
        text-align: justify;
    }
</style>

<style type="text/css" media="screen">
    body {
        width:auto;
        max-width: 100%;
        margin: 0;
        padding: 0; 
    }

    .pad {
        padding: 10px;
    }

    /* My CSS*/
    body  {
        
        /* background image has been set directly from a URL */
       /* background-image: url("http://fc07.deviantart.net/fs21/i/2007/249/c/1/Boston_Skyline_by_kingnothing.jpg");
            */
         /* REPEAT PROPERTY I HAVE USED SO AS NOT TO REPEAT THE BACKGROUND IMAGE HERE */
 /*       background-repeat: no-repeat; */

        /* setting the text color to be white */
        color: #714e95;

        /* setting the font-family to be a standard one */
        font-family: sans-serif;

        /*setting font size that will appear on the web page to be a standard readable text size*/
        font-size: 16px;


        overflow-x: hidden;
    }

    /* setting image of my own photo*/
    /* THIS CSS IS FOR A CLASS OF IMAGES WHICH I HAVE NAMED MYIMAGE. */
    .myimage{

        max-height: 180px;
        min-height: 100px;
        height:180px;
        width: 180px;
        min-width: 100px;

        padding:1% 1% 1% 1%;
        opacity: 0.6;  
        float: left;
        
             
    }
    .myimage:hover {

        padding:5px 5px;
        opacity: 1.0;          
    }

    /* SETTING ANOTHER IMAGE CSS*/
    .myhobbyimages{

        height:35%;
        width: 50%;
        padding: 1% 1% 1% 1%;

        display: block;
        
      

    }

    .myhobbyimages:hover{


        /* THIS EFFECT IS TO PROVIDE A SHADOW ON HOVERING OVER AN IMAGE*/
        -webkit-box-shadow: 0 0 10px #ccc; 
        box-shadow: 0 0 10px #ccc;

    }

    .background-img{
        
        width: 98%;
        padding-bottom: 10px;
    }

    .about-me{

        font-family: 'Comic Sans MS';
        font-size: 16px;
        padding: 1% 1% 1% 1%;
        margin: 1% 1% 1% 1%;
        text-align: justify;
        width: 70%;
        padding-right: 20px;
        float: left;


    }
    .hobby-images{

       float: left;
       padding: 1% 1% 1% 1%;
       width: 20%;
       height: 250px;


    }

    #flip-images{
      
        width: 20%;
        height: 250px;
        float: left;
        position: relative;
        
       
        
        border-color: #714e95;
        border-style: solid;
        border-width: 2px;
        border-radius: 10px;

        min-width: 200px;
        min-height: 200px;

       

    }

    #bk-imgs{

         background:url("http://fc07.deviantart.net/fs21/i/2007/249/c/1/Boston_Skyline_by_kingnothing.jpg");
         width: 95%;
         float: left;
         padding: 1% 1% 1% 1%;
         background-repeat: no-repeat;
    }

    #flip-images img{

        height: 100%;
        width: 100%;
        border-radius: 10px;
        min-width: 200px;
        min-height: 200px;

    }

    .main-content{
         


        width: 100%;
        padding: 1% 1% 1% 1%;
        margin: 0.5% 0.5% 0.5% 0.5%;

    }

    .my-work a{

        width: 40%;
        text-decoration: none;
        padding: 20%;


    }

      .my-work ul{
           list-style-type: none;
    padding: 0px;
    margin: 0px;
      }


    @media only screen and (max-width: 400px) {

        .myhobbyimages {
            height: 35%;
            width: 50%;

            display: block;
            padding-bottom: 3%;
            padding-top:3%;

        }

        .hobby-images{

            width: 95%;
        }

        .about-me{

            padding-top: 20%;
        }
    }
</style>

</head>

<body>

<div class="pad">

<form id="form1" runat="server">

<div>

<ul class="master_navigation">
    <li><a href="sitestatistics/" target="_blank">SiteStatistics</a></li>
    <li><a href="statistics/" target="_blank">Statistics</a></li>
    <li><a href="source/" target="_blank">Source</a></li>
    <li><a href="search/" target="_blank">Search</a></li>
    <li><a href="searchtree/" target="_blank">SearchTree</a></li>
    <li><a href="textview/" target="_blank">TextView</a></li>
    <li><a href="filelist.aspx" target="_blank">FileList</a></li>
    <li><a href="autofile.aspx" target="_blank">AutoFile</a></li>
    <li><a href="images/autoimage.aspx" target="_blank">Images</a></li>
    <li><a href="blog/" target="_blank">Blog</a></li>
    <li><a href="story/index.htm?../Experiments/story.txt" target="_blank">Experiments</a></li>
    <li><a href="Project/home.html" target="_blank">Project</a></li>
</ul>
    
    

<hr />
    
<br />
    
    <div class="main-content"> 
    <div id="bk-imgs">   

    
        <div id="flip-images">

        </div>

    

    </div>

      
    <div class="hobby-images">
         <img class="myhobbyimages" src="http://www.clipartbest.com/cliparts/Rcd/bqk/Rcdbqkgc9.jpeg"  />
         <img class="myhobbyimages" src="http://watermarked.cutcaster.com/cutcaster-photo-100361177-Boy-scout-with-walking-stick.jpg" />
         <img class="myhobbyimages" src="http://www.hchlibrary.org/files/hola_amigos-3237.jpg"/>

     </div>

     <div class="about-me">
        Hi! I am a Computer Science student at Northeastern University. I am keen to learn Web Development! 
        I have fun treking, learning languages, socializing and reading books.
        My favorite authors are J.K Rowling, Jeffery Archer, Tilly Bagshawe,
        Sydney Sheldon, Amish Tripathi, Ashwin Sanghi and Dr. Brian Weiss. I am a little bit interested in psychology as well!
        I learn Spanish for fun currently.

         <br />
         <br />
         In this course I have learned HTML5, CSS3, Javascript, jQuery, and ASP DOT Net. I had fun time exploring 
         Google Maps API, Google Places API, Open Weather API, parsing JSON and XML. 
         Check out my experiments which showcase how much I have learned! Also, my project is called "TRAVEL DIARIES".
         Its for everyone who wants to travel. The user can see what all is near-by him, where to eat, what to see 
         and what is the weather like nearby him! I hope it is of help to people who want to travel and who want to 
         travel with ease keeping aside the apprehensiveness of what to see, how to reach there and where to eat! 



     </div>
 
    <br />
 
   
 </div>
    

</div>

</form>

</div>

</body>
</html>
