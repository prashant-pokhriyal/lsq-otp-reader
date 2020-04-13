'use strict';

const form = $('#savePhone');

chrome.storage.sync.get('phone', (data) => {
    console.log('Stored phone number is:', data);

    if (data.phone) {
        $('#form').addClass('hide');
        $('#view').removeClass('hide').find('#phone').html(data.phone);
    }
});

form.submit((event) => {
    const formData = new FormData(form);
    chrome.storage.sync.set({ phone: formData.get('phone') }, () => {
        console.log(`Phone number is: ${formData.get('phone')}`);
    });
});