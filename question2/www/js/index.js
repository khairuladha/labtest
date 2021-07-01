
$.ajax({
    type: "post",
    url: "http://www.skimtech.my/ClassicModels/GetStaff",
    data: 'json',
    success: function (data) {
        var myData = JSON.parse(data);
        var lastIndex = myData.length - 1;
        var htmlText = "";
        if (myData[lastIndex].status === 1) {
            for (var i = 0; i < lastIndex; i++) {
                htmlText = htmlText +

                    "<tr><td>" + myData[i].id
                    + "</td><td><a href='#viewcontact/" + myData[i].id + "'>" + myData[i].email
                    + "</td></tr>";

            }
            $("#tblContacts tbody").html(htmlText);
        }
    },
    error: function () {

    }
});
