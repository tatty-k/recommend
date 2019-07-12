import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'
import { tsPropertySignature } from '@babel/types';


const NavBar = (props) => {
  let nav = props.user ?    
        <div className="navbar navbar-expand-lg navbar-light">
          <span className="navbar-brand" href="#">Welcome {props.user.name}</span>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to={'/'}>LANDING</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/profile'}>PROFILE</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/group/:id'}>GROUP</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/'} onClick={props.handleLogout}>LOGOUT</Link>
              </li>
              
              {/* <!-- Button trigger modal --> */}
              <li className="nav-item" data-toggle="modal" data-target="#exampleModal">
              ADD GROUP
              </li>

              {/* <!-- Modal --> */}
              <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Add New Group</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">

                  {/* Create Group form */}

                      <form onSubmit={props.addGroup}>
                        <label>
                          <div>GROUP NAME</div>
                          <input
                            name="name"
                            type="text"
                            onChange={props.triggerCreateGroup}
                            value={props.newGroup.name}
                            required
                          />
                          </label>
                          <label>
                          <div>DESCRIPTION</div>
                          <input
                            name="description"
                            type="text"
                            onChange={props.triggerCreateGroup}
                            value={props.newGroup.description}
                            required
                          />
                          </label>
                          <label>
                          <div>MEMBERS</div>  
                          <select 
                            name="members"
                            type="text"
                            onChange={props.triggerCreateGroup}
                            > 
                            { props.users.map((user, idx) => (
                            <option>{user.name}</option>
                            ))}
                          </select>
                          </label>  
                        <div>
                          <input
                          onClick={props.addGroup}
                          type="submit" 
                          value="Add Group"
                          className="btn btn-primary"
                          data-dismiss="modal"
                          />
                        </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </div>

              :

        <div className="navbar navbar-expand-lg navbar-light">
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
        </div>

    return ( 
      <div className='NavBar'>
        {nav}
      </div>
    );
}
 
export default NavBar;
