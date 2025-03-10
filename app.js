console.log('connected');

// =========== Generate QR CODE =======//
// URL=https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=dhaka

// ============= get QR Image ID ==========//
let QR = document.getElementById('QR-img');

// ========== Generate QR Code Function =========//
const generateCode=async(qr)=>{
    const url=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qr}`;
    QR.src=url;
};

// ============= Get Input Value ==========//
const getInputValue =()=>{
    const inputValue = document.getElementById('field');
    const input = inputValue.value;
    console.log(inputValue.value);
    inputValue.value ='';
    generateCode(input);
}
