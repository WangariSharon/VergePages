/*
 * cancel_user_feedback()
 *
 * Function for cancelling any action associated with posting feedback.
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
 
function cancel_user_feedback()
{
	document.frm_feedback.action = "utils/php/process.php?pid=6";
	document.frm_feedback.submit();
}


/*
 * filter_only_specific_chars()
 * Function for restricting input that does not fulfil a specified criteria.
 *
 * @author    Jimmy Mwang'ondi jmwangondi@malikwamali.co.ke
 * @date      2007-01-01
 *
 * @params    1. e: the event entered and was passed using onKeyPress event
 *            2. sz_filter_set: The criteria that specifies which key is OK.
 *
 * @return    boolean
 *            1. true when the key fulfills the set criteria
 *            2. false when the key does not fulfill the set criteria
 *
 * Change Record
 *
 * Date        Revision
 * ----------------------------------------------------------------------------
 *
 *
 */
 
function filter_only_specific_chars(e, sz_filter_set)
{
	var key, key_char;
	key = get_key(e);

	if (key == null)
	{
		return true;
	}

	// get character
	key_char = String.fromCharCode(key);
	key_char = key_char.toLowerCase();
	sz_filter_set = sz_filter_set.toLowerCase();

	// check goodkeys
	if (sz_filter_set.indexOf(key_char) != -1)
	{
		return true;
	}
		
	// control keys
	else if ( key==null || key==0 || key==8 || key==9 || key==13 || key==27 )
	{
   		return true;
	}
	else 
	{
	  return false
	}
}


/*
 * get_key()
 * Function for getting the value of the key from a given key event.
 *
 * @author    Jimmy Mwang'ondi jmwangondi@malikwamali.co.ke
 * @date      2007-01-01
 *
 * @params    1. e: the event entered
 *
 * @return    key: key value corresponding with the event
 *
 * Change Record
 *
 * Date        Revision
 * ----------------------------------------------------------------------------
 *
 *
 */

function get_key(e)
{
	if (window.event)
	{
   		return window.event.keyCode;
	}
	else if (e)
	{
   		return e.which;
	}
	else
	{
   		return null;
	}
}


/*
 * isBlank()
 * Function for ascertaining whether a given string is blank.
 *
 * @author    Jimmy Mwang'ondi jmwangondi@malikwamali.co.ke
 * @date      2007-01-01
 *
 * @params    s: string to test
 *
 * @return    boolean
 *            1. true when the string is blank
 *            2. false when the string is non empty
 *
 * Change Record
 *
 * Date        Revision
 * ----------------------------------------------------------------------------
 *
 *
 */
 
function is_blank(s)
{
  for(var i = 0; i < s.length; i++)
  {
    var c = s.charAt(i);
    if ((c != ' ') && (c != '\n') && (c != '\t')) 
	{
		return false;
	}
  }
  return true;
}


/*
 * validate_email_address()
 * Function for ascertaing whether the entered e-mail address is a valid e-mail address or not
 *
 * @author    Jimmy Mwang'ondi jmwangondi@malikwamali.co.ke
 * @date      2007-01-01
 *
 * @params    1. sz_email: the e-mail address entered
 *
 * @return    boolean: true when e-mail address is valid and false when e-mail address is invalid
 *
 * Change Record
 *
 * Date        Revision
 * ----------------------------------------------------------------------------
 *
 *
 */
 
function validate_email_address(sz_email)
{
	//length of e-mail
	var i_length = sz_email.length; 
	
	//last character of e-mail string
	var c_last_char = sz_email.charAt(i_length- 1); 
	
	// first character of e-mail string
	var c_first_char = sz_email.charAt(0); 
	
	//1st position of ' ' (space)
	var ch_space = sz_email.indexOf(' '); 
	
	//1st position of . (dot)
	var c_dot_symbol = sz_email.indexOf('.'); 
	
	//1st position of @
	var c_at_symbol = sz_email.indexOf('@'); 
  
	if ((i_length > 0) && (ch_space < 0) && (c_at_symbol >= 0) && (c_first_char != '@') && (c_last_char != '@') && (c_dot_symbol >= 0) && (c_first_char != '.') && (c_last_char != '.'))
  	{
    	return true;
  	}
  	else
  	{
    	return false;
  	}
}


/*
 * validate_feedback()
 * Function for validating whether entries made in the feedback form are valid
 *
 * @author    Jimmy Mwang'ondi jmwangondi@malikwamali.co.ke
 * @date      2007-01-01
 * @return    boolean
 *            1. true when all entries are valid
 *            2. false when one or more entries are invalid
 *
 * Change Record
 *
 * Date        Revision
 * ----------------------------------------------------------------------------
 *
 *
 */
 
function validate_feedback()
{
	// feedback subject 
	if (document.frm_feedback.txt_subject.value=="")
	{
		alert("Please enter the feedback subject.");
		return false;
	}

	// feedback sender
	else if (document.frm_feedback.txt_full_names.value=="")
	{
		alert("Please enter your name.");
		return false;
	}

	// feedback message
	else if (document.frm_feedback.txt_message.value=="")
	{
		alert("Please enter the feedback message.");
		return false;
	}

	// sender's email
	else if (validate_email_address(document.frm_feedback.txt_email_address.value)==false)
	{
		alert("Please enter a valid e-mail address.");
		return false;
	}
	
	// security code
	else if (document.frm_feedback.txt_security_code.value=="")
	{
		alert("Please enter a valid security code.");
		return false;
	}
}