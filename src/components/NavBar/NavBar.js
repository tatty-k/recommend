import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = (props) => {
  let nav = props.user ?    
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <span className="navbar-brand" href="#">Welcome {props.user.name}</span>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-nav collapse navbar-collapse" id="navbarNav">
            <Link to='getting-started' className="nav-item nav-link">GETTING STARTED</Link>
            <Link className="nav-item nav-link" to={'/profile'}>PROFILE</Link>
            <Link className="nav-item nav-link" to={'/'} onClick={props.handleLogout}>LOGOUT</Link> 
              
              {/* <!-- Button trigger modal --> */}
              <li className="nav-item nav-link" data-toggle="modal" data-target="#exampleModal">
              ADD GROUP
              </li>

              {/* <!-- Modal --> */}
              <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Add New Group</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">

                  {/* Create Group form */}

                      <form className="form-horizontal" onSubmit={props.addGroup}>
                          <div className="form-group">
                            <input
                              name="name"
                              type="text"
                              onChange={props.triggerCreateGroup}
                              value={props.newGroup.name}
                              required
                              className="form-control"
                              placeholder="Name your group"
                            />
                          </div>
                          <div className="form-group">
                            <input
                              name="description"
                              type="text"
                              onChange={props.triggerCreateGroup}
                              value={props.newGroup.description}
                              required
                              className="form-control"
                              placeholder="Describe your group"
                            />
                          </div>
                          { props.users.map((user, idx) => (
                          <label key={idx}>
                          <div>{user.name}</div>  
                          <input 
                            className="m-4"
                            name={user.email}
                            type="checkbox"
                            onChange={props.triggerCreateGroup}
                            data-userid={user._id}
                            checked={props.newGroup.members.includes(user._id)}
                          />
                          </label> 
                          ))} 
                        <div>
                          <input
                          disabled={!props.newGroup.name || !props.newGroup.description || !props.newGroup.members }
                          onClick={props.addGroup}
                          type="submit" 
                          value="Add Group"
                          className="btn btn-primary mt-1"
                          data-dismiss="modal"
                          />
                        </div>
                        </form>
                        {/* <pre>{JSON.stringify(props.newGroup, null, 4)}</pre> */}
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </nav>

              :

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <span className="navbar-brand" href="#">Recommend</span>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to={'/login'}>LOGIN</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/signup'}>SIGNUP</Link>
              </li>
            </ul>
          </div>  
        </nav>

    return ( 
      <div className='NavBar'>
        {nav}
      </div>
    );
}
 
export default NavBar;
