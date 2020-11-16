const compileUtil = {
    getVal(expr,vm){
        // console.log(vm.$data)
        return expr.split('.').reduce((data,currentVal) =>{
            // console.log(currentVal);
            // debugger
            // console.log(data,currentVal)
            // console.log(data)
            return data[currentVal];
        },vm.$data)
        
    },

    text(node,expr,vm){  //expr:msg
        let value;
        if(expr.indexOf('{{') !== -1){
            value = expr.replace(/\{\{(.+?)\}\}/g,(...args)=>{
                return this.getVal(args[1],vm);
            })
        }else{
            value =this.getVal(expr,vm);
        }
        this.updater.textUpdater(node,value)
    },
    html(node,expr,vm){
        const value = this.getVal(expr,vm);
        this.updater.htmlUpdater(node,value)
    },
    model(node,expr,vm){
        const value = this.getVal(expr,vm)
        this.updater.modelUpdater(node,value)
    },
    on(node,expr,vm,eventName){
        let fn = vm.$options.methods && vm.$options.methods[expr]
        node.addEventListener(eventName,fn.bind(vm),false)
    },

    // 更新的函数
    updater:{
        // v-model方法的实现
        modelUpdater(node,value){
            node.value = value
        },
        // v-text方法的实现
        textUpdater(node,value){
            node.textContent = value
        },
        // v-html 方法的实现
        htmlUpdater(node,value){
            node.innerHTML = value;
            // console.log(node,value)
        }
    }
}
class Compile{
    constructor(el,vm){
        this.el = this.isElementNode(el)?el:document.querySelector(el);
        // console.log(this.el)
        this.vm = vm;
        //1.获取文档碎片对象，放入内存中会减少页面的回流和重绘
        const fragment = this.node2Fragment(this.el);
        // 2.编译模板
        this.compile(fragment);
        // console.log(fragment);
        //3.追加子元素到根元素
        this.el.appendChild(fragment);
    }
    compile(fragment){
        //1.获取子节点
        const childNodes = fragment.childNodes;
        [...childNodes].forEach(child =>{
            // console.log(child)
            if(this.isElementNode(child)){
                // 是元素节点
                // 编译元素节点
                // console.log('元素节点',child)
                this.compileElement(child)
            }else{
                //文本节点
                // 编译文本节点
                // console.log('文本节点',child)
                this.compileText(child)
            }
            // 使用递归的方法继续调用
            if(child.childNodes && child.childNodes.length){
                this.compile(child)
            }
        })
    }
    // 编译文本节点
    compileElement(node){
        // console.log(node)
        const attributes = node.attributes;
        // console.log(attributes);
        [...attributes].forEach(attr =>{
            const {name,value} = attr;
            // console.log(name)
            if(this.isDirective(name)){   //判断是不是已v-开头的
                const [,dirctive] = name.split('-');
                const [dirName,eventName] = dirctive.split(':');
                compileUtil[dirName](node,value,this.vm,eventName)

                // 删除有指令的标签上的属性
                node.removeAttribute('v-' + dirctive)
            }else if(this.isEventName(name)){    //处理@符号
                let [,eventName] = name.split('@');
                compileUtil['on'](node,value,this.vm,eventName)
            }
        })
    }
    // 编译元素节点
    compileText(node){
        // 处理 {{}}的内容
        // console.log(node)
        // console.log(node.textContent)
        const content = node.textContent;
        // 使用正则来取{{}}
        if(/\{\{(.+?)\}\}/.test(content)){
            // console.log(content)
            compileUtil['text'](node,content,this.vm)
        }
    }
    isEventName(attrName){
        return attrName.startsWith('@')
    }
    //判断是不是已v-开头的
    isDirective(attrNmae){
        return attrNmae.startsWith('v-');
    }

    node2Fragment(el){
        //创建文档碎片
        const f = document.createDocumentFragment();
        let firstChild;
        while(firstChild = el.firstChild){
            f.appendChild(firstChild);
        }
        // console.log(f)
        return f;
    }

    // 判断是否是元素的节点对象
    isElementNode(node){
        return node.nodeType === 1;
    }
}

// 实现一个入口
class MVue{
    constructor(options){
        this.$el = options.el;
        this.$data = options.data;
        this.$options = options;
        // console.log(this.$el)
        if(this.$el){
            //1.实现一个数据观察者
            //2.实现一个指令解析器
            new Compile(this.$el,this)
        }

    }
}