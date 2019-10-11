function AutoRefresh( t ) {
    setTimeout("window.location.reload(true);", t);
    console.log("The site has been updated")
 }