/*
    File: javascript/loadimagesviaurl.js
    
    Copyright 2015,
    Richard Rasala,
    College of Computer and Information Science
    Northeastern University, Boston, MA 02115
    rasala@ccs.neu.edu
    
    March 23, 2015
*/

/*
    jQuery should be loaded before this Javascript is loaded.

    LoadImagesViaUrl is a class that manages the loading of images
    using a file in Story Utility format, that is, each line will
    have the format:
      url-of-an-image image-caption
    There may be an arbitrary amount of white space between the
    url-of-an-image and the image-caption.

    We will refer to such a file as an image-list-file.

    LoadImagesViaUrl generalizes the earlier LoadImages Javascript.

    Constructor parameters:

    1. imageListFile

        A string with the relative or absolute path to an 
        image-list-file.
        
        In order for work to be done, this string must be non-empty
        and point to a valid image-list-file.

    2. path
        If the image-list-file contains full paths then this parameter
        should be set to "" or null.

        Otherwise, image-list-file must consists entirely of file names
        and path must be the path to directory with these files.

    3. callback

        A reference to a callback function to be invoked when the
        loading process has gone as far as possible.

        The callback function should expect one parameter that we
        will describe below.

    4. max
    
        Maximum milliseconds to wait for all images to load before
        transfer to callback.  Default = 20000.
    
    5. gap

        Time gap between successive attempts to test whether all
        images are loaded.  Default = 100.

    Details:

    Each non-blank line in the image-list-file will be split into
    the url and the caption.

    We will push the url onto an array field urls.

    We will push the caption onto an array field captions.

    We will then create an image object using the url and push this
    object onto an array field images.  The object creation and the
    setting of the url will initiate download of the image.

    We will track completion of the download processes for all images.


    When download has been completed or gone as far as possible, we
    create a simple object with four fields:
    
        self, urls, images, captions.

    This simple object will be passed to the callback function.

    The field "self" is a reference to the entire LoadImagesViaUrl
    object.


    There is no attempt to check the validity of individual image urls
    used in the construction process.
*/


/* Constructor */
function LoadImagesViaUrl
    (imageListFile, path, callback, max, gap) {
    this.imageListFile = imageListFile;
    this.path = path ? path : "";

    this.lines = [];
    this.urls = [];
    this.captions = [];
    this.images = [];

    this.callback = callback;
    this.max = max ? max : 20000;
    this.gap = gap ? gap : 100;

    this._load();
}


/*
    Returns the array of urls.
*/
LoadImagesViaUrl.prototype.getUrls = function () {
    return this.urls;
}

/*
    Returns the array of image objects.
*/
LoadImagesViaUrl.prototype.getImages = function () {
    return this.images;
}

/*
    Returns the array of captions.
*/
LoadImagesViaUrl.prototype.getCaptions = function () {
    return this.captions;
}


/*
    Returns true if the complete property of all
    image objects is true.
*/
LoadImagesViaUrl.prototype.imagesLoaded = function () {
    var images = this.images;
    var length = images.length;

    if (length == 0)
        return true;

    var i;

    for (i = 0; i < length; i++) {
        if (!images[i].complete) {
            return false;
        }
    }

    return true;
}


/*
    Wait for the complete property of all images to become true.

    1. callback

        A reference to a callback function to be invoked when the
        loading process has gone as far as possible.

        When download has been completed or gone as far as possible,
        we create a simple object with four fields:
    
            self, urls, images, captions.

        This simple object will be passed to the callback function.

        The field "self" is a reference to the entire LoadImagesViaUrl
        object.

    2. max
    
        Maximum milliseconds to wait for all images to load before
        transfer to callback.  Default = 20000.
    
    3. gap

        Time gap between successive attempts to test whether all
        images are loaded.  Default = 100.

    The max property is set so that the application does not hang
    waiting for all images to load.

    The gap property is set to define the granularity of testing.

    Since the images may fail to load in max milliseconds,
    the application must test if the images are loaded if
    that is crucial to the success of the application. 
*/
LoadImagesViaUrl.prototype.waitForImagesLoaded =
    function (callback, max, gap) {
        var self = this;

        if (!max)
            max = 20000;

        if (!gap)
            gap = 100;

        var waiter = function () {
            if (self.imagesLoaded() || (max <= 0)) {
                if (callback) {
                    var simple = {
                        self: self,
                        urls: self.urls,
                        images: self.images,
                        captions: self.captions
                    };

                    callback(simple);
                }

                return;
            }

            max -= gap;

            setTimeout(waiter, gap);
        }

        setTimeout(waiter, gap);
    }


