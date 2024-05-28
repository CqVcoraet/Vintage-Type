// Title Font
var titleFont = document.createElement("link");
titleFont.href = "https://fonts.googleapis.com/css2?family=Pacifico&display=swap";
titleFont.rel = "stylesheet";
document.head.appendChild(titleFont);

// Body Font
var bodyFont = document.createElement("link");
bodyFont.href = "https://fonts.googleapis.com/css2?family=Satisfy&display=swap";
bodyFont.rel = "stylesheet";
document.head.append(bodyFont);

// Background
var bg = document.createElement("div");
var bgWidth = 1400;
var bgHeight = 3200;
bg.style.left = "50%";
bg.style.top = "50%";
bg.style.width = bgWidth + "px";
bg.style.height = bgHeight + "px";
bg.style.position = "absolute";
bg.style.transform = "translate(-50%, -50%)";
bg.style.backgroundColor = "#E2D7A7";
document.body.appendChild(bg);

// Title
var title = document.createElement("h1");
title.style.fontFamily = "Pacifico";
title.style.fontSize = "80px";
title.style.color = "#C05F56";
title.style.position = "absolute";
title.style.left = "50%";
title.style.top = "39%";
title.style.transform = "translate(-50%, -50%)";
title.style.textAlign = "center";
title.style.textShadow = "2px 2px 4px #8e2d24";
title.style.textDecoration = "underline";
title.style.fontWeight = "bold";
title.innerHTML = "The Vintage Type";
bg.append(title);

// Vintage Button
var vintageButton = document.createElement("button");
vintageButton.style.fontFamily = "Satisfy";
vintageButton.style.fontSize = "30px";
vintageButton.style.position = "absolute";
vintageButton.style.left = "50%";
vintageButton.style.top = "46.5%";
vintageButton.style.transform = "translate(-50%, -50%)";
vintageButton.style.textAlign = "center";
vintageButton.style.zIndex = "1";
vintageButton.style.backgroundColor = "#C05F56";
vintageButton.style.color = "#E2D7A7";
vintageButton.style.border = "#C05F56 1px 1px 1px 1px";
vintageButton.style.borderRadius = "10px";
vintageButton.style.padding = "10px";
vintageButton.style.cursor = "pointer";
vintageButton.innerHTML = "Vintage Me";
bg.append(vintageButton);

// Body Text
var bodyText = document.createElement("div");
bodyText.style.fontFamily = "Satisfy";
bodyText.style.fontSize = "30px";
bodyText.style.position = "absolute";
bodyText.style.width = "1100px"
bodyText.style.left = "50%";
bodyText.style.top = "50%";
bodyText.style.transform = "translateX(-50%)";
bodyText.style.textAlign = "center";
bodyText.style.color = "#764838";
bodyText.style.textShadow = "2px 2px 4px #4e2010";
bodyText.innerHTML = "The Vintage Type is just to remind you that vintage themes are not just the thing of the past but can relive its beauty in the present moment. ";
bodyText.innerHTML += "We should preserve some of the beauty of vintage designs and make them a part of our lives. This prevents us from completely forgetting it. ";
bodyText.innerHTML += "After all, vintage designs kept you safe in the past before humanity had advanced technology. I am not stuck in the past. I still agree with the idea of embracing new technology. ";
bodyText.innerHTML += "Just don't forget where you started and the beauty og it.";
bg.append(bodyText);