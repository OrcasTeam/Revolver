class Revolver {
    _compile(root: boolean) {
        throw new Error("Method not implemented.");
    }
    root: boolean;
    _data: any;
    el: any;
    data: any;
    methods: any;
    constructor(configs){
        this.root = this.el == document.querySelector(configs.el);
        this._data = configs.data;
        this._data.__bindings = {};
        //创建代理对象
        this.data = new Proxy(this._data, {set});
        this.methods = configs.methods;

        this._compile(this.root);
    }
    
}