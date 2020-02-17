(($, $$) => {
  const headers = $$('table thead th').map((elem) => elem.textContent);
  const rows = $$('table tbody tr').map((elem) => {
    return [].slice.call(elem.querySelectorAll('li')).map((el) => el.textContent);
  });
  headers[4] = "Day";
  const csv = "data:text/csv;charset=utf-8," + [headers, ...rows].map((row, i) => {
    const d = (row[2].split(" ")[0].replace(/\//g, "-"));
    row = row.map((cell) => {
      cell = cell.replace(/"/g, '""').replace(/^(-|\+|@|=|S\$)/g, "");
      if (cell.search(/[#",\n]/) > -1) {
        return `"${cell}"`;
      }
      return cell;
    });
    if (i)
      row.push(d);
    return row.join(',');
  }).join("\n");
  var encodedUri = encodeURI(csv);
  var link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `sales_${new Date().toISOString().split('T')[0]}.csv`);
  document.body.appendChild(link);
  link.click();
})((s) => document.querySelector(s), (s) => [].slice.call(document.querySelectorAll(s)));