我的个人信息
姓名：汪鑫
wx:wx1594566468
邮箱：1594566468@qq.com
如果你觉得有用，请给作者一些帮助

介绍的主要内容
vue框架的实现

学习的知识点
大致思路：
    <!-- 每一个模块用到的js知识点 -->
（1）实现一个解析器Compile
{
    1.实现一个入口
    {
        constructor 属性：  constructor 属性返回对创建此对象的数组函数的引用。
        在一个类中只能有一个名为 “constructor” 的特殊方法。 一个类中出现多次构造函数 (constructor)方法将会抛出一个 SyntaxError 错误。
        在一个构造方法中可以使用super关键字来调用一个父类的构造方法。
        如果没有显式指定构造方法，则会添加默认的 constructor 方法。
        如果不指定一个构造函数(constructor)方法, 则使用一个默认的构造函数(constructor)。
    }
    2.实现一个数据观察者
    {
        querySelector() 方法:querySelector() 方法返回文档中匹配指定 CSS 选择器的一个元素。

        nodeType 属性：如果节点是元素节点，则 nodeType 属性将返回 1。如果节点是属性节点，则 nodeType 属性将返回 2。

        createDocumentFragment() 方法
            {
                createdocumentfragment()方法创建了一虚拟的节点对象，节点对象包含所有属性和方法。
                当你想提取文档的一部分，改变，增加，或删除某些内容及插入到文档末尾可以使用createDocumentFragment() 方法。
                你也可以使用文档的文档对象来执行这些变化，但要防止文件结构被破坏，createDocumentFragment() 方法可以更安全改变文档的结构及节点。
            }
        appendChild() 方法
            {
                appendChild() 方法向节点添加最后一个子节点。
                提示：如果您需要创建包含文本的新段落，请记得添加到段落的文本的文本节点，然后向文档添加该段落。
                您也可以使用 appendChild() 方法从一个元素向另一个元素中移动元素。
            }

        childNodes 属性
            {
                childNodes 属性返回节点的子节点集合，以 NodeList 对象。
                提示：您可以使用 length 属性来确定子节点的数量，然后您就能够遍历所有的子节点并提取您需要的信息。
            }

            forEach()：
                {
                    forEach()方法用于调用数组的每个元素，并将元素传递给回调函数。
                    注意: forEach() 对于空数组是不会执行回调函数的。
                } 

            attributes 属性
                {
                    attributes 属性返回指定节点的属性集合，即 NamedNodeMap。
                    提示：您可以使用 length 属性来确定属性的数量，然后您就能够遍历所有的属性节点并提取您需要的信息。
                }
            
            textContent 属性
                {
                    textContent 属性设置或者返回指定节点的文本内容。
                    如果你设置了 textContent 属性, 任何的子节点会被移除及被指定的字符串的文本节点替换。
                    提示： 某些时候 textContent 属性可以被 nodeValue 属性取代，但是请记住这个属性同样可以返回所有子节点的文本。
                }
            reduce() 方法
                {
                    reduce() 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。
                语法
                    arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
                参数
                    callback
                        执行数组中每个值 (如果没有提供 initialValue则第一个值除外)的函数，包含四个参数：
                    accumulator
                        累计器累计回调的返回值; 它是上一次调用回调时返回的累积值，或initialValue（见于下方）。
                    currentValue
                        数组中正在处理的元素。
                        index 可选
                        数组中正在处理的当前元素的索引。 如果提供了initialValue，则起始索引号为0，否则从索引1起始。
                    array可选
                        调用reduce()的数组
                    initialValue可选
                        作为第一次调用 callback函数时的第一个参数的值。 如果没有提供初始值，则将使用数组中的第一个元素。 在没有初始值的空数组上调用 reduce 将报错。
                }
            
            split()方法
                {
                    语法:
                        stringObject.split(separator,howmany)
                    参数:
                        separator	必需。字符串或正则表达式，从该参数指定的地方分割 stringObject。
                        howmany	可选。该参数可指定返回的数组的最大长度。如果设置了该参数，返回的子串不会多于这个参数指定的数组。如果没有设置该参数，整个字符串都会被分割，不考虑它的长度。
                    返回值
                        一个字符串数组。该数组是通过在 separator 指定的边界处将字符串 stringObject 分割成子串创建的。返回的数组中的字串不包括 separator 自身。
                        但是，如果 separator 是包含子表达式的正则表达式，那么返回的数组中包括与这些子表达式匹配的字串（但不包括与整个正则表达式匹配的文本）。
                    提示和注释
                        注释：如果把空字符串 ("") 用作 separator，那么 stringObject 中的每个字符之间都会被分割。
                        注释：String.split() 执行的操作与 Array.join 执行的操作是相反的。
                }，
                innerHTML 属性
                    {
                        innerHTML 属性设置或返回表格行的开始和结束标签之间的 HTML。
                    }
                value 属性
                    {
                        value 属性可设置文本域的默认值。
                        出于安全考虑，一些浏览器可能阻止 JavaScript 代码读取 value 属性。
                    }
                    removeAttribute() 方法
                        {
                            removeAttribute() 方法删除指定的属性
                        }
                    test 方法
                        {
                            test() 方法用于检测一个字符串是否匹配某个模式.
                            如果字符串中有匹配的值返回 true ，否则返回 false。
                        }
                    indexOf() 方法
                        {
                            ndexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。如果没有找到匹配的字符串则返回 -1。
                        }
                    replace
                        {
                            replace() 方法用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。
                            如果想了解更多正则表达式教程请查看本站的：RegExp 教程 和 our RegExp 对象参考手册.
                            该方法不会改变原始字符串。
                        }
                    Object.defineProperty()
                        {
                            方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。

                            Object.defineProperty(obj, prop, descriptor)
                            obj
                                要定义属性的对象。
                            prop
                                要定义或修改的属性的名称或 Symbol 。
                            descriptor
                                要定义或修改的属性描述符。

                                该方法允许精确地添加或修改对象的属性。通过赋值操作添加的普通属性是可枚举的，在枚举对象属性时会被枚举到（for...in 或 Object.keys 方法），可以改变这些属性的值，也可以删除这些属性。这个方法允许修改默认的额外选项（或配置）。默认情况下，使用 Object.defineProperty() 添加的属性值是不可修改（immutable）的。

                                对象里目前存在的属性描述符有两种主要形式：数据描述符和存取描述符。数据描述符是一个具有值的属性，该值可以是可写的，也可以是不可写的。存取描述符是由 getter 函数和 setter 函数所描述的属性。一个描述符只能是这两者其中之一；不能同时是两者。

                                这两种描述符都是对象。它们共享以下可选键值（默认值是指在使用 Object.defineProperty() 定义属性时的默认值）：

                                configurable
                                    当且仅当该属性的 configurable 键值为 true 时，该属性的描述符才能够被改变，同时该属性也能从对应的对象上被删除。
                                    默认为 false。
                                    enumerable
                                    当且仅当该属性的 enumerable 键值为 true 时，该属性才会出现在对象的枚举属性中。
                                    默认为 false。
                                    数据描述符还具有以下可选键值：

                                value
                                    该属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等）。
                                    默认为 undefined。
                                writable
                                    当且仅当该属性的 writable 键值为 true 时，属性的值，也就是上面的 value，才能被赋值运算符改变。
                                    默认为 false。
                                    存取描述符还具有以下可选键值：

                                get
                                    属性的 getter 函数，如果没有 getter，则为 undefined。当访问该属性时，会调用此函数。执行时不传入任何参数，但是会传入 this 对象（由于继承关系，这里的this并不一定是定义该属性的对象）。该函数的返回值会被用作属性的值。
                                    默认为 undefined。
                                set
                                    属性的 setter 函数，如果没有 setter，则为 undefined。当属性值被修改时，会调用此函数。该方法接受一个参数（也就是被赋予的新值），会传入赋值时的 this 对象。
                                    默认为 undefined。

                                描述符默认值汇总
                                    拥有布尔值的键 configurable、enumerable 和 writable 的默认值都是 false。
                                    属性值和函数的键 value、get 和 set 字段的默认值为 undefined。
                        }
    }

}

(2)实现一个数据监听器Observer
{

}

(3)实现一个watcher去更新视图
{

}

（4）实现一个proxy
{

}

（5）面试题
{

}
# Test


测试git命令