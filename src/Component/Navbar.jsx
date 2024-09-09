
const Navbar = ({setCategory}) => {
  return (
      <nav className="navbar navbar-expand-sm bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-4" >Tikva News</span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <div className="nav-link" onClick={()=>setCategory("sport")} >Sport</div>
            <div className="nav-link" onClick={()=>setCategory("health")} >Health</div>
            <div className="nav-link"onClick={()=>setCategory("technology")} >Technology</div>
            <div className="nav-link" onClick={()=>setCategory("science")} >science</div>
            <div className="nav-link" onClick={()=>setCategory("business")} >Business</div>
          </div>
        </div>
      </div>
</nav>
  )
}
export default Navbar