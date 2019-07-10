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
              <li className="nav-item">
              {/* <!-- Button trigger modal --> */}
              <li className="nav-item" data-toggle="modal" data-target="#exampleModal">
                ADD GROUP
              </li>

              {/* <!-- Create Group form --> */}
              <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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

                    <form onSubmit={props.addGroup}>
                      <label>
                        <div>GROUP NAME</div>
                        <input
                          name="name"
                          type="text"
                          // value={props.newGroup.group}
                          onChange={props.triggerCreateGroup}
                          required
                        />
                        </label>
                        <label>
                        <div>DESCRIPTION</div>
                        <input
                          name="description"
                          type="text"
                          // value={this.state.newGroup.description}
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

                  </div>
                </div>
              </div>
              </li>
            </ul>
          </div>
        </nav>
    );
}
 
export default NavBar;