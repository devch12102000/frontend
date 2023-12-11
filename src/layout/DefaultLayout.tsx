import {Footer, Header, Sidebar, Content } from '../web/components/index'

const DefaultLayout = () => {
  const handleSideBarControlButton = () =>{
    var docs = document.querySelector('.sidebar-fixed')
    docs && docs.classList.remove('show')
  }
  return (
    <div>
       <Sidebar />
      <div className="wrapper d-flex flex-column min-vh-100" onClick={handleSideBarControlButton}> 
        <Header />
        <div className="body flex-grow-1 bodyBackground px-3">
          <Content />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default DefaultLayout
