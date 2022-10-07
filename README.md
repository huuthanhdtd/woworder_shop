# tipicicms-frontend

tipicicms frontend example

# install

`yarn`

thêm biến môi trường vào file .env (nếu ko có thì tạo file này)
`NEXT_PUBLIC_STRAPI_API_URL=https://tipicicms.herokuapp.com`
`NEXT_PUBLIC_DISCOUNT_PERCENT = 30`
`next dev`

# warning

Nếu khi build bị lỗi mà không phải do code thì rất có thể database bên backend bị thiếu, hãy bổ sung đủ database bên backend

`react-use-cart`

cách sử dụng : import { CartProvider, useCart } from "react-use-cart";
const {item cần sử dụng(vd: updateItemQuantity,removeItem)} = useCart();
addItem(id)
onClick= {()=>updateItemQuantity(item.id, item.quantity - 1)} giảm số lượng đặt
onClick= {()=>updateItemQuantity(item.id, item.quantity + 1)} tăng số lượng đặt
onClick={() => removeItem(item.id)} xoá 1 item local
emptyCart() xoá tất cả item local
