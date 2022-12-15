import fs from'fs';
import client from 'https';

const url = 'https://maps.googleapis.com/maps/api/staticmap?&size=630x400&style=visibility:on%20&center=24.888,-70.268&zoom=4%20&path=color:0xff0000ff|weight:1|25.774,-80.19|18.466,-66.118|32.321,%20-64.757|25.774,-80.19&key=AIzaSyDw9YZ3org7eJTDhhCycirMvqTXdiMuEHs';
const conId = 2;
const mapservice = function getMap(url,conId){
    // const url = 'https://maps.googleapis.com/maps/api/staticmap?&size=630x400&style=visibility:on%20&center=24.888,-70.268&zoom=4%20&path=color:0xff0000ff|weight:1|25.774,-80.19|18.466,-66.118|32.321,%20-64.757|25.774,-80.19&key=AIzaSyDw9YZ3org7eJTDhhCycirMvqTXdiMuEHs';
    // let filename = condId.toString()+'map.png'
    // console.log(filename);
    // let filepath = '../upload/map.png';
    return new Promise ((resolve, reject)=>{
        client.get(url,(res)=>{
            if(res.statusCode === 200){
                res.pipe(fs.createWriteStream('new.png'))
                .on('error',reject)
                .once('close',()=>resolve('new.png'));
            }else{
                res.resume();
                reject(new Error(`Request Failed`))
            }
        });
    });
}

// const mapservice = async()=>{
// const imageurl = "https://maps.googleapis.com/maps/api/staticmap?&size=630x400&style=visibility:on%20&center=24.888,-70.268&zoom=4%20&path=color:0xff0000ff|weight:1|25.774,-80.19|18.466,-66.118|32.321,%20-64.757|25.774,-80.19&key=AIzaSyDw9YZ3org7eJTDhhCycirMvqTXdiMuEHs";
// const res = await fetch(imageurl);
// console.log(res);
// const blob = await res.buffer();
// }
export default mapservice;
