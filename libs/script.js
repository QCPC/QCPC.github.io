$(document).ready(function () {

    $('body').scrollspy({ target: ".navbar", offset: 50 });

    $.get('../resources/nameList.csv', function (data) {
        var table = $("#rteam-tbody");
        var rows= data.split("\n");

        for(var row of rows) {
            if(row.length > 0) {
                var col = row.split(",");
                table.append(
                    `<tr>
                      <th scope="row"><div class="text-right">۱</div></th>
                      <td><div class="text-right">${col[0]}</div></td>
                      <td><div class="text-right">${col[1]}</div></td>
                      ${
                          col[2][0] === "+" ? 
                          '<td class="bg-success"><div class="text-right">ثبت شده</div></td>'
                          :'<td class="bg-warning"><div class="text-right">در حال بررسی</div></td>'
                      }
                    </tr>`
                );
            }
        }
    });

    $("#navbarNavBrand,#navbarNav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top - 50
            }, 800, function () {
                if (history.pushState) {
                    history.pushState(null, null, hash);
                }
                else {
                    location.hash = hash;
                }
            });
        }
    });
});
