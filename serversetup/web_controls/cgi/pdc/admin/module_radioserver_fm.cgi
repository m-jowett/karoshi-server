#!/bin/bash
#Copyright (C) 2011  Paul Sharrad

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
<!DOCTYPE html>
<html>
<head>
  <title>'$"Setup Internet Radio Server"'</title><meta http-equiv="REFRESH" content="'$TIMEOUT'; URL=/cgi-bin/admin/logout.cgi">
<link rel="stylesheet" href="/css/'$STYLESHEET'?d='$VERSION'">
<script src="/all/stuHover.js" type="text/javascript"></script>
</head>
<body onLoad="start()"><div id="pagecontainer">'
#########################
#Get data input
#########################
TCPIP_ADDR=$REMOTE_ADDR
#DATA=`cat | tr -cd 'A-Za-z0-9\._:\-'`
DATA=`cat | tr -cd 'A-Za-z0-9\._:%\-+'`
#########################
#Assign data to variables
#########################
END_POINT=5
#Assign SERVERNAME

COUNTER=2
while [ $COUNTER -le $END_POINT ]
do
	DATAHEADER=`echo $DATA | cut -s -d'_' -f$COUNTER`
	if [ `echo $DATAHEADER'check'` = SERVERNAMEcheck ]
	then
		let COUNTER=$COUNTER+1
		SERVERNAME=`echo $DATA | cut -s -d'_' -f$COUNTER`
		break
	fi
	let COUNTER=$COUNTER+1
done

function show_status {
echo '<SCRIPT language="Javascript">'
echo 'alert("'$MESSAGE'")';
echo 'window.location = "/cgi-bin/admin/karoshi_servers_view.cgi"'
echo '</script>'
echo "</div></body></html>"
exit
}

#########################
#Check data
#########################
#Check to see that servername is not blank
if [ -z "$SERVERNAME" ]
then
	MESSAGE=$"The server cannot be blank."
	show_status
fi

#Check to see if this module has already been installed on the server
if [ -f /opt/karoshi/server_network/servers/$SERVERNAME/radioserver ]
then
	STATUSMSG=$"This module has already been set up on this server."
fi

#Generate navigation bar
/opt/karoshi/web_controls/generate_navbar_admin

echo '
<form action="/cgi-bin/admin/module_radioserver.cgi" method="post">
<div id="actionbox">
<div class="sectiontitle">'$"Setup Internet Radio Server" - $SERVERNAME'</div><br>
<input name="_SERVERNAME_" value="'$SERVERNAME'" type="hidden">
<b>'$"Description"'</b><br><br>
'$"This will set up an Internet Radio Server for your network."'<br><br>'

if [ ! -z "$STATUSMSG" ]
then
	echo ''$STATUSMSG'<br><br>'
fi

echo '<b>'$"Parameters"'</b><br><br>
  <table class="standard" style="text-align: left;" >
    <tbody>
      <tr>
        <td style="width: 180px;">
'$"Admin Password"'</td>
        <td><input tabindex= "1"  name="_ADMINPASS_" style="width: 200px;" size="20" type="password"></td><td>
<a class="info" href="javascript:void(0)"><img class="images" alt="" src="/images/help/info.png"><span>'$"This is used to access the icecast server as the admin user."'</span></a>
      </td></tr>
      <tr>
        <td style="width: 180px;">
'$"Source Password"'</td>
        <td><input tabindex= "1"  name="_SOURCEPASS_" style="width: 200px;" size="20" type="password"></td><td>
<a class="info" href="javascript:void(0)"><img class="images" alt="" src="/images/help/info.png"><span>'$"This is needed by the program that you are using to stream your sound to the icecast server."'</span></a>
      </td></tr>
      <tr>
        <td style="width: 180px;">
'$"Relay Password"'</td>
        <td><input tabindex= "1" name="_RELAYPASS_" style="width: 200px;" size="20" type="password"></td><td>
<a class="info" href="javascript:void(0)"><img class="images" alt="" src="/images/help/info.png"><span>'$"This is needed if you want to use your icecast server as a relay."'</span></a>
      </td></tr>


</tbody></table>

'
echo '</div>
<div id="submitbox">
<input value="'$"Submit"'" class="button" type="submit">
</div>
</form>
</div></body>
</html>
'
exit
