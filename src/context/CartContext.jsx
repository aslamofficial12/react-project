
"use client";

// React-la irundhu thevaiyana functions import panrom
import {
    createContext, // Components-kulla common data share panna Context create pannum
    useContext,   // Create panna Context-la irundhu data access panna use pannum
    useEffect,    // Component mount/update aagumbodhu operations execute panna use pannum
    useState      // Component-la data store panni update panna use pannum
} from "react";


// STEP 1: Create Context
// CartContext nu oru shared data channel create panrom
// Idhan moolama Navbar, Subscription, CartSidebar components
// cart data-va access panna mudiyum
const CartContext = createContext();


// STEP 2: Create CartProvider component
// Indha Provider cart data and functions-ai child components-ku share pannum
// children na Provider-kulla render aagura components
export function CartProvider({ children }) {


    // STEP 3: Create cartItems state
    // Cart-la add panna products ellame indha state-la store aagum
    // Starting-la cart empty-ah irukkum
    const [cartItems, setCartItems] = useState([]);


    // STEP 4: Create isCartOpen state
    // Cart sidebar open-ah irukka close-ah irukka nu control pannum
    // false = Sidebar closed
    // true = Sidebar open
    const [isCartOpen, setIsCartOpen] = useState(false);


    // STEP 5: Load cart data from localStorage
    // Component first time load aagumbodhu indha useEffect execute aagum
    useEffect(() => {

        // Browser localStorage-la cartItems key-la save aana data-va retrieve panrom
        const savedCart = localStorage.getItem("cartItems");


        // Saved cart data irundha mattum inside code execute aagum
        if (savedCart) {

            // localStorage data string format-la irukkum
            // JSON.parse() adhai JavaScript array-ah convert pannum
            // setCartItems() use panni state-la store panrom
            setCartItems(JSON.parse(savedCart));
        }

    }, []); // Empty array = component first time mount aagumbodhu mattum run aagum


    // STEP 6: Save cart data to localStorage
    // cartItems state change aagumbodhellam indha useEffect execute aagum
    useEffect(() => {

        // JSON.stringify() cartItems array-ai string-ah convert pannum
        // localStorage.setItem() browser-la data save pannum
        localStorage.setItem(
            "cartItems",             // localStorage key name
            JSON.stringify(cartItems) // Save panna vendiya cart data
        );

    }, [cartItems]); // cartItems change aana indha effect again execute aagum


    // STEP 7: Add product to cart
    // Subscription page-la Subscribe Now click pannumbodhu
    // addToCart() function call aagi product details inga receive aagum
    const addToCart = (product) => {


        // Existing cart data-va prevItems moolama access panrom
        // setCartItems new cart data-va update pannum
        setCartItems((prevItems) => {


            // find() use panni product already cart-la irukka nu check panrom
            // item.id and new product.id same-ah irundha product return aagum
            const existingProduct = prevItems.find(
                (item) => item.id === product.id
            );


            // Product already cart-la irundha quantity increase pannanum
            if (existingProduct) {

                // map() existing products ellathaiyum check pannum
                // Matching ID irundha andha product mattum update aagum
                return prevItems.map((item) =>

                    // Existing product ID and new product ID match aagudha?
                    item.id === product.id

                        // Match aana product:
                        // ...item = existing product details copy pannum
                        // quantity = existing quantity + 1
                        ? {
                            ...item,
                            quantity: item.quantity + 1
                        }

                        // ID match aagala na existing product change aagadhu
                        : item
                );
            }


            // Product already cart-la illana new product add pannuvom
            return [

                // Existing cart products-ai copy panrom
                ...prevItems,

                {
                    // New product-oda id, name, price, image details copy aagum
                    ...product,

                    // New product-oda starting quantity 1
                    quantity: 1
                }
            ];

        });


        // Product cart-la add aana udane sidebar open aagum
        setIsCartOpen(true);
    };


    // STEP 8: Remove product from cart
    // User Remove button click pannumbodhu product ID receive aagum
    const removeFromCart = (id) => {

        // Existing cart items-la selected ID match aagatha products mattum return pannum
        // filter() use panni selected product-ai remove panrom
        setCartItems((prevItems) =>
            prevItems.filter((item) => item.id !== id)
        );
    };


    const clearCart = () => {
        setCartItems([]);
    };


    // STEP 9: Update product quantity
    // Product ID and new quantity receive pannum
    const updateQuantity = (id, quantity) => {


        // Quantity 1-kku keezha pona function stop aagum
        // Example: 1 quantity irukkumbodhu minus panna 0 aaga vida maatom
        if (quantity < 1) return;


        // Existing cart products-ai map() use panni check panrom
        setCartItems((prevItems) =>

            prevItems.map((item) =>

                // Selected product ID match aagudha nu check panrom
                item.id === id

                    // Match aana product:
                    // Existing details retain aagum
                    // Quantity mattum new value-ku update aagum
                    ? {
                        ...item,
                        quantity
                    }

                    // Other products change aagadhu
                    : item
            )
        );
    };


    // STEP 10: Calculate total items
    // Cart-la irukkura products-oda quantity ellame add pannum
    const totalItems = cartItems.reduce(

        // total = previous accumulated quantity
        // item = current product
        (total, item) => total + item.quantity,

        // Starting value 0
        0
    );


    // STEP 11: Calculate subtotal
    // Ovvoru product price-um quantity-um multiply pannuvom
    // Ella products-oda total amount-ai add pannuvom
    const subtotal = cartItems.reduce(

        (total, item) =>
            total + item.price * item.quantity,

        // Calculation starting value 0
        0
    );


    // STEP 12: Provide cart data to child components
    return (

        // CartContext.Provider moolama shared data pass panrom
        <CartContext.Provider

            // Other components access panna vendiya values and functions
            value={{

                cartItems,       // Cart-la irukkura products
                isCartOpen,      // Sidebar open/close status
                setIsCartOpen,   // Sidebar open/close update panna
                addToCart,       // New product add panna
                removeFromCart,  // Product remove panna
                updateQuantity, 
                clearCart, // Product quantity update panna
                totalItems,      // Total quantity calculate panna
                subtotal         // Total price calculate panna

            }}
        >

            {/* Provider-kulla irukkura components render aagum */}
            {children}

        </CartContext.Provider>
    );
}


// STEP 13: Create custom hook
// Other components-la useCart() call pannina
// CartContext-la irukkura shared values ellame access pannalam
export function useCart() {

    // useContext() use panni CartContext data return panrom
    return useContext(CartContext);
}
