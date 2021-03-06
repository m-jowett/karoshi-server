#!/bin/bash
#Copyright (C) 2010  Paul Sharrad

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
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <title>'$"E-Mail - SMS Alerts"'</title><meta http-equiv="REFRESH" content="'$TIMEOUT'; URL=/cgi-bin/admin/logout.cgi">
<link rel="stylesheet" href="/css/'$STYLESHEET'?d='$VERSION'">
<script src="/all/stuHover.js" type="text/javascript"></script>
</head>
<body onLoad="start()"><div id="pagecontainer">'
#########################
#Get data input
#########################
TCPIP_ADDR=$REMOTE_ADDR
DATA=`cat | tr -cd 'A-Za-z0-9\.%_:\-' | sed 's/%40/@/g'`
#########################
#Assign data to variables
#########################
END_POINT=9
#Assign NAME
COUNTER=2
while [ $COUNTER -le $END_POINT ]
do
	DATAHEADER=`echo $DATA | cut -s -d'_' -f$COUNTER`
	if [ `echo $DATAHEADER'check'` = NAMEcheck ]
	then
		let COUNTER=$COUNTER+1
		NAME=`echo $DATA | cut -s -d'_' -f$COUNTER`
		break
	fi
	let COUNTER=$COUNTER+1
done
#Assign EMAILTO
COUNTER=2
while [ $COUNTER -le $END_POINT ]
do
	DATAHEADER=`echo $DATA | cut -s -d'_' -f$COUNTER`
	if [ `echo $DATAHEADER'check'` = EMAILTOcheck ]
	then
		let COUNTER=$COUNTER+1
		EMAILTO=`echo $DATA | cut -s -d'_' -f$COUNTER`
		break
	fi
	let COUNTER=$COUNTER+1
done
#Assign EMAILFROM
COUNTER=2
while [ $COUNTER -le $END_POINT ]
do
	DATAHEADER=`echo $DATA | cut -s -d'_' -f$COUNTER`
	if [ `echo $DATAHEADER'check'` = EMAILFROMcheck ]
	then
		let COUNTER=$COUNTER+1
		EMAILFROM=`echo $DATA | cut -s -d'_' -f$COUNTER`
		break
		fi
	let COUNTER=$COUNTER+1
done
#Assign MAILSERVER
COUNTER=2
while [ $COUNTER -le $END_POINT ]
do
	DATAHEADER=`echo $DATA | cut -s -d'_' -f$COUNTER`
	if [ `echo $DATAHEADER'check'` = MAILSERVERcheck ]
	then
		let COUNTER=$COUNTER+1
		MAILSERVER=`echo $DATA | cut -s -d'_' -f$COUNTER`
		break
	fi
	let COUNTER=$COUNTER+1
done

#Generate navigation bar
/opt/karoshi/web_controls/generate_navbar_admin
#Check to see if a monitoring server has been setup
if [ -f /opt/karoshi/server_network/monitoringserver ]
then
	echo '<form action="/cgi-bin/admin/monitors_add_email_alert.cgi" method="post"><div id="actionbox">
<table class="standard" style="text-align: left;" >
<tbody><tr><td style="vertical-align: top; width: 130px;"><b>'$"E-Mail - SMS Alerts"'</b></td><td style="vertical-align: top;"><a class="info" target="_blank" href="http://www.linuxschools.com/karoshi/documentation/wiki/index.php?title=Add_eMail_Alerts"><img class="images" alt="" src="/images/help/info.png"><span>'$"This allows you to send e-mail alerts in the event of a network failure."'</span></a></td>
<td style="vertical-align: top;">
<a href="/cgi-bin/admin/monitors_view_email_alerts_fm.cgi"><input class="button" type="button" name="" value="'$"E-Mail Alerts"'"></a>
</td>
<td style="vertical-align: top;">
<a href="/cgi-bin/admin/mon_status.cgi"><input class="button" type="button" name="" value="'$"Network Status"'"></a>
</td>
</tr></tbody></table>
<br>
  <table class="standard" style="text-align: left;" >
    <tbody>
	<tr>
        <td style="width: 180px;">
'$"Contact Name"'</td>
        <td><input tabindex= "1" name="_NAME_" value="'$NAME'" size="35" type="text"></td><td>
<a class="info" target="_blank" href="http://www.linuxschools.com/karoshi/documentation/wiki/index.php?title=Monitor_Server#Adding_E-Mail_-_SMS_Alerts"><img class="images" alt="" src="/images/help/info.png"><span>'$"Enter a short name for this E-Mail alert."'</span></a>
      </td></tr>
      <tr>
        <td>
'$"Send E-Mail to"'</td>
        <td><input tabindex= "1" name="_EMAILTO_" value="'$EMAILTO'" size="35" type="text"></td><td>
<a class="info" target="_blank" href="http://www.linuxschools.com/karoshi/documentation/wiki/index.php?title=Monitor_Server#Adding_E-Mail_-_SMS_Alerts"><img class="images" alt="" src="/images/help/info.png"><span>'$"Enter in the email address you want the alert sent to."'</span></a>
      </td></tr>
      <tr>
        <td>
'$"E-Mail from"'</td>
        <td><input tabindex= "2" name="_EMAILFROM_" value="'$EMAILFROM'" size="35" type="text"></td><td>
<a class="info" target="_blank" href="http://www.linuxschools.com/karoshi/documentation/wiki/index.php?title=Monitor_Server#Adding_E-Mail_-_SMS_Alerts"><img class="images" alt="" src="/images/help/info.png"><span>'$"Enter in the email address of the sender."'</span></a>
      </td></tr>
      <tr>
        <td>
'$"E-Mail Server"'</td>
        <td><input tabindex= "3" name="_MAILSERVER_" value="'$MAILSERVER'" size="35" type="text"></td><td>
<a class="info" target="_blank" href="http://www.linuxschools.com/karoshi/documentation/wiki/index.php?title=Monitor_Server#Adding_E-Mail_-_SMS_Alerts"><img class="images" alt="" src="/images/help/info.png"><span>'$"Enter in the address of the mail server that you want to send the email to."'</span></a>
      </td></tr>
    </tbody>
  </table><br><br>
</div>
<div id="submitbox">
<input value="'$"Submit"'" class="button" type="submit"> <input value="'$"Reset"'" class="button" type="reset">
</div>
</form>'
else
	echo '<div id="actionbox"><div class="sectiontitle">'$"E-Mail - SMS Alerts"'</div><br>'$"A monitoring server has not been setup."'<br><br></div>'
fi
echo '</div></body>
</html>
'
exit