/*
    Load the file imageListFile to obtain the image file names.

    Uses jQuery.ajax.
*/
LoadImagesViaUrl.prototype._load = function () {
    var imageListFile = this.imageListFile;

    if (imageListFile.length > 0) {
        var self = this;

        var ajaxData = {
            url: imageListFile,
            dataType: "text",
            context: self,
            success: self._load_success,
            cache: false
        };

        jQuery.ajax(ajaxData);
    }
}


/*
    Function to execute if the jQuery.ajax call to load
    imageListFile in _load is a success.

    Extracts the pairs

        url-of-an-image image-caption
    
    into the array lines and then processes these lines to
    create images.
*/
LoadImagesViaUrl.prototype._load_success = function (data) {
    if (data)
        if (data.length > 0) {
            this.lines = data.split("\n");
        }

    var lines = this.lines;
    var length = lines.length;

    if (length == 0)
        return;

    var path = this.path;

    var i, s, url, image, caption;

    for (i = 0; i < length; i++) {
        s = lines[i];

        if (s.length == 0)
            continue;

        url = getURL(s);

        if (url) {
            url = path + url;
            this.urls.push(url);
        }
        else {
            continue;
        }

        caption = getCaption(s);
        this.captions.push(caption);

        image = jQuery("<img />")
            .attr("src", url)
            .attr("alt", caption)
            .attr("title", caption)[0];

        this.images.push(image);
    }

    this.waitForImagesLoaded(this.callback, this.max, this.gap);
}


/*
    Uses the images to append a vertical image list with captions
    to $target.

    $target should be a jQuery wrapper for the DOM entity to which
    the images will be appended.

    The images are actually cloned to leave the originals available
    for other use.
*/
LoadImagesViaUrl.prototype.verticalImageList = function ($target) {
    var template = "<div><p class='image'></p> <p class='caption'></p></div>";
    var $template = $(template);

    var length = this.images.length;
    var i, image, caption, $copy;

    for (i = 0; i < length; i++) {
        image = $(this.images[i]).clone()[0];
        caption = this.captions[i];

        $copy = $template.clone();

        $copy.find(".image").append(image);
        $copy.find(".caption").append(caption);

        $target.append($copy[0]);
    }
}


/* Whitespace is BLANK or TAB. */

var BLANK = " ";
var TAB = "\t";

function getURL(s) {
    if (!s || (s.length == 0))
        return "";

    var length = s.length;
    var position = 0;

    while (position < length) {
        var c = s.charAt(position);

        if ((c == BLANK) || (c == TAB))
            break;

        position++;
    }

    if (position == 0)
        return "";

    return s.substring(0, position);
}

function getCaption(s) {
    if (!s || (s.length == 0))
        return "";

    var length = s.length;
    var position = 0;

    // Skip non-whitespace

    while (position < length) {
        var c = s.charAt(position);

        if ((c == BLANK) || (c == TAB))
            break;

        position++;
    }

    if (position == 0)
        return "";

    // Skip whitespace

    while (position < length) {
        var c = s.charAt(position);

        if ((c != BLANK) && (c != TAB))
            break;

        position++;
    }

    if (position == length)
        return "";

    var stop = length;

    // Skip trailing whitespace
    while (stop > position) {
        var c = s.charAt(stop - 1);

        if ((c != BLANK) && (c != TAB))
            break;

        stop--;
    }

    return s.substring(position, stop);
}