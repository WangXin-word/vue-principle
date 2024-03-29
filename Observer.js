/*
 * @Author: 汪鑫
 * @Date: 2021-06-19 15:20:33
 * @Annotate: 输入这页的内容
 * @LastEditTime: 2021-06-19 15:52:44
 * @LastEditors: 汪鑫
 * @Description: 
 * @FilePath: /vue-principle/Observer.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
 class Watcher{
     constructor(vm,expr,cb){
         this.vm = vm
         this.expr = expr
         this.cb = cb
         this.oldVal= this.getOldVal()
     }
     getOldVal(){
        Dep.target = this
        const oldVal =  compileUtil.getVal(this.expr,this.vm);
        Dep.target = null
        return oldVal;
     }
     update(){
        const newVal =compileUtil.getVal(this.expr,this.vm);
        if(newVal !== this.oldVal){
            this.cb(newVal);
        }
    }
 }
 class Dep{
     constructor(){
         this.subs = [];
     }
    //  收集观察者
    addSub(watcher){
        this.subs.push(watcher)
    }
    // 通知观察者去更新
    notify(){
        console.log('观察者',this.subs)
        this.subs.forEach(w=>w.update())
    }
 }
 class Observer{
     constructor(data){
         this.observe(data);
     }
     observe(data){
         if(data && typeof data === 'object'){
            //  console.log(Object.keys(data));
            Object.keys(data).forEach(key =>{
                this.defineReactive(data,key,data[key]);
            })
         }
     }
     defineReactive(obj,key,value){
        //  递归遍历
        this.observe(value)
        const dep = new Dep()
        Object.defineProperty(obj,key,{
            enumerable:true,
            configurable:false,
            get(){
                // 订阅数据变化时，往Dep中添加观察者
                Dep.target && dep.addSub(Dep.target);
                return value
            },
            set:(newVal)=>{
                this.observe(newVal)
                if(newVal !== value){
                    value = newVal
                }
                // 告诉Dep通知变化
                dep.notify();
            }
        })
     }
 }