import { HashRouter as Router ,  Routes,  Route  } from "react-router-dom";
import GlobalStyle from "./styled/GlobalStyle"
import Layout from "./components/Layout";
import Notfiles from "./pages/notfile/Notfiles";
import Main from "./pages/main/Main";
import Join from "./pages/login/Join";
import About from "./pages/about/About";
import Login from "./pages/login/Login";
import Logout from "./pages/login/Logout";
import Product from "./pages/product/Product";
import Cart from "./pages/cart/Cart";
import Notice from "./pages/notice/Notice";
import NoticeDetail from "./components/notice/NoticeDetail";
import Customer from "./pages/customer/Customer";
import CustomerDetail from "./components/customer/CustomerDetail";
import CustomerAdd from "./components/customer/CustomerAdd";
import CustomerEdit from "./components/customer/CustomerEdit";

const App = () => {
  return (
    <>
        <GlobalStyle/> 
          <Router basename="/">
          <Routes>
          <Route path="/" element={<Layout/> }>
          <Route index element={<Main/>}/>
          <Route path="/join" element={<Join/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/logout" element={<Logout/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/cart" element={<Cart/>}/>

          <Route path="/notice">
          <Route index element={<Notice/>}/>
          <Route path=":noticeID" element={<NoticeDetail/>}/>
          </Route>


          <Route path="/customer">
          <Route index element={<Customer/>}/>
          <Route path=":customerID" element={<CustomerDetail/>}/> {/* 들어가는페이지  */}
          <Route path="customeradd" element={<CustomerAdd/>}/> {/*  들어가는페이지에 있는 링크걸린페이지들 아래까지 */}
          <Route path="customeredit" element={<CustomerEdit/>}/>
          </Route>
          
          </Route>
          <Route path="*" element={<Notfiles/>}/>
        </Routes>
     </Router>
    </>
  );
};

export default App;