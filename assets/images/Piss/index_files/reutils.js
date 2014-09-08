var i_character_timeout = 10;      // timeout for chars
var i_advert_timeout     = 5000;   // timeout for adverts


/*
 * get_next_advert()
 *
 * SJAX function for getting next advert from MKM DB
 *
 * @author    Jimmy Mwang'ondi jmwangondi@malikwamali.co.ke
 * @date      2007-01-01
 *
 *
 * Change Record
 *
 * Date        Revision
 * ----------------------------------------------------------------------------
 *
 *
 */
 
function get_next_advert()
{
	xmlHttp=GetXmlHttpObject()
   	if (xmlHttp==null)
   	{
    	alert ("Your browser does not support AJAX!");
      	return;
   	}

	
    // this is to confuse IE. remember IE caches AJAX calls
    var sz_ms = "&ms=" + new Date().getTime();
	
    var sz_url="utils/php/homepage.php?orderid=2"+sz_ms;
    xmlHttp.open("GET",sz_url,false);
	
    xmlHttp.send(null);
	
	// Use synchronous mode. Mozilla Firefox will not take onreadystatechange
	return xmlHttp.responseText;
}


/*
 * run_advert()
 *
 * Function for looping through advert characters and getting new adverts via SJAX
 *
 * @author    Jimmy Mwang'ondi jmwangondi@malikwamali.co.ke
 * @date      2007-01-01
 *
 *
 * Change Record
 *
 * Date        Revision
 * ----------------------------------------------------------------------------
 *
 *
 */
 
function run_advert()
{
	var i_time_out;  
	
  	// Go for the next advert
  	var sz_result;
  	if(i_current_length == 0)
  	{
  		sz_result = get_next_advert();
  		if (sz_result != '') {
			eval(sz_result);
		  	
			sz_type_text_advert      = sz_advert.replace(/&quot;/g,'"');	
				
			anchor_object.href = '../aboutus.php';
  		}
  		else {
  			sz_type_text_advert = "";
  		}
  	}
  
  	// Stuff the current ticker text into the anchor
  	anchor_object.innerHTML = sz_type_text_advert.substring(0,i_current_length) + "_";
  
  	// Modify the length for the substring and define the timer
  	if(sz_result != '' && i_current_length != sz_type_text_advert.length)
  	{
		i_current_length++;
	   	i_time_out = i_character_timeout;
  	}
  	else
  	{
    	i_current_length = 0;
		i_time_out = i_advert_timeout;
  	}
	
	// Call up the next cycle ticker
	setTimeout("run_advert()", i_time_out);
}


/*
 * set_ticker()
 *
 * Function for starting ticker for displaying type text adverts
 *
 * @author    Jimmy Mwang'ondi jmwangondi@malikwamali.co.ke
 * @date      2007-01-01
 *
 *
 * Change Record
 *
 * Date        Revision
 * ----------------------------------------------------------------------------
 *
 *
 */
 
function set_ticker()
{
	// length of characters echoed
  	i_current_length    = 0;
  
  	// Locate base objects
  	if (document.getElementById) 
  	{	
    	anchor_object = document.getElementById("type_text");
		run_advert();   	
  	}
  	else 
  	{
    	document.write("<style>.ticki{display:none;}.ticko{border:0px; padding:0px;}</style>");
    	return true;
  	}
}
