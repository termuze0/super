import React from 'react'

export default function Change() {
    return (
        <>
            <title>Login Page</title>
            {/* Bootstrap CSS */}
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            />
            {/* Custom CSS */}
            <link rel="stylesheet" href="css/style.css" />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <header className="card-header">
                                <h4 className="card-title mt-2">Change password</h4>
                            </header>
                            <article className="card-body">
                                <form method="post" action="<?php echo 'changepassword'; ?>">
                                    <div className="form-group">
                                        <label>new password</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="new password"
                                            name="newpassword"
                                        />
                                        <input
                                            type="hidden"
                                            className="form-control"
                                            name="email"
                                            defaultValue="<?php echo $email; ?>"
                                        />
                                    </div>{" "}
                                    {/* form-group// */}
                                    <div className="form-group">
                                        <label>confrim password</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="new password"
                                            name="newpassword"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary btn-block">
                                            {" "}
                                            change
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
            {/*container end.//*/}
            {/* jQuery */}
            {/* Bootstrap JS */}
            <style
                type="text/css"
                dangerouslySetInnerHTML={{
                    __html:
                        "\n\tbody {\n\tbackground-color: #f5f5f5;\n}\n.card {\n\tborder: 0;\n\tbox-shadow: 0 0 40px rgba(0,0,0,0.05);\n}\n.card-header {\n\tbackground-color: transparent;\n\tborder-bottom: 0;\n\tfont-size: 18px;\n\tfont-weight: bold;\n}\n.card-title {\n\tmargin-bottom: 0;\n}\n.form-control {\n\theight: 45px;\n\tbox-shadow: none;\n\tborder-radius: 0;\n\tborder-color: #dfe3e8;\n}\n.form-control:focus {\n\tbox-shadow: none;\n\tborder-color: #5cd3b4;\n}\n.btn-primary {\n\tbackground-color: #5cd3b4;\n\tborder-color: #5cd3b4;\n}\n.btn-primary:hover, .btn-primary:focus {\n\tbackground-color: #46a988;\n\tborder-color: #46a988;\n}\n.checkbox label {\n\tfont-weight: normal;\n}\n"
                }}
            />
        </>

    )
}
