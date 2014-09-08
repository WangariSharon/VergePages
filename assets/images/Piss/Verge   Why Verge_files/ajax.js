
// JavaScript Document

var xmlHttp

/*
 * GetXmlHttpObject()
 *
 * Function for creating a XMLHTTPObject for Ajax functions
 *
 * @author    Jimmy Mwang'ondi jmwangondi@malikwamali.co.ke
 * @date      2007-01-01
 *
 * @returns   xmlHttp - An XmlHttp Object
 *                      Remember, returns null if browser is not AJAX enabled
 *
 * Change Record
 *
 * Date        Revision
 * ----------------------------------------------------------------------------
 *
 *
 */

function GetXmlHttpObject()
{
  var xmlHttp=null;
  try
  {
    // Firefox, Opera 8.0+, Safari
    xmlHttp=new XMLHttpRequest();
  }
  catch (e)
  {
    // Internet Explorer
    try
    {
      xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
    }
    catch (e)
    {
      xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
  }
  return xmlHttp;
}