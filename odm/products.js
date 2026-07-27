const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/shopApp")
    .then(()=>{
        console.log("Connected");
    })
    .catch(err=>{
        console.log("Something went wrong");
        console.log(err);  
    })

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxLength:40
    },
    price:{
        type:Number,
        required:true,
        min:0
    },
    onSale:{
        type:Boolean,
        default:false
    },
    categories:{
        type:[String],
        default:["warhammer 40k"]
    },
    qty:{
        online:{
            type:Number,
            default:0
        },
        warehouse:{
            type:Number,
            default:0
        }
    }
});

productSchema.methods.greet = function(){
    console.log("Hello World!");
    console.log(`${this.name} is your product`);
}

// Static method this refers to model class

const calcDiscount = x => x - (x * 0.2)
 
productSchema.statics.giveDiscount = async function(){
    const allProducts = await this.find({});
    for(let product of allProducts){
        this.findByIdAndUpdate(product.id, {price:calcDiscount(product.price)}, {returnDocument:"after", runValidators:true}).then(res=>console.log(res))
    }
}

const Product = mongoose.model("Product", productSchema);

// const prod1 = new Product({
//     name:"Blue berries (Ultramarines)",
//     price:20,
//     categories:["warhammer 40k", "Ultramarines", "Space Marines"]
// })

const prod1 = new Product({
    name:"Dark Angles",
    price:80,
    categories:["warhammer 40k", "Ultramarines", "Space Marines"]
})

// prod1.save()
//     .then(data=>{
//         console.log(data);
//         console.log("Created successfully");
//     })
//     .catch(err=>{
//         console.log("Smoething went wrong uups");
//         console.log(err);
//     })

const find = async function(){
    // const all = await Product.find({});
    // console.log(all);
    const p = await Product.findById('6a5f0b2516e461d014c92774');
    console.log(p);
    p.greet();
}

Product.giveDiscount();

// Product.findByIdAndUpdate('6a5f0b2516e461d014c92774', {price:100}, {returnDocument:"after", runValidators:true})
//     .then(data=>{
//         console.log(data);
//     })
//     .catch(err=>{
//         console.log(err);
//     })

