import React from 'react'

export default function Reset() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <header className="card-header">
                            <h4 className="card-title mt-2">Reset password</h4>
                        </header>
                        <article className="card-body">
                            <form method="post" action="<?php echo 'resetfun'; ?>">
                                <div className="form-group">
                                    <label>Email address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Email"
                                        name="email"
                                    />
                                </div>{" "}
                                
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary btn-block">
                                        {" "}
                                        Reset
                                    </button>
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

    )
}
