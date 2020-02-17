(($, $$) => {
  const headers = $$('table thead th').map((elem) => elem.textContent);
  const rows = $$('table tbody tr').map((elem) => {
    return [].slice.call(elem.querySelectorAll('li')).map((el) => el.textContent);
  });
  const csv = "data:text/csv;charset=utf-8," + [[...headers], ...rows].map((row) => {
    return row.map((cell) => {
      cell = cell.replace(/"/g, '""').replace(/^(-|\+|@|=|S\$)/g, "");
      if (cell.search(/[ ",\n]/) > -1) {
        return `"${cell}"`;
      }
      return cell;
    }).join(',');
  }).join("\n");
  var encodedUri = encodeURI(csv);
  var link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `sales_${new Date().toISOString().split('T')[0]}.csv`);
  link.click();
})((s) => document.querySelector(s), (s) => [].slice.call(document.querySelectorAll(s)));