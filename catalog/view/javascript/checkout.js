chekcout = {
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
        if (this.validate(formModel)) {
            this.send(formModel);
        }
    },
    validate: function (model) {
        if (!validateText(model.name)) {
            return false;
        }
        if (!validatePhone(model.phone)) {
            return false;
        }
        if (!validateEmail(model.email)) {
            return false;
        }
        if (!validatePaymentType(model.payment.type)) {
            return false;
        }
        if (!validateShippingType(model.shipping.type)) {
            return false;
        }
        if (!validateShipping(model.shipping.type, model.shipping.city, model.shipping.dept)) {
            return false;
        }
        return true;
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
        $.ajax({
            url: '/index.php?route=checkout/confirm',
            method: 'POST',
            contentType: "application/json",
            dataType: "html",
            data: JSON.stringify(modelToSent),
            success: function (data){
                if(data){
                    $('.form_order .container').remove()
                    $('.cart_checkout').parent().html(data);
                    // window.location = '/index.php?route=checkout/confirm&order_id='+data['order_id'];
                }
            }
        })
    }

};

function validateText(text, min = 3) {
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