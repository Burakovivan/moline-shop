chekcout = {
    submitMobile: function () {
        var phone = $('input[name=phone]').val();
        var formModel = {
            name: "Имя Фамилия???",
            phone: phone,
            payment: {
                type: "none",
            },
            shipping: {
                type: "none",
                city: "none",
                dept: "none",
            }
        }
    },
    submit: function () {
        var form = $(".form_wrap form")[0];
        var formModel = {
            name: form.IF.value,
            phone: form.phone.value,
            email: form.Email.value,
            payment: {
                type: form.pay.value,
            },
            shipping: {
                type: form.delivery.value,
                city: $(form).find("." + form.delivery.value + "_delivery_city.single .item").text(),
                dept: $(form).find("." + form.delivery.value + "_delivery_dept.single .item").text(),
            },
            comment: form['comment-order'].value,
        }

        if (formModel.shipping.type == "express") {
            formModel.shipping.city = "Киев";
            formModel.shipping.dept = $(form).find("." + form.delivery.value + "_details #delivery_dept").val();
        }
        if (formModel.shipping.type == "self") {
            formModel.shipping.city = "Киев";
            formModel.shipping.dept = $(form).find(".delivery label[for=self] .sub_info").text()
        }
        if (formModel.shipping.type == "InTime") {
            formModel.shipping.city = $(form).find("." + form.delivery.value + "_details #delivery_city").val();
            formModel.shipping.dept = $(form).find("." + form.delivery.value + "_details #delivery_dept").val();
        }
        if (this.validate(formModel)) {
            this.send(formModel);
        }
    },
    validate: function (model) {
        var returnValue = true;
        if (!validateName(model.name)) {
            $('#IF').addClass("invalid");
            returnValue = false;
        }
        if (!validatePhone(model.phone)) {
            $('#phone').addClass("invalid");
            returnValue = false;
        }
        if (!validateEmail(model.email)) {
            $('#Email').addClass("invalid");
            returnValue = false;
        }
        if (!validatePaymentType(model.payment.type)) {
            returnValue = false;
        }
        if (!validateShippingType(model.shipping.type)) {
            $('#IF').addClass("invalid");
            returnValue = false;
        }
        if (!validateShipping(model.shipping.type, model.shipping.city, model.shipping.dept)) {
            $('.'+model.shipping.type+'_details').find("#delivery_dept")
            $('.'+model.shipping.type+'_details').find("#delivery_city")
            returnValue = false;
        }
        if (!returnValue) {
            $('input.invalid').each(function (idx, element) {
                element.addEventListener("input", function (e) {
                    $(e.currentTarget).removeClass('invalid');
                })
            });
        }
        return returnValue;
    },
    map: function (model) {
        return {
            shipping_address: {
                city: model.shipping.city,
                address_1: model.shipping.dept,
                firstname: model.name,
                country: "UA",
            },
            shipping_method: {
                title: model.shipping.type
            },
            payment_address: {
                city: model.shipping.city,
                address_1: model.shipping.dept,
                firstname: model.name,
                country: "UA",
            },
            guest: {
                firstname: model.name,
                email: model.email,
                telephone: model.phone,
            },
            comment: model.comment,
            payment_method: {
                title: model.payment.type,
            },
            
        }
    },
    send: function (model) {
        var modelToSent = this.map(model);

        var body = $("html, body");
        body.stop().animate({ scrollTop: 0 }, 500, 'swing');
        $(".wrap_cart_wrapper").show();
        $(".wrap_cart_wrapper").css("background", "rgba(50, 50, 50, 0.3) url(img/loader.svg) no-repeat center");
        $(".wrap_cart_wrapper").css("position", "absolute");
        $.ajax({
            url: '/index.php?route=checkout/confirm',
            method: 'POST',
            contentType: "application/json",
            dataType: "html",
            data: JSON.stringify(modelToSent),
            success: function (data) {
                if (data) {
                    $('.form_order').remove()
                    $('.cart_checkout').parent().html(data);
                    setTimeout(function () {

                        $(".wrap_cart_wrapper").hide();
                    }, 500);
                    // window.location = '/index.php?route=checkout/confirm&order_id='+data['order_id'];
                }
            }
        })
    }

};

function validateName(text, min = 3) {
    return text.length >= min;
}
function validatePhone(phone) {
    return phone.length > 9 && phone.length < 14;
}
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function validatePaymentType(paymentType) {
    return /[a-z]/.test(paymentType) ? (paymentType == 'cash' | paymentType == 'cod' | paymentType == 'cashless') : false;
}
function validateShippingType(paymentType) {
    return (paymentType == 'self'
        | paymentType == 'InTime'
        | paymentType == 'express'
        | paymentType == 'delivAuto'
        | paymentType == 'new_post'
        | paymentType == 'other'
    );
}
function validateShipping(shippingType, city, dept) {
    if (shippingType == 'self') {
        return true;
    }
    return city && city != "" && dept && dept != "";
}