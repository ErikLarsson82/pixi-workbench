# pixi-workbench
Reproducing a masking bug in Cocoon.io

Install by running: npm install

Notice the lines of code in masking.js between row 21 and 25.

That produces a black masked rectangle on both:
Chrome on Windows 7
Safari on iPhone 6

But in Cocoon.io test app on iPhone 6, the second rectangle is not visible at all.

![incorrect](https://cloud.githubusercontent.com/assets/4123744/22739098/721f36ca-ee0a-11e6-8b23-6437bd6f7efc.png)
![correct](https://cloud.githubusercontent.com/assets/4123744/22739099/7235bca6-ee0a-11e6-876e-ac4adcee7c22.png)