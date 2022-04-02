import Header from "./Header"

const Layout = ({ children, categories, seo }) => (
  <>
    <Header />
    {children}
  </>
)

export default Layout
