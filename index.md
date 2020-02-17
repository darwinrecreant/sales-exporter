# Sansar Sales Exporter

[Source code](https://github.com/darwinrecreant/sales-exporter)

This bookmarketlet will let you export your sales into csv format. It will export only the sales visible on the page, so you will have to scroll down to view more.

**Warning:** You should never save bookmarklets, which are javascript snippets, from random strangers, those can be malicious. Only use this bookmarlet if you know me and trust me.

## Instructions

1. Save this bookmarklet by dragging this link ([Sales Exporter](javascript:%28%28%24%2C%20%24%24%29%20%3D%3E%20%7B%20const%20headers%20%3D%20%24%24%28%27table%20thead%20th%27%29.map%28%28elem%29%20%3D%3E%20elem.textContent%29%3B%20const%20rows%20%3D%20%24%24%28%27table%20tbody%20tr%27%29.map%28%28elem%29%20%3D%3E%20%7B%20return%20%5B%5D.slice.call%28elem.querySelectorAll%28%27li%27%29%29.map%28%28el%29%20%3D%3E%20el.textContent%29%3B%20%7D%29%3B%20headers%5B4%5D%20%3D%20%22Day%22%3B%20const%20csv%20%3D%20%22data%3Atext%2Fcsv%3Bcharset%3Dutf-8%2C%22%20%2B%20%5Bheaders%2C%20...rows%5D.map%28%28row%2C%20i%29%20%3D%3E%20%7B%20const%20d%20%3D%20%28row%5B2%5D.split%28%22%20%22%29%5B0%5D.replace%28%2F%5C%2F%2Fg%2C%20%22-%22%29%29%3B%20row%20%3D%20row.map%28%28cell%29%20%3D%3E%20%7B%20cell%20%3D%20cell.replace%28%2F%22%2Fg%2C%20%27%22%22%27%29.replace%28%2F%5E%28-%7C%5C%2B%7C%40%7C%3D%7CS%5C%24%29%2Fg%2C%20%22%22%29%3B%20if%20%28cell.search%28%2F%5B%23%22%2C%5Cn%5D%2F%29%20%3E%20-1%29%20%7B%20return%20%60%22%24%7Bcell%7D%22%60%3B%20%7D%20return%20cell%3B%20%7D%29%3B%20if%20%28i%29%20row.push%28d%29%3B%20return%20row.join%28%27%2C%27%29%3B%20%7D%29.join%28%22%5Cn%22%29%3B%20var%20encodedUri%20%3D%20encodeURI%28csv%29%3B%20var%20link%20%3D%20document.createElement%28%22a%22%29%3B%20link.setAttribute%28%22href%22%2C%20encodedUri%29%3B%20link.setAttribute%28%22download%22%2C%20%60sales_%24%7Bnew%20Date%28%29.toISOString%28%29.split%28%27T%27%29%5B0%5D%7D.csv%60%29%3B%20link.click%28%29%3B%20%7D%29%28%28s%29%20%3D%3E%20document.querySelector%28s%29%2C%20%28s%29%20%3D%3E%20%5B%5D.slice.call%28document.querySelectorAll%28s%29%29%29%3B)) into your bookmarks bar (dont click it here, just drag)
2. Go to your Sansar sales dashboard, and scroll down for as far back you want to export. The infinite scroll sometimes breaks, in which case you can scroll up and back down to try to trigger it again.
3. Click the bookmark you saved above while on the sales page. This will download the sales as a csv file which you can open in excel.

## Optional

If you don't trust the link above then you can copy the source code in the js file in the repository provided at the top, save a bookmark on the sales page, edit the bookmark, write `javascript:` in the url bar of the bookmark, and paste the code after that text in the same url bar.