import React from 'react'
import  "../../Css/Login.css";

export default function Login() {
    return (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card">
                <header className="card-header">
                  <h4 className="card-title mt-2">Login</h4>
                </header>
                <article className="card-body">
                  <form>

                    <div className="form-group">
                      <label>Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                      />
                    </div>
                    
                    <div className="form-group">
                      {/* <a className="float-right" href="#">
                        Forgot?
                      </a> */}
                      <label>Password</label>
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="******"
                      />
                    </div>
                    

                    <div className="form-group">
                      <div className="checkbox">
                        <label>
                          {" "}
                          <input type="checkbox" /> Save password{" "}
                        </label>
                      </div>
                      


                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn btn-primary btn-block">
                        
                        Login
                      </button>
                    </div>
                    <div className="form-group">
                      <a href="reset">resetpassword</a>
                    </div>
                    {/* form-group// */}
                  </form>
                </article>{" "}
                {/* card-body end .// */}
              </div>{" "}
              {/* card.// */}
            </div>{" "}
            {/* col.//*/}
          </div>{" "}
          {/* row.//*/}
        </div>
      );
    }
