import Footer from "./Footer"
import Header from "./Header"
import ContextProvider from "../constants/Context"

const Layout = ({ children, categories, seo }) => (
  <>
    <ContextProvider>
      <Header />
      {children}
      <Footer />
    </ContextProvider>
  </>
)

export default Layout
