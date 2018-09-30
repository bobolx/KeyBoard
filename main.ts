
enum btnList{
    //% block="S1"
    S1 = 1,
    //% block="S2"
    S2 = 2,
    //% block="S3"
    S3 = 3,
    //% block="S4"
    S4 = 4,
    //% block="S5"
    S5 = 5
}

enum eventList {
    //% block="按下"
    pressed = 1,
    //% block="抬起"
    released = 0
}

//% weight=99 icon="\uf0e7" color=#1B80C4
namespace KeyBoard {

    //% weight=79
    //% blockId="btn_pressed" block="连接引脚 %pin| 按钮 %btn|  %btnEvent"
    export function btnPressed(pin: AnalogPin, btn:btnList, btnEvent:eventList): boolean {

        if(btn == btnList.S1){
            if(btnEvent == eventList.pressed){
                return pins.analogReadPin(pin) > 570 && pins.analogReadPin(pin) < 590;
            }else{
                return pins.analogReadPin(pin) > 1010;
            }  
        }else if(btn == btnList.S2){
            if(btnEvent == eventList.pressed){
                return pins.analogReadPin(pin) > 630 && pins.analogReadPin(pin) < 650;
            }else{
                return pins.analogReadPin(pin) > 1010;
            }   
        }else if(btn == btnList.S3){
            if(btnEvent == eventList.pressed){
                return pins.analogReadPin(pin) > 690 && pins.analogReadPin(pin) < 710;
            }else{
                return pins.analogReadPin(pin) > 1010;
            } 
        }else if(btn == btnList.S4){
            if(btnEvent == eventList.pressed){
                return pins.analogReadPin(pin) > 770 && pins.analogReadPin(pin) < 790;
            }else{
                return pins.analogReadPin(pin) > 1010;
            }  
        }else{
            if(btnEvent == eventList.pressed){
                return pins.analogReadPin(pin) > 880 && pins.analogReadPin(pin) < 1000;
            }else{
                return pins.analogReadPin(pin) > 1010;
            }   
        }
        
    }

}


