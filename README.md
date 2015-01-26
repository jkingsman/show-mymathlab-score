Show MyMathLab Score
=============

Chrome extension that gets rid of the need to click 'see score' on graded homeworks to reveal the graded score. This is helpful if you're not worried about someone judging you over your shoulder and you'd like to see historical scores (good for a pat on the back or motiviation for improvement depending on your scores!).

[![Image of Chrome Store Badge](https://developer.chrome.com/webstore/images/ChromeWebStore_Badge_v2_340x96.png)](https://chrome.google.com/webstore/detail/jjhpblijgldjbcfnahljfciinemidmck)

Caveats
=============
This runs what would usually be a problematically greedy script - it matches all `a` elements with an innerHTML of 'see score'. The Chrome extension permissions restrict it to `https://www.mathxl.com/Student/*`, which seems to be comfortably limiting while still taking into account the URL layout variations. 

Permissions should let this work in all frames (necessary in cases where the access is through an eLearning portal such as Canvas/BlackBoard/etc). Theoretically, even the `"all_frames": true` content option shouldn't work for asynchronously loaded frames, but I seem to have proof negative of that on our learning portal (I may be misinterpreting my data though) -- the impact should be moot, as in my case, it works, but if you run into problems (and someone other than me is reading this), it may be worth investigation.

License
==============
MIT.