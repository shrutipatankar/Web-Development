<%@ Page Language="C#" %>

<script runat="server">
    <%-- This demo page has no server side script --%>
</script>

<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset='utf-8' />

    <title>Demo Home Page</title>

    <style type="text/css">
        ul.master_navigation {
            font-size: 100%;
            font-weight: bold;
            text-align: center;
            list-style: none;
            margin: 0.5em 0;
            padding: 0;
        }

            ul.master_navigation li {
                display: inline-block;
                padding: 0 0.5%;
            }

        a {
            color: #08f;
            font-weight: bold;
            text-decoration: none;
        }

            a:visited {
                color: #88f;
            }

            a:hover {
                color: #f00;
            }

        p {
            text-align: justify;
        }
    </style>

    <style type="text/css" media="screen">
        .pad {
            padding: 10px;
        }

        /* My CSS*/
        body {
            width: auto;
            max-width: 100%;
            margin: 0;
            padding: 0;
            /* background image has been set directly from a URL */
            background-image: url("http://fc07.deviantart.net/fs21/i/2007/249/c/1/Boston_Skyline_by_kingnothing.jpg");
            /* REPEAT PROPERTY I HAVE USED SO AS NOT TO REPEAT THE BACKGROUND IMAGE HERE */
            background-repeat: no-repeat;
            /* setting the text color to be white */
            color: black;
            /* setting the font-family to be a standard one */
            font-family: sans-serif;
            /*setting font size that will appear on the web page to be a standard readable text size*/
            font-size: 14px;
        }

        /* setting image of my own photo*/
        /* THIS CSS IS FOR A CLASS OF IMAGES WHICH I HAVE NAMED MYIMAGE. */
        .myimage {

            height: 12%;
            width: 12%;
            padding: 5px 5px;
            opacity: 0.6;
        }

            .myimage:hover {

                height: 12%;
                width: 12%;
                padding: 5px 5px;
                opacity: 1.0;
            }

        /* SETTING ANOTHER IMAGE CSS*/
        .myhobbyimages {
            float: left;
            height: 12%;
            width: 12%;
            padding: 5px 5px;
        }

            .myhobbyimages:hover {
                float: left;
                height: 12%;
                width: 12%;
                padding: 5px 5px;
                /* THIS EFFECT IS TO PROVIDE A SHADOW ON HOVERING OVER AN IMAGE*/
                -webkit-box-shadow: 0 0 10px #ccc;
                box-shadow: 0 0 10px #ccc;
            }

            p{

                padding: 10px 10px;
                margin: 2px 2px;

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
                </ul>



                <hr />

                <br />
                <br />

                <img class="myimage" src="myimages/me.jpg" />
                <br />
                <br />
                <br />
                <div>
                    <p>
                        Hi! I am a Computer Science student at Northeastern University. 
                        I am keen to learn Web Development! 
                    </p>
                </div>
                <br />
                <div>
                    <img class="myhobbyimages" src="http://www.clipartbest.com/cliparts/Rcd/bqk/Rcdbqkgc9.jpeg" width="100px" height="100px" />
                    <img class="myhobbyimages" src="http://watermarked.cutcaster.com/cutcaster-photo-100361177-Boy-scout-with-walking-stick.jpg" width="100px" height="100px" />
                    <img class="myhobbyimages" src="http://www.hchlibrary.org/files/hola_amigos-3237.jpg" width="100px" height="100px" />
                </div>
                <br />
                <p>
                    I have fun treking, learning languages, socializing and reading books.
   
                
                  My favorite authors are J.K Rowling, Jeffery Archer, Tilly Bagshawe, Sydney Sheldon, Amish Tripathi, Ashwin Sanghi and Dr. Brian Weiss.
                </p>
                <p>
                    I learn Spanish for fun currently.
                    I have treked around Pune city on forts till date!

                </p>

                <hr />

                <p>
                    Here is a link to the
                    <a href="story/index.htm" target="_blank">Story Utility</a>
                    on this site so that you may explore this tool.
                </p>

                <p>
                    Here is a link to the
                    <a href="http://www.northeastern.edu/rasala/webstories.htm"
                        target="_blank">Web Development Stories</a>
                    so that you may see a good collection of online documentation.
                </p>

                <p>
                    This provides a model for using stories for documentation and
for collections of experiments.
                </p>

                <hr />

                <p>
                    None of the hints given above needs to be on your home page
downstream but it is convenient to have them here at startup.
                </p>

                <hr />

            </div>

        </form>

    </div>

</body>
</html>
