$(document).ready(function (){
    $("#btn").click(function (){
        if ($("#username").val() === ""||$("#password").val() === ""){
            alert("账号或密码不能为空！");
        }
        else {
            if ($("#username").val() === "20192501360"&&$("#password").val() === "123456"){
                window.location.href="../src/Personal_information.html";
                alert("恭喜！登录成功！");
            }
            else{
                alert("请输入正确的账号或密码！");
            }
        }
    })
})
