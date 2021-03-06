$(document).ready(function () {

    $('body').scrollspy({ target: ".navbar", offset: +100 });

    $.get('../resources/nameList.csv', function (data) {
        var table = $("#rteam-tbody");
        var rows= data.split("\n");
        var id = new Number(0);

        if(data.length <= 0) {
            table.append(
                `<tr>
                  <th scope="row"><div class="text-right">-</div></th>
                  <td><div class="text-right">-</div></td>
                  <td><div class="text-right">-</div></td>
                  <td><div class="text-right">-</div></td>
                </tr>`
            );
        }

        for(var row of rows) {
            if(row.length > 0) {
                id++;
                var col = row.split(",");
                table.append(
                    `<tr>
                      <th scope="row"><div class="text-right">${id.toLocaleString("fa")}</div></th>
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
                scrollTop: $(hash).offset().top - 80
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

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-181017867-1');
