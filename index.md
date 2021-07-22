# Sansar Sales Exporter

[Source code](https://github.com/darwinrecreant/sales-exporter)

This bookmarketlet will let you export your sales into csv format. It will export only the sales visible on the page, so you will have to scroll down to view more.

**Warning:** You should never save bookmarklets, which are javascript snippets, from random strangers, those can be malicious. Only use this bookmarlet if you know me and trust me.

## Instructions

1. Save this bookmarklet by dragging this link ([Sales Exporter](javascript:((t%2Ce)%3D%3E%7Bconst%20l%3De(%22table%20thead%20th%22).map(t%3D%3Et.textContent)%2Ca%3De(%22table%20tbody%20tr%22).map(t%3D%3E%5B%5D.slice.call(t.querySelectorAll(%22li%22)).map(t%3D%3Et.textContent).concat(%5Bt.lastElementChild.textContent%5D))%3Bl.push(%22Day%22)%3Bconst%20n%3D%5Bl%2C...a%5D.map((t%2Ce)%3D%3E%7Bconst%20l%3Dt%5B2%5D.split(%22%20%22)%5B0%5D.replace(%2F%5C%2F%2Fg%2C%22-%22)%3Breturn%20t%3Dt.map(t%3D%3E(t%3Dt.replace(%2F%22%2Fg%2C%27%22%22%27).replace(%2F%5E(-%7C%5C%2B%7C%40%7C%3D%7CS%5C%24)%2Fg%2C%22%22)).search(%2F%5B%23%22%2C%5Cn%5D%2F)%3E-1%3F%60%22%24%7Bt%7D%22%60%3At)%2Ce%26%26t.push(l)%2Ct.join(%22%2C%22)%7D).join(%22%5Cn%22)%3Bvar%20c%3D%22data%3Atext%2Fcsv%3Bcharset%3Dutf-8%2C%25EF%25BB%25BF%22%2BencodeURIComponent(n)%2Co%3Ddocument.createElement(%22a%22)%3Bo.setAttribute(%22href%22%2Cc)%2Co.setAttribute(%22download%22%2C%60sales_%24%7B(new%20Date).toISOString().split(%22T%22)%5B0%5D%7D.csv%60)%2Cdocument.body.appendChild(o)%2Co.click()%7D)(0%2Ct%3D%3E%5B%5D.slice.call(document.querySelectorAll(t)))%3B)) into your bookmarks bar (dont click it here, just drag)
2. Go to your Sansar sales dashboard, and scroll down for as far back you want to export. The infinite scroll sometimes breaks, in which case you can scroll up and back down to try to trigger it again.
3. Click the bookmark you saved above while on the sales page. This will download the sales as a csv file which you can open in excel.

## Optional

If you don't trust the link above then you can copy the source code in the js file in the repository provided at the top, save a bookmark on the sales page, edit the bookmark, write `javascript:` in the url bar of the bookmark, and paste the code after that text in the same url bar.
