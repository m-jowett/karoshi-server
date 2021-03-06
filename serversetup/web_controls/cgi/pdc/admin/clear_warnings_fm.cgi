#!/bin/bash
#Copyright (C) 2007  Paul Sharrad

#This file is part of Karoshi Server.
#
#Karoshi Server is free software: you can redistribute it and/or modify
#it under the terms of the GNU Affero General Public License as published by
#the Free Software Foundation, either version 3 of the License, or
#(at your option) any later version.
#
#Karoshi Server is distributed in the hope that it will be useful,
#but WITHOUT ANY WARRANTY; without even the implied warranty of
#MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#GNU Affero General Public License for more details.
#
#You should have received a copy of the GNU Affero General Public License
#along with Karoshi Server.  If not, see <http://www.gnu.org/licenses/>.

#
#The Karoshi Team can be contacted at: 
#mpsharrad@karoshi.org.uk
#jsharrad@karoshi.org.uk

#
#Website: http://www.karoshi.org.uk

#Detect mobile browser
MOBILE=no
source /opt/karoshi/web_controls/detect_mobile_browser
source /opt/karoshi/web_controls/version


############################
#Language
############################

STYLESHEET=defaultstyle.css
TIMEOUT=300
NOTIMEOUT=127.0.0.1
[ -f /opt/karoshi/web_controls/user_prefs/$REMOTE_USER ] && source /opt/karoshi/web_controls/user_prefs/$REMOTE_USER
TEXTDOMAIN=karoshi-server

#Check if timout should be disabled
if [ `echo $REMOTE_ADDR | grep -c $NOTIMEOUT` = 1 ]
then
	TIMEOUT=86400
fi
############################
#Show page
############################
echo "Content-type: text/html"
echo ""
echo '
<!DOCTYPE html><html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <title>'$"Clear Web Management Warning Messages"'</title><meta http-equiv="REFRESH" content="'$TIMEOUT'; URL=/cgi-bin/admin/logout.cgi">
<link rel="stylesheet" href="/css/'$STYLESHEET'?d='$VERSION'">
<script src="/all/stuHover.js" type="text/javascript"></script><meta name="viewport" content="width=device-width, initial-scale=1"> <!--480-->'

if [ $MOBILE = yes ]
then
echo '<link rel="stylesheet" type="text/css" href="/all/mobile_menu/sdmenu.css">
	<script src="/all/mobile_menu/sdmenu.js">
		/***********************************************
		* Slashdot Menu script- By DimX
		* Submitted to Dynamic Drive DHTML code library: www.dynamicdrive.com
		* Visit Dynamic Drive at www.dynamicdrive.com for full source code
		***********************************************/
	</script>
	<script>
	// <![CDATA[
	var myMenu;
	window.onload = function() {
		myMenu = new SDMenu("my_menu");
		myMenu.init();
	};
	// ]]>
	</script>'
fi

echo '</head>
<body onLoad="start()"><div id="pagecontainer">'


#Generate navigation bar
if [ $MOBILE = no ]
then
	DIV_ID=actionbox
	#Generate navigation bar
	/opt/karoshi/web_controls/generate_navbar_admin
else
	DIV_ID=mobileactionbox
fi

echo '<form action="/cgi-bin/admin/clear_warnings.cgi" method="post">'

#Show back button for mobiles
if [ $MOBILE = yes ]
then
	SERVERNAME2=`echo $SERVERNAME | cut -d. -f1`
	echo '<div style="float: center" id="my_menu" class="sdmenu">
	<div class="expanded">
	<span>'$"Clear Warning Messages"'</span>
	<a href="/cgi-bin/admin/mobile_menu.cgi">'$"Menu"'</a>
	</div></div>
	<div id="'$DIV_ID'">
	'

	else
	echo '<div id="'$DIV_ID'"><div class="sectiontitle">'$"Clear Web Management Warning Messages"'</div><br>'
fi

echo ''$"Clear web management warning messages?"' <a class="info" target="_blank" href="http://www.linuxschools.com/karoshi/documentation/wiki/index.php?title=Clear_Warning_Messages"><img class="images" alt="" src="/images/help/info.png"><span>'$"This will clear the warning messages that appear at the top of the web management pages."'</span></a><br><br>'
[ $MOBILE = no ] && echo '</div><div id="submitbox">'
echo '<input value="'$"Submit"'" class="button" type="submit">
</div></form></div></body></html>
'
exit
