/**
 * Created by dongsj on 16/8/3.
 */
module Time{
    export class Test{
        element:HTMLElement;
        span:HTMLElement;
        timer:number;
        constructor(e:HTMLElement){
            this.element=e;
            this.element.innerHTML='现在时间是:';
            this.span=document.createElement('span');
            this.element.appendChild(this.span);
            this.span.innerHTML=new Date().toTimeString();
        }
        start(){
            this.timer=setInterval(()=>this.span.innerHTML=new Date().toTimeString(),500);
        }
        stop(){
            clearInterval(this.timer);
        }
    }
}