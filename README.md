# pixi-workbench
Reproducing a masking bug in Cocoon.io

Install by running: npm install

Notice the lines of code in masking.js between row 21 and 25.

That produces a black masked rectangle on both:
Chrome on Windows 7
Safari on iPhone 6

But in Cocoon.io test app on iPhone 6, the second rectangle is not visible at all.