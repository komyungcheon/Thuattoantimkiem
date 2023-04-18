function Phanloaisdt(listPhone: string[]) {
    let listPhoneViettel = ["037", "038", "039", "070"];
    let listPhoneVina = ["081", "082", "083", "084"];
    let listPhoneMobi = ["070", "076", "079", "078"];
    let ViettelNumberPhone = [];
    let VinaNumberPhone = [];
    let MobiNumberPhone = [];
    listPhone.forEach(item => {
            let a = item.substring(0,3);
            if (listPhoneViettel.indexOf(a)) {
                ViettelNumberPhone.push(item);
            } else if (listPhoneVina.indexOf(a)){
                VinaNumberPhone.push(item);
            } else if (listPhoneMobi.indexOf(a)) {
                MobiNumberPhone.push(item);
            }
        })
    return [ ["Viettel","Vina","Mobi"],[ViettelNumberPhone,VinaNumberPhone,MobiNumberPhone]]
}
let listPhone :string[] = ["037061097","038123456","070147258","078123789","083456852","081962741"];
console.table(Phanloaisdt(listPhone));
