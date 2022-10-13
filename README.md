# woworder front store

woworder front store example

# install

`yarn`


thêm biến môi trường vào file .env (nếu ko có thì tạo file này)

```bash
NEXT_PUBLIC_STRAPI_API_URL=https://khanhbui.vn
NEXT_PUBLIC_CATEGORY = ["Khuyến mãi","Mẹ và bé","Mỹ phẩm","Quần áo nữ", "Quần áo nam","Thực phẩm chức năng","Máy móc điện gia đình","Giày"]
NEXT_PUBLIC_DISCOUNT_PERCENT = 30
next dev
```

# warning

Nếu khi build bị lỗi mà không phải do code thì rất có thể database bên backend bị thiếu, hãy bổ sung đủ database bên backend

`react-use-cart`

cách sử dụng : 
```javascript
import { CartProvider, useCart } from "react-use-cart";
const {item cần sử dụng(vd: updateItemQuantity,removeItem)} = useCart();
addItem(id)
onClick= {()=>updateItemQuantity(item.id, item.quantity - 1)} // giảm số lượng đặt
onClick= {()=>updateItemQuantity(item.id, item.quantity + 1)} // tăng số lượng đặt
onClick={() => removeItem(item.id)} // xoá 1 item local
emptyCart() // xoá tất cả item local
```