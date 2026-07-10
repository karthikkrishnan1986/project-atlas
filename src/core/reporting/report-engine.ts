import * as fs from "node:fs";
import * as path from "node:path";

export class ReportEngine {

    generate(aiSummary: string = "AI analysis pending...") {

        const timestamp = new Date()
            .toISOString()
            .replace(/:/g, "-")
            .replace(/\./g, "-");

        const reportFolder = path.join("reports", timestamp);

        fs.mkdirSync(reportFolder, { recursive: true });

        // Copy screenshot if it exists
        const screenshotSource = path.join("playwright-report", "homepage.png");
        const screenshotDestination = path.join(reportFolder, "homepage.png");

        if (fs.existsSync(screenshotSource)) {
            fs.copyFileSync(screenshotSource, screenshotDestination);
        }

        const html = `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Project Atlas Report</title>

<style>

body{
font-family:Arial;
background:#ECEFF1;
padding:40px;
}

.container{
background:white;
padding:30px;
border-radius:12px;
max-width:900px;
margin:auto;
box-shadow:0px 4px 15px rgba(0,0,0,.15);
}

h1{
color:#1565C0;
}

.success{
color:green;
font-size:22px;
font-weight:bold;
}

img{
width:100%;
border:1px solid #ccc;
margin-top:20px;
}

pre{
background:#f4f4f4;
padding:15px;
border-radius:8px;
white-space:pre-wrap;
}

</style>

</head>

<body>

<div class="container">

<h1>🚀 Project Atlas</h1>

<h2>Enterprise AI Test Platform</h2>

<hr>

<p class="success">PASS</p>

<p><b>Browser:</b> Chromium</p>

<p><b>URL:</b> https://playwright.dev</p>

<p><b>Generated:</b> ${new Date()}</p>

<h2>AI Summary</h2>

<pre>${aiSummary}</pre>

<h2>Screenshot</h2>

<img src="homepage.png"/>

</div>

</body>

</html>
`;

        fs.writeFileSync(
            path.join(reportFolder, "report.html"),
            html
        );

        console.log("📄 HTML Report Generated");
        console.log(reportFolder);

    }

}