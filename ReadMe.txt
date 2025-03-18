App cần install cho project
Ant Design: FOR UI
Redux Toolkit

DÙNG ANT DESIGN CHO DESIGN

tạo 1 folder redux trong src

tạo 1 folder slides trong redux -> tạo counterSlide.cs

tiếp theo sử dụng styled-components npm
tạo folder hooks trong src
tạo folder components trong src
tạo folder pages trong src


styled-components dùng để điều chỉnh css
install react router v6
Tạo HomePage, OrderPage, ProductPage -> vô App.js

tạo folder routes -> tạo file index.js để pastes tất cả các path vô trong đó(thuận tiên hơn để làm web)

tiếp theo, tạo 1 style cho Header, tạo 1 WrapperHeader rồi gán nó vào Header

input search text lấy trong ant Design
search icon trong ant design cho phần login/logout
Dùng gutter trong WrapperHeader để cách các components

tạo 1 cái button input search cho header
tạo 1 cái props trong button intput search để chỉnh sửa thông tin linh động hơn trong từng page

#5
tạo 1 cái InputComponent để thay thế tag Input trong BUttonInputSearch(để sau này có thể sử dụng InputComponent ở nhiều nơi khác)
tạo ButtonComponent như InputComponent
Tạo productType folder trong components (Prodcut Type sẽ nằm trong HomePage)
Tạo 1 mảng array cho productType trong HomePage -> dùng .map để list các item trong array vô ProductType
tạo style.js trong folder HomePage (tao Wrapper để wrap cái product type lại)

#6 tạo image slide show vs react-slick
tạo 1 array cho ảnh slider

import {
        @import "slick-carousel/slick/slick.css";
        @import "slick-carousel/slick/slick-theme.css";
        }
        trong file index.css
tạo file SilderComponent.jsx r lấy doc trên https://react-slick.neostack.com/docs/get-started về để tạo slide(thêm thuộc tính nếu thích)

add thêm gap: 16px; flex-wrap: nowrap; vào trong file style.js của thằng Header.jsx
add white-space: nowrap; vào phần WrapperTextHeaderSmall trong file style.js của thằng Header.jsx
fix phần SliderComponent trong HomePage, đặt nó ra 1 cái div riêng để chỉnh padding đẹp hơn (nằm ngoài cái div cũ) 
    -> bọc 2 cái div trong cùng 1 cái fragment <></>

#7
tạo ra CardComponent
vô Ant design tìm 1 cái card design https://ant.design/components/card
bỏ CardComponent vô homePage ngay dưới SliderComponent
tạo style.js cho CardComponent (style.js này đúng để build tùng dòng trong cái CardComponent, vd như tên product, giá)
phân chia các phần trong CardComponent để css trong style.js
tải logo official về tại https://salt.tikicdn.com/ts/upload/5d/4c/f7/0261315e75127c2ff73efd7a1f1ffdf2.png

#8 Tạo phần Navbar
tạo NavbarComponent
swich-case trong NavbarComponent để chia phần ra cho phần navbar (navbar sẽ nằm bên trái)
các phần của Navbar:
        1. label

add NavbarComponent vô HomePage


#9
gắn cái ButtonComponent vô HomePage, add css cho nó => r qua file style.js của tahng82 HomePage để export const WrapperButtonMore
chỉnh 1 số thuộc tính của div CardComponent trong HomePage, bỏ gap đi thay bằng justfityContent: 'space-', + thêm flexWrap: 'wrap' để wrap 
các thể CardComponent xuống dòng
=> tạo 1 path: '/:type' trong index.js của routes folder
tạo 1 TypeProductPage trong pages

#10
Edit lại các style trong TypeProductPage (tạo style.js cho TypeProductPage)

Vô Header tạo <Badge> wrap cái tag ShoppingCartOutlined lại
tao signin/signup/productdetails page trong thằng pages => thêm 3 paths cho từng page trong phần index.js của routes luôn
bắt đầu xây dựng backend
kiếm Pagination trong ant design add vô TypeProductPage

#11
Tạo ProductDetailsComponent trong component và style nó
#12 tiếp tục #11
hoàn tiện phần product details(bao gồm ảnh + details + delivery + buttons)

#13
Login and Signup page
tạo ra component inputForm cho signin/signup
ở inputForm sẽ tạo ra props để trữ placeholder
const {valueInput, setValueInput} = useState('') trong inputForm
trong react, tạo props khi muốn truyền dữ liệu từ parent component xuống child component
sử dụng useState Khi dữ liệu thay đổi và ảnh hưởng đến giao diện, Khi cần theo dõi dữ liệu từ form nhập liệu, Khi cần theo dõi danh sách hoặc mảng dữ liệu
sự khác nhau: props(truyền dữ liệu từ parent component xuống child component) useState(lưu trữ và cập nhật dữ liệu trong component)

#14
điều chỉnh lại css

#15 bắt đầu làm phần backend
npm init
npm i express dotenv bcrypt jsonwe
btoken body-parser cors 
npm  i mongoose

#16 backend 
(LÀM MỌI THỨ TRONG BACKEND BẮT BUỘC PHẢI LOGIN VÔ ADMIN ACCOUNT ĐỂ CÓ ACCESS token)
set up cho models folder(OrderProduct, ProductModel, UserModel)
vô mongodb -> build database -> cluster -> tạo tài khoản trong quickstart -> cluster -> connect your application -< copy đường link ->
-> vào index.js -> cập nhật env file 
chuyển đường link trong index.js từ 'mongodb+srv://bi3996:<db_password>@cluster0.bhk9n4z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0' 
thành `mongodb+srv://bi3996:${process.env.MONGO_DB}@cluster0.bhk9n4z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

#17 backend
tạo idnex.js trong routes

#18 API cho đăng ký người dùng (backend)
#19 API đăng nhập kết hợp jsonwebtoken ở backend
#20 Tạo API cập nhật thông tin người dùng
#21 Tạo API xóa và lấy thông tin người dùng ở backend
#22 Cấp token mới khi access_token hết hạn (bằng refresh_token)
------
#23 Viết API CRUD cho product
#24 Paginated ở phía backend
#25 Sort và filter cho product