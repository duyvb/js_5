
// Bài 1 : Quản Lý Tuyển Sinh 

function tinhDiem() {
    let soDiem0 = document.getElementById("soDiem0").value;
    let soDiem1 = document.getElementById("soDiem1").value;
    let soDiem2 = document.getElementById("soDiem2").value;
    let soDiem3 = document.getElementById("soDiem3").value;
    let khuvuc = document.getElementById("khuvuc").value;
    let doituong = document.getElementById("doituong").value;

    let ketQua = "";

    tongdiem = 0;
    tongdiem = Number(soDiem1) + Number(soDiem2) + Number(soDiem3) + Number(khuvuc) + Number(doituong);



    let xeploai = "";
    if (Number(tongdiem) >= Number(soDiem0)) {
        xeploai = "Bạn đã đậu";
    } else {
        xeploai = "Bạn đã rớt";
    }

    ketQua = " " + tongdiem + " - " + xeploai;
    document.getElementById("tongdiem").innerHTML = ketQua;
}










// BÀI 2 : TÍNH TIỀN ĐIỆN 


function tinhSoDien() {
    let khachhang = document.getElementById("khachhang").value;
    
   
    

    let kw = document.getElementById("input-kw").value;
    

    let price = 0 ;
    let price1 = 500 ; 
    let price2 = 650 ; 
    let price3 = 850 ; 
    let price4 = 1100; 
    let price5 = 1300 ;

    if (kw <= 50) {
        price = kw * price1;

    } else if (kw <= 100) {
        price = (50 * price1) + ((kw - 50) * price2);

    } else if (kw <= 200) {
        price = (50 * price1) + (50 * price2) + ((kw - 100) * price3);

    } else if (kw <= 350) {
        price = (50 * price1) + (50 * price2) + (100 * price3) + ((kw - 200) * price4);

    } else if (kw > 350) {
        price = (50 * price1) + (50 * price2) + (100 * price3) + (150 * price4) + ((kw - 350) * price5);

    }

    let hienThi = " ";
    
    hienThi = " Họ Tên :" + khachhang + " - Tiền Điện :" + price.toLocaleString();

    document.getElementById("tongSoDien").innerHTML = hienThi;
    

    
}







// Bài 3 : Tính Tiền Thuế 
function tinhTienThue() {
    let khachhang = document.getElementById("hoten").value;
    
    let thunhap = document.getElementById("thuNhap").value;

    let phuthuoc = document.getElementById("phuThuoc").value;
    
    let chiuthue = thunhap - 4000000 - phuthuoc*1600000

    let tienthue = 0

    if (0 < chiuthue && chiuthue < 60000000 ) {
        tienthue = chiuthue * 5/100;
    } else if (60000000 < chiuthue && chiuthue <=120000000) {
        tienthue = chiuthue * 10/100;
    } else if (120000000 < chiuthue && chiuthue <= 210000000){
        tienthue = chiuthue * 15/100;
    } else if (210000000<chiuthue && chiuthue<=384000000){
        tienthue = chiuthue * 20/100;
    } else if (384000000<chiuthue && chiuthue<=624000000){
        tienthue = chiuthue * 25/100;
    } else if (624000000<chiuthue && chiuthue<=960000000){
        tienthue = chiuthue * 30/100;
    } else if (chiuthue>960000000){
        tienthue = chiuthue * 35/100;
    }

    let hienThi = "";
    
    hienThi = "<br>" + "- Họ Tên :" + khachhang + "<br>"
     + "- Thu Nhập :" + thunhap + " VND <br>" 
     + "- Thu nhập chịu thuế: " + chiuthue + " VND <br>"
     + "- Tiền thuế: " + tienthue + " VND <br>"

    document.getElementById("tongTienThue").innerHTML = hienThi;
    

    
}






// BÀI 4 : TÍNH TIỀN CÁP

function tinhTienCap() {
    let makhach = document.getElementById("makhach").value;
    let caoCap = document.getElementById("caoCap").value;
    let soketnoi = document.getElementById("soketnoi");


    
    let hoaDon = 4.5 ;
    let dichVu = 20.5 ;
    let kenhCaoCap = 7.5 ;
    let caoCap2 = 0 ;
    let tongtien = 0;
    let soketnoidu = 0;

    if (caoCap <= 0) {
        caoCap = hoaDon + dichVu ;
    } else if (caoCap <= 1) {
        caoCap = hoaDon + dichVu + kenhCaoCap;
    } else if (caoCap2 > 1) {
       caoCap2 = caoCap + kenhCaoCap
    }

    if(soketnoi.value < 10) {

        tongtien = tongtien + 75

    } else {
        soketnoidu = soketnoi.value - 10
        tongtien = tongtien + soketnoi*5 
    }

    hienThi = "<br>" + "- Mã khách hàng: " + makhach + "<br>"
     + "- Tiền Cáp: " + tongtien + " VND <br>" 

    document.getElementById("tongTienCap").innerHTML = hienThi;
}


function myFunction() {
    let selected = document.getElementById("mySelect");
    let soketnoi = document.getElementById("soketnoi");
    if (selected.value == 'doanhNghiep') {
        soketnoi.style.display = 'block'
    } else {
        soketnoi.style.display = 'none'
    }
    
}
