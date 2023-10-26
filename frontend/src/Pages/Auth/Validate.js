import React from 'react'

export default function Validate() {
    return (
        <>
            <title>Vertify</title>
            <form
                method="post"
                action="<?php echo 'Vertify'; ?>"
                className="otp-form"
                name="otp-form"
            >
                <div className="title">
                    <h3>OTP VERIFICATION</h3>
                    <p className="info">An otp has been sent to {/*?php echo $email ?*/}</p>
                    <p className="msg">Please enter OTP to verify</p>
                </div>
                <div className="otp-input-fields">
                    <input type="number" className="otp__digit otp__field__1" />
                    <input type="number" className="otp__digit otp__field__2" />
                    <input type="number" className="otp__digit otp__field__3" />
                    <input type="number" className="otp__digit otp__field__4" />
                    <input type="number" className="otp__digit otp__field__5" />
                    <input type="number" className="otp__digit otp__field__6" />
                </div>
                <input
                    className="email"
                    type="hidden"
                    name="email"
                    defaultValue="<?php echo $email ?>"
                    id="_oema"
                />
                <input className="result" type="hidden" name="inputtoken" id="_otp" />
                <input id="submitbtn" type="submit" defaultValue="Confrim" />
            </form>
            <style
                type="text/css"
                dangerouslySetInnerHTML={{
                    __html:
                        "\n* {\n  box-sizing: border-box;\n}\nbody {\n  margin: 0;\n}\n.title {\n  max-width: 400px;\n  margin: auto;\n  text-align: center;\n  font-family: \"Poppins\", sans-serif;\n}\n.title h3 {\n  font-weight: bold;\n}\n.title p {\n  font-size: 12px;\n  color: #118a44;\n}\n.title p.msg {\n  color: initial;\n  text-align: initial;\n  font-weight: bold;\n}\n.otp-input-fields {\n  margin: auto;\n  background-color: white;\n  box-shadow: 0px 0px 8px 0px #02025044;\n  max-width: 400px;\n  width: auto;\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n  padding: 40px;\n}\n.otp-input-fields input {\n  height: 40px;\n  width: 40px;\n  background-color: transparent;\n  border-radius: 4px;\n  border: 1px solid #2f8f1f;\n  text-align: center;\n  outline: none;\n  font-size: 16px;\n}\n.otp-input-fields input::-webkit-outer-spin-button, .otp-input-fields input::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n  /* Firefox */\n}\n.otp-input-fields input[type=number] {\n  -moz-appearance: textfield;\n}\n.otp-input-fields input:focus {\n  border-width: 2px;\n  border-color: #287a1a;\n  font-size: 20px;\n}\n.result {\n  max-width: 400px;\n  margin: auto;\n  padding: 24px;\n  text-align: center;\n}\n.result p {\n  font-size: 24px;\n  font-family: 'Antonio', sans-serif;\n  opacity: 1;\n  transition: color 0.5s ease;\n}\n.result p._ok {\n  color: green;\n}\n.result p._notok {\n  color: red;\n  border-radius: 3px;\n}\n#submitbtn{\n  height: 40px;\n  width: 100px;\n  background-color: #232;\n  color: #fff;\n  display: block;\n  margin: auto;\n\n\n}\n\n"
                }}
            />
        </>
    )
}
