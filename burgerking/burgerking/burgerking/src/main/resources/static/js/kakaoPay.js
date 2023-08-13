$("#kakaoPay").click(function() {
    $.ajax({
        type: 'get',
        url: '/pay/ready',
        data: {
            item_name : "버거킹 햄버거",
            quantity : "1",
            tatal_amount : "7000",
            tex_free_amount : "0"
        },
        success:function(res) {
            location.href = res.next_redirect_mobile_url;
        }
    })
})