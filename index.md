# Sansar Sales Exporter

[Source code](https://github.com/darwinrecreant/sales-exporter)

This bookmarketlet will let you export your sales into csv format. It will export only the sales visible on the page, so you will have to scroll down to view more.

**Warning:** You should never save bookmarklets, which are javascript snippets, from random strangers, those can be malicious. Only use this bookmarlet if you know me and trust me.

## Instructions

1. Save this bookmarklet by dragging this link ([Sales Exporter](javascript:%28%28t%252Ce%29%253D%253E%257Bconst%2520l%253De%28%2522table%2520thead%2520th%2522%29.map%28t%253D%253Et.textContent%29%252Ca%253De%28%2522table%2520tbody%2520tr%2522%29.map%28t%253D%253E%255B%255D.slice.call%28t.querySelectorAll%28%2522li%2522%29%29.map%28t%253D%253Et.textContent%29.concat%28%255Bt.lastElementChild.textContent%255D%29%29%253Bl.push%28%2522Day%2522%29%253Bconst%2520n%253D%255Bl%252C...a%255D.map%28%28t%252Ce%29%253D%253E%257Bconst%2520l%253Dt%255B2%255D.split%28%2522%2520%2522%29%255B0%255D.replace%28%252F%255C%252F%252Fg%252C%2522-%2522%29%253Breturn%2520t%253Dt.map%28t%253D%253E%28t%253Dt.replace%28%252F%2522%252Fg%252C%2527%2522%2522%2527%29.replace%28%252F%255E%28-%257C%255C%252B%257C%2540%257C%253D%257CS%255C%2524%29%252Fg%252C%2522%2522%29%29.search%28%252F%255B%2523%2522%252C%255Cn%255D%252F%29%253E-1%253F%2560%2522%2524%257Bt%257D%2522%2560%253At%29%252Ce%2526%2526t.push%28l%29%252Ct.join%28%2522%252C%2522%29%257D%29.join%28%2522%255Cn%2522%29%253Bvar%2520c%253D%2522data%253Atext%252Fcsv%253Bcharset%253Dutf-8%252C%2525EF%2525BB%2525BF%2522%252BencodeURIComponent%28n%29%252Co%253Ddocument.createElement%28%2522a%2522%29%253Bo.setAttribute%28%2522href%2522%252Cc%29%252Co.setAttribute%28%2522download%2522%252C%2560sales_%2524%257B%28new%2520Date%29.toISOString%28%29.split%28%2522T%2522%29%255B0%255D%257D.csv%2560%29%252Cdocument.body.appendChild%28o%29%252Co.click%28%29%257D%29%280%252Ct%253D%253E%255B%255D.slice.call%28document.querySelectorAll%28t%29%29%29%253B) into your bookmarks bar (dont click it here, just drag)
2. Go to your Sansar sales dashboard, and scroll down for as far back you want to export. The infinite scroll sometimes breaks, in which case you can scroll up and back down to try to trigger it again.
3. Click the bookmark you saved above while on the sales page. This will download the sales as a csv file which you can open in excel.

## Optional

If you don't trust the link above then you can copy the source code in the js file in the repository provided at the top, save a bookmark on the sales page, edit the bookmark, write `javascript:` in the url bar of the bookmark, and paste the code after that text in the same url bar.
