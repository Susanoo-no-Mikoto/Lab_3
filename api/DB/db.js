//https://docs.google.com/spreadsheets/d/1UrKfcmupfJ2hyy7ISU9f3jrM_VMGw_AtRmz32TQ-Vfk/edit#gid=0

const {google} = require('googleapis');
const keys = require('./keys.json');

client = new google.auth.JWT(
    keys.client_email, 
    null, 
    keys.private_key,
    ['https://www.googleapis.com/auth/spreadsheets']
);

client.authorize(function(err, tokens){
    if(err){
        //console.log(err);
        return;
    }else{
        //console.log('Всё супер!');
        gsrun(client);
    }
});

exports.gs = async () => {
    let qq = await gsrun();
    return qq;
}

let gsrun = async (client) => {
    const gsapi = google.sheets({version: 'v4', auth: client});
    const opt = {
        spreadsheetId: '1UrKfcmupfJ2hyy7ISU9f3jrM_VMGw_AtRmz32TQ-Vfk',
        range: 'Data1!A2:E17'
    };

    let data = await gsapi.spreadsheets.values.get(opt);
    let dataArr = data.data.values;
    var list = dataArr.map(function(dataArr){
        let obj = dataArr.reduce(function(acc, cur, i){
            acc[i] = cur;    
            return acc;
        },{});
        let {
            0: id,
            1: login,
            2: password,
            3: eMail,
            4: scoreTests
        } = {...obj}
        const newobj = Object.assign(
            {},
            {
            id,
            login,
            password,
            eMail,
            scoreTests
            }
        );
        return newobj; 
    });
    console.log(list); 
    return list;
}

