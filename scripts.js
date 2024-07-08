/* Place your JavaScript in this file */

$(function() {
    var newHash = "",
        $mainContent = $("#main-content"),
        $pageWrap = $("#page-wrap"),
        baseHeight = 0;
 
    // Set initial height
    $pageWrap.height($pageWrap.height());
    baseHeight = $pageWrap.height() - $mainContent.height();
 
    // Handle navigation button clicks
    $("nav").delegate("a", "click", function() {
        window.location.hash = $(this).attr("href");
        return false;
    });
 
    // Listen for hash changes
    $(window).bind("hashchange", function() {
        newHash = window.location.hash.substring(1);
        if (newHash) {
            $mainContent.find("#guts").fadeOut(200, function() {
                $mainContent.hide().load(newHash + " #guts", function() {
                    $mainContent.fadeIn(200);
                });
            });
        }
    });
 
    // Trigger hashchange on page load
    $(window).trigger("hashchange");
});