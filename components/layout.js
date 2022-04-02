import Footer from "./Footer"
import Header from "./Header"

const Layout = ({ children, categories, seo }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)

export default Layout
