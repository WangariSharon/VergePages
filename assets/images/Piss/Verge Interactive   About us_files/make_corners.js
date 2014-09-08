/*nifty corners layout*/

function make_corners()
{
/*Nifty("div#menu a","small transparent top");
Nifty("ul#intro li","same-height");
Nifty("div.date");
Nifty("div#content,div#side","same-height");
Nifty("div.comments div");*/
Nifty("div#copyright");
Nifty("div#inbox_content");
Nifty("div#sign_in_outer","top");
Nifty("div#sign_in_inner","none same-height");
Nifty("div#classifieds_inbox","left");
Nifty("div#businesses_inbox","left");
Nifty("div#property_inbox","left");
Nifty("div#purse_inbox","left");
Nifty("div#smarti_inbox","left");
Nifty("div#related_categories_header","top");
Nifty("div#related_categories_body","none same-height");
Nifty("div#weather_updates_header","top");
Nifty("div#weather_updates_header","none same-height");
Nifty("div#sample_properties_header","top");
Nifty("div#sample_properties_body","none same-height");
}
window.onload=function(){
	make_corners();
}