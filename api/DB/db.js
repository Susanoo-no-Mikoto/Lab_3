//https://docs.google.com/spreadsheets/d/1UrKfcmupfJ2hyy7ISU9f3jrM_VMGw_AtRmz32TQ-Vfk/edit#gid=0

const {google} = require('googleapis');
const keys = require('./keys.json');
const client = new google.auth.JWT(
    keys.client_email, 
    null, 
    keys.private_key,
    ['https://www.googleapis.com/auth/spreadsheets']
);

client.authorize(function(err, tokens){
    if(err){
        console.log(err);
        return;
    }else{
        console.log('Всё супер!');
        gsrun(client);
    }
});

async function gsrun(client){
    const gsapi = google.sheets({version: 'v4', auth: client});
    const opt = {
        spreadsheetId: '1UrKfcmupfJ2hyy7ISU9f3jrM_VMGw_AtRmz32TQ-Vfk',
        range: 'Data1!A1:E5'
    };

    let data = await gsapi.spreadsheets.values.get(opt);
    let dataArr = data.data.values;
    console.log(dataArr);
}