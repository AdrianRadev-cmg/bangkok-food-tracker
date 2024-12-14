import './Layout.css'

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="layout">
      <div className="layout-container">
        {children}
      </div>
    </div>
  )
}

export default Layout