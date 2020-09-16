# ACME search project
By Isabelle Nguyen

##How to run
To run, download my files.  Open up my index.html on localhost.  You can do this by running ```python -m http.server``` or ```python3 -m http.server``` in the terminal.  Then, open localhost:PORT# on a web browser. Then, navigate to my index.html file to open.  

##My design
I sorted slack messages, tweets, and files in descending timestamp.  More recent content for these will likely be more relevant to the user.  I assumed the json file will naturally be sorted by ascending.  

Meetings are in ascending order, since the earliest meeting is likely the one we need to attend.  I'm assuming meetings will get deleted as their date passes.

I organized the slack messages by channels.  You can see this if you search "alice".  I referenced how Slack displayed their searches.  It would be more familar to the user if it looks like what Slack has for searches. 

I tried to make my site responsive as possible for mobile to desktop sizes.

The extra feature I implemented is being able to select which types of information you want to include/exclude using checkboxes.

##Trade-offs
A trade-off I had was stretching the elements to fit the page.  Sometimes, it looks off having such a large width for not that much info.  However, if I don't stretch, the page can look empty depending on what the user searched.

Also, I wanted to make the front-end look nicer and more readable, but it was recommended that we shouldn't spend too many hours on this.