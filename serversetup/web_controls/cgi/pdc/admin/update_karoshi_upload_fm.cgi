#!/bin/bash
#copy_files_upload
#Copyright (C) 2012  Paul Sharrad

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
#jharris@karoshi.org.uk
#aball@karoshi.org.uk
#
#Website: http://www.karoshi.org.uk
############################
#Language
############################
LANGCHOICE=englishuk
STYLESHEET=defaultstyle.css
TIMEOUT=300
NOTIMEOUT=127.0.0.1
[ -f /opt/karoshi/web_controls/user_prefs/$REMOTE_USER ] && source /opt/karoshi/web_controls/user_prefs/$REMOTE_USER
[ -f /opt/karoshi/web_controls/language/$LANGCHOICE/system/update_karoshi ] || LANGCHOICE=englishuk
source /opt/karoshi/web_controls/language/$LANGCHOICE/system/update_karoshi
[ -f /opt/karoshi/web_controls/language/$LANGCHOICE/all ] || LANGCHOICE=englishuk
source /opt/karoshi/web_controls/language/$LANGCHOICE/all
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
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"><html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <TITLE>'$TITLE2'</TITLE><meta http-equiv="REFRESH" content="'$TIMEOUT'; URL=/cgi-bin/admin/logout.cgi">
<link rel="stylesheet" href="/css/'$STYLESHEET'?d='`date +%F`'">
<script src="/all/stuHover.js" type="text/javascript"></script>
</HEAD>
<BODY>'
#Generate navigation bar
/opt/karoshi/web_controls/generate_navbar_admin

echo '<div id="actionbox">
<B>'$TITLE2'</B> <a class="info" href="javascript:void(0)"><img class="images" alt="" src="/images/help/info.png"><span>'$HELPMSG3'</span></a>
<P>
'$UPLOADMSG'
<P>
        <FORM ENCTYPE="multipart/form-data" ACTION="/cgi-bin/admin/update_karoshi_upload.cgi" METHOD="POST">
        <TABLE class="standard" BORDER=0 WIDTH="570">
        <TR>
            <TD ALIGN=LEFT>
                '$PATCHFILEMSG':
            </TD>
            <TD>
                <INPUT TYPE="FILE" NAME="file-to-upload-01" SIZE="35">
            </TD>
        </TR>
        <TR>
            <TD ALIGN=LEFT>
                '$SIGFILEMSG':
            </TD>
            <TD>
                <INPUT TYPE="FILE" NAME="file-to-upload-02" SIZE="35">
            </TD>
        </TR>
        </TABLE>
</div><div id="submitbox">
<input value="'$SUBMITMSG'" class="button" type="submit"> <input value="'$RESETMSG'" class="button" type="reset">
</div>
        </FORM>
</div>
</BODY>
</HTML>
'
exit
