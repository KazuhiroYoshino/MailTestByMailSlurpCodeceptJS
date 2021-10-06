//const inbox = mailslurp.createInbox();
const { MailSlurp } = require("mailslurp-client");
const mailslurp = new MailSlurp({ apiKey: "ココにAPI Key" });

let currentEmail = null;

module.exports.sendMail = function(rank, subject, simei, id, url){
    var address = 'ここにメールアドレス@mailslurp.com';

    var body01 = '様。\r\n';
    var body02 = 'この度は当ホテルに会員登録いただき、誠にありがとうございました。\r\n';
    var body03 = '登録手続きが完了いたしましたので、ご連絡申し上げます。\r\n';
    var body04 = 'ユーザーID：';
    var body05 = 'パスワードは登録時に設定頂いたものをお使い頂けます。\r\n';
    var body06 = 'ご登録頂いた内容につきましては、以下のアドレスにてご確認頂けます。\r\n';
    var body07 = 'それでは、ご利用を心からお待ち申し上げております。\r\nhttps://hotel.testplanisphere.dev/ja/index.html';

    var body = rank + '\r\n' + simei + body01 + body02 + body03 + body04 + id + '\r\n' + body05 + body06 + url + '\r\n' + body07;
//    console.log(body);
    const sentEmail = mailslurp.inboxController.sendEmailAndConfirm(
    "ここにMailSlurpのID",
        {
            to: [address],
            subject: subject,
            body: body,
        },
    );
};

module.exports.receiveMail = async function(){
    var emails = await mailslurp.waitForLatestEmail('ここにMailSlurpのID', 60000, true);
    currentEmail = emails;
    return emails;
};