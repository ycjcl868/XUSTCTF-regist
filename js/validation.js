//表单验证JS代码
jQuery.validator.addMethod("isMobile", function (value, element) {
    var length = value.length;
    var mobile = /^(((13[0-9]{1})|(18[0-9]{1})|(15[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    return this.optional(element) || (length == 11 && mobile.test(value));
}, "");

jQuery.validator.addMethod("Chinese", function (value, element) {
    var mobile = /^[\u4e00-\u9fa5]{2,4}$/i;
    return this.optional(element) || (mobile.test(value));
}, "");

$(function () {
    //注册表单
    var validate = $("#msform").validate({
        rules: {
            debug: true,
            team: {
                required: true,
                maxlength: 10
            },
            leader1: {
                required: true,
                Chinese: true,
                maxlength: 10

            },
            number1: {
                required: true,
                minlength: 10,
                maxlength: 10,
                number:true
            },
            classinfo1: {
                required: true, 
            },
            qq1: {
                required: true,
                number:true,
                minlength:5,
                maxlength: 10
            },
            email1: {
                required: true,
                email:true
            },
            tel1: {
                required: true,
                isMobile:true
            }
        },


        success: function (label) {
            label.html("&nbsp;").addClass("valid");

        },
        messages: { //定义提示信息
            team: {
                required: "不能为空",
                maxlength:"字数超过限制"
            },
            leader1: {
                required: "不能为空",
                Chinese:"请输入正确的姓名",
                maxlength:"字数超过限制"
            },
            number1: {
                required: "不能为空",
                minlength:"请输入正确的学号",
                maxlength:"请输入正确的学号",
                number:"请输入正确的学号"
            },
            classinfo1: {
                required: "不能为空",
            },
            qq1: {
                required: "不能为空",
                number:"请输入正确的QQ号",
                minlength:"请输入正确的QQ号",
                maxlength: "请输入正确的QQ号"
            },
            email1: {
                required: "不能为空",
                email:"请输入Email"
            },
            tel1: {
                required: "不能为空",
                isMobile:"请输入正确的手机号"
            }
        }
    });
});
