console.log('connected');

// =========== Generate QR CODE =======//
// URL=https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=dhaka

// ============= get QR Image ID ==========//
let QR = document.getElementById('QR-img');
// =========== Get button =========//
let button = document.getElementById('BTN');
//  ============ Input Field ==========//
let input = document.getElementById('field');

// ========== Generate QR Code Function =========//
const generateCode=async(qr)=>{
    const url=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qr}`;
    QR.style.display='block'
    QR.src=url;
    button.disabled=true;
};

// ============= Check Input Value ==========//
input.addEventListener('input',function(){
   button.disabled = input.value.trim() ==='';
   if (input.value) {
    button.disabled =false;
   }
})

// ============ Set input Value ===========//
button.addEventListener('click',function (){
    let inputField= input.value;
    generateCode(inputField)
    input.value = '';
    
})