ulm_ie=window.showHelp;
ulm_opera=window.opera;

isFirstElementTrue=false; // boolean variable denoting whether it is the first element being displayed
idDisplayNextAgent=null;
isMouseOnTopOfAgent=false;
agentElement_LI=null;
liAgentCurrentName=null;
liCurrentElement=0;
iMaxAgents=0;
liAgentNamesArray=new Object();
liAgentHasLinkArray = new Object();
cw6_delay=0;
iMouseOffDelay=0;
iTypeDelay=0;
iScrollDelay=0;
iTopPosition_LI=0;
iExtent=0;

 
  
if(ulAgentsElement=document.getElementById("typetext"))
{
  newTypeTextObject=new typetext_data;
  cw6_delay=newTypeTextObject.message_delay;
  iMouseOffDelay=newTypeTextObject.mouseoff_delay;
  iTypeDelay=newTypeTextObject.type_delay;
  iScrollDelay=newTypeTextObject.scroll_delay;
  liAgentsElementArray=ulAgentsElement.getElementsByTagName("LI");
  for(iCounter=0;iCounter<liAgentsElementArray.length;iCounter++)
  {
    liAgentNamesArray["item"+iCounter]=liAgentsElementArray[iCounter].innerText; // the object contains the text between the tags - name of agent
	liAgentsElementArray[iCounter].id="ulmtty"+iCounter; // change the id of the li tags - ulmtty1 ulmty2 and so on
	tle=liAgentNamesArray["item"+iCounter].length;
	
	// removes any spaces
	if(liAgentNamesArray["item"+iCounter].substring(tle-1)==" ")
	  liAgentNamesArray["item"+iCounter]=liAgentNamesArray["item"+iCounter].substring(0,tle-1);
	  
	ta=liAgentsElementArray[iCounter].firstChild; // get the first element after the li element
	if((ta)&&(ta.tagName=="A"))
	  liAgentHasLinkArray["item"+iCounter]=1; // checks if the li has a valid a tag, the answer is 1 if true
	iMaxAgents++;
  }
  newDivElement=document.createElement("DIV"); // create new div element
  newDivElement.innerHTML="a"; // put a between the element- i think it is so that it has something
  newDivElement.style.visibility="hidden"; // hide the div
  ulAgentsElement.appendChild(newDivElement); // put the ul tag in the div
  ulAgentsElement.onmouseover=function(){if(idDisplayNextAgent){clearTimeout(idDisplayNextAgent);idDisplayNextAgent=null;}isMouseOnTopOfAgent=1;};
  ulAgentsElement.onmouseout=function(){if((isFirstElementTrue)&&(!idDisplayNextAgent))idDisplayNextAgent=setTimeout("typeAgentName(1)",iMouseOffDelay);isMouseOnTopOfAgent=false;};
  setStyles(newTypeTextObject); // set the style
  ulAgentsElement.style.display="block";
  iExtent=ulAgentsElement.offsetHeight; // position at which the div dissappears
  setTimeout("typeAgentName(1)",newTypeTextObject.initial_delay);
};


function blindAgentsName(agentElement_LI,cw26)
{
  if(iTopPosition_LI<iExtent)
  {
    agentElement_LI.style.top=(agentElement_LI.offsetTop-1)+"px";
	iTopPosition_LI++;
	setTimeout("blindAgentsName(document.getElementById('"+agentElement_LI.id+"'))",iScrollDelay);
  }
  else 
  {
	iTopPosition_LI=0;
	agentElement_LI.style.visibility="hidden";
	agentElement_LI.style.top="";
	setTimeout("typeAgentName(1,1)",10);
  }
};

function typeAgentName(booleanValue,cw29)
{
  if(booleanValue)
  {
    isFirstElementTrue=false;
	if((agentElement_LI)&&(!cw29))
	{
	  setTimeout("blindAgentsName(document.getElementById('"+agentElement_LI.id+"'))",10);
	  return;
	}
	agentElement_LI=document.getElementById("ulmtty"+liCurrentElement);
	liAgentCurrentName=agentElement_LI;
	if(liAgentHasLinkArray["item"+liCurrentElement])
	  liAgentCurrentName=agentElement_LI.firstChild; // the first child is the A tag
	liAgentCurrentName.innerText=""; // the text between the A tag that in essence is the tag Name - set it to blank
	agentElement_LI.style.visibility="visible";
  }
  lit=liAgentNamesArray["item"+liCurrentElement]; // lit is the name of the agent eg Malikwamali
  curlength=liAgentCurrentName.innerText.length; // this is the current length of the tag. if
  liAgentCurrentName.innerText=lit.substring(0,curlength+1); // the new text is the old text plus one additional character. If vill it becomes villa
  
  // if this two are equal it means that the whole name has been typed out
  if(curlength==lit.length)
  {
    // if the agent is not the last agent in the list,go to the next agent
    if(liCurrentElement<iMaxAgents-1)
	  liCurrentElement++;
	else 
	  // if it is the last, go to the first agent
	  liCurrentElement=0;
	isFirstElementTrue=1;
	if(!isMouseOnTopOfAgent) // checks whether mouse is ontop of the 
	  idDisplayNextAgent=setTimeout("typeAgentName(1)",cw6_delay); // 
	return;
  }
  setTimeout("typeAgentName(false)",iTypeDelay);
};

function setStyles(newTypeTextObject)
{
  np_refix="#typetext";
  sd="<style type='text/css'>";
  cw30=newTypeTextObject.margins.split(",");
  cw31=newTypeTextObject.container_width;
  if(!ulm_ie && !ulm_opera)
    cw31=newTypeTextObject.container_width-parseInt(cw30[1])-parseInt(cw30[3]);
  sd+=np_refix+" {overflow:hidden;position:relative;-moz-user-select:none;margin:0px;padding:0px;list-style:none;width:"+cw31+"px;padding-bottom:"+parseInt(cw30[2])+"px;padding-top:"+parseInt(cw30[0])+"px;padding-right:"+parseInt(cw30[1])+"px;padding-left:"+parseInt(cw30[3])+"px;"+newTypeTextObject.container_styles+"}";
  sd+=np_refix+" li{cursor:default;width:"+(newTypeTextObject.container_width-parseInt(cw30[1])-parseInt(cw30[3]))+"px;padding:0px;margin:0px;visibility:hidden;position:absolute;"+newTypeTextObject.item_styles+"}";
  sd+=np_refix+" div{"+newTypeTextObject.item_styles+"}";
  sd+=np_refix+" a{"+newTypeTextObject.link_styles+"}";
  sd+=np_refix+" a:hover{"+newTypeTextObject.link_hover_styles+"}";
  document.write(sd+"</style>");
}
