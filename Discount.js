function calculate_Discount(customer_Type, purchase_Amount, isSpecial_Occasion) {
    let discount = 0;

    if (customer_Type === "Regular") {
        if (purchase_Amount > 100) {
            discount = 5;
        }
    } else if (customerType === "VIP") {
        if (purchase_Amount > 500) {
            discount = 20;
        } else if (purchase_Amount > 100) {
            discount = 10;
        }
    }

    if (isSpecial_Occasion) {
        discount += 5;
    }

    let finalPrice = purchase_Amount - (purchase_Amount * (discount / 100));
    
    return {
        originalPrice: purchase_Amount,
        discountPercentage: discount,
        finalPrice: finalPrice.toFixed(2)
    };
}


console.log(calculate_Discount("Regular", 150, false));
console.log(calculate_Discount("VIP", 501, true)); 
console.log(calculate_Discount("VIP", 200, false)); 
