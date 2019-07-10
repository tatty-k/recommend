import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'


const NavBar = (props) => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light">
          <span className="navbar-brand" href="#">Recommend</span>
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
              
              {/* <!-- Button trigger modal --> */}
              <li className="nav-item" data-toggle="modal" data-target="#exampleModal">
              ADD GROUP
              </li>

              {/* <!-- Modal --> */}
              <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
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
                            required
                          />
                          </label>
                          <label>
                          <div>DESCRIPTION</div>
                          <input
                            name="description"
                            type="text"
                            onChange={props.triggerCreateGroup}
                            required
                          />
                          </label>
                          <label>
                          {/* <div>MEMBERS</div>   */}
                          {/* TODO: make this a search */}
                          {/* <select
                            name="members"
                            type="text"
                            TODO:
                            value={}
                            onChange={}
                            > 
                            <option value="1">Sally Mea</option>
                          </select> */}
                        </label>
                    <div>
                      {/* maybe change to input with type submit */}
                      <button
                      onClick={props.addGroup}
                      //  type="submit" 
                      // value="Add Group"
                      className="btn btn-primary"
                      >
                      Add Group
                      </button>
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
        </nav>
    );
}
 
export default NavBar;
